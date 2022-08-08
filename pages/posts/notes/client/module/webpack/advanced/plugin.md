---
title: 自定义 webpack plugin
categories:
  - notes
  - client
  - webpack
tags: 
  - webpack
---

plugin(插件)是 webpack 的几大要素之一，plugin的目的在于在 webpack 构建打包生命周期中中执行一些可扩展性功能。它可以在 webpack 运行到某个时刻帮你做一些事情。plugin会在webpack初始化时,给相应的生命周期函数绑定监听事件，直至webpack执行到对应的那个生命周期函数,plugin绑定的事件就会触发。

<!-- more -->

## tabpable

webpack 将整个打包构建过程切割成了很多个环节，每一个环节对应着一个生命周期函数(简称钩子函数，也可称 hook)，其中基本靠 [tabpable](https://github.com/webpack/tapable#tapable) 实现。

[tabpable](https://github.com/webpack/tapable#tapable) 是一个基于观察者模式的工具库，提供了同步/异步的观察者构造函数，webpack plugin 的 compiler 基于 tabpable 实现，向外提供 webpack 的生命周期钩子。

### SyncHooks

创建同步的 hooks ，任务依次执行，参数为可接收的值

~~~js
import { SyncHooks } from 'tabable'
// 创建一个 hooks
const hooks = new SyncHooks(['address'])
// 往 hooks 容器中注册事件/添加回调函数
hooks.tab('class-0318', (address) => {
  /* .... */
})
// 触发所有钩子函数(监听者)
hooks.call('北京')
~~~

### SyncBailHooks

与 SyncHooks 基本一致，但回调中遇到返回值则停止调用剩余的 hooks

### AsyncParallelHook

创建一个异步并行的 hooks，并行执行

~~~js
const hooks = new AsyncParallelHook(['name', 'age'])
// 添加一个异步的 hook, 通过钓鱼 callback 代表执行完毕
hooks.leave.tapAsync('class-0510', async (name, age, callback) => {
  await awaitPromise(1000)
  console.log('class-0510', name, age)
  callback()
})
~~~

## 基本定义

自定义插件的定义，有两种方式，一种是使用类的方式，一种是函数方式，compiler 是 webpack 提供的内置对象，有丰富的生命周期。

### 类模式

~~~js
class Plugin {
  apply(compiler) {}
}
// webpack.config.ts
const config = {
  plugins: [new Plugin()]
}
~~~

### 函数模式

~~~js
const plugin = (compiler) => {}
// webpack.config.ts
const config = {
  plugins: [plugin]
}
~~~

## 主要引擎(compiler)

`Compiler` 模块是 webpack 的主要引擎，它通过 [CLI](https://webpack.docschina.org/api/cli) 传递的所有选项， 或者 [Node API](https://webpack.docschina.org/api/node)，创建出一个 compilation 实例。 它扩展(extend)自 `Tapable` 类，用来注册和调用插件。 大多数面向用户的插件会首先在 `Compiler` 上注册。

~~~js
const plugin = (compiler) => {
  // 输出 asset 到 output 目录之前执行
  compiler.hooks.emit.tap('plugin-1', (compilation) => {
    console.log('emit.tab 1')
  })
  compiler.hooks.emit.tapPromise('plugin-1', async (compilation) => {
    await awaitPromise(1000)
    console.log('emit.tab 1')
  })
  // 输出 asset 到 output 目录之后执行
  compiler.hooks.afterEmit.tap('plugin-1', (compilation) => {
    console.log('afterEmit.tab 1')
  })
  compiler.hooks.done.tap('plugin-1', (stats) => {
    console.log('done.tab 1')
  })
}
~~~

## 编译|构建(compilation)

`Compilation` 模块会被 `Compiler` 用来创建新的 compilation 对象（或新的 build 对象）。 `compilation` 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。 它会对应用程序的依赖图中所有模块， 进行字面上的编译(literal compilation)。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。

~~~js
// 获取 compilation
const plugin = (compiler) => {
  compiler.hooks.thisCompilation.tab('plugin', (compilation) => {
    console.log(compilation)
  })
}
~~~

> 上述在初始化 `compilation` 时调用获取，在触发 `compilation` 事件之前调用，使用`compilation` 可对打包文件进行在处理。

~~~js
import path from 'path'
import type { Compiler, WebpackPluginInstance } from 'webpack'
import { sources } from 'webpack'
import fs from 'fs-extra'

class Plugin implements WebpackPluginInstance {
  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap('plugin-2', (compilation) => {
      compilation.hooks.additionalAssets.tapPromise('plugin-2', async () => {
        // 文章路径
        const articlePath = path.resolve(__dirname, '../src/article.txt')

        // 往要输出的资源中, 添加一个 article.text
        const buff = await fs.readFile(articlePath)

        // 创建 webpack 风格文件源
        const sourceFile = new sources.RawSource(buff)

        // 方式一: 直接添加
        compilation.assets['article-1.txt'] = sourceFile
        // 方式二: emitAsset
        compilation.emitAsset('article-2.txt', sourceFile)
      })
    })
  }
}
export default Plugin
~~~

## 实现 copy-plugin

~~~ts
// plugin/copy-webpack-plugin.ts
import path from 'path'
import type { Compiler, WebpackPluginInstance } from 'webpack'
import { sources } from 'webpack'
import { validate } from 'schema-utils'
import type { Schema } from 'schema-utils/declarations/validate'
import fg from 'fast-glob'
import fs from 'fs-extra'

/**
 * CopyWebpackPlugin 配置
 * @property from   - copy 路径
 * @property to     - dist 拼接路径
 * @property ignore - 忽略文件
 */
interface CopyWebpackOption {
  from: string
  to?: string
  ignore?: string[]
}

/** 校验映射 */
const schema: Schema = {
  type: 'object',
  properties: {
    from: { type: 'string' },
    to: { type: 'string' },
    ignore: { type: 'array' }
  },
  additionalProperties: false
}

/** 插件名称 */
const PLUGIN_NAME = 'copy-webpack-plugin'

/**
 * @name CopyWebpackPlugin
 * @description 复制 webpack 任意项目路径中的文件到 dist 打包目录
 */
class CopyWebpackPlugin implements WebpackPluginInstance {
  constructor(private options: CopyWebpackOption) {
    // 处理参数, 兼容 fast-glob 读取
    options.from = path.join(options.from, './**').replace(/\\/g, '/')
    // 校验参数
    validate(schema, options, { name: PLUGIN_NAME })
  }

  apply(compiler: Compiler) {
    const { to = '', from, ignore } = this.options
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      /** 将 from 中的资源复制并输出到 to 中 */
      compilation.hooks.additionalAssets.tapPromise(PLUGIN_NAME, onAdditionalAssets)

      async function onAdditionalAssets() {
        // 1. 读取 from 中所有资源, 过滤掉 ignore 的文件
        const paths = await fg(from, { ignore })

        // 2. 生成 webpack 格式的资源
        const sourceFiles = paths.map((p) => {
          const basename = path.basename(p)
          const assetPath = to ? path.join(basename) : basename
          const file = fs.readFileSync(p)
          const source = new sources.RawSource(file)
          return { assetPath, source }
        })

        // 3. 添加 compilation assets 当中
        sourceFiles.forEach(({ assetPath, source }) => {
          compilation.emitAsset(assetPath, source)
        })
      }
    })
  }
}

export default CopyWebpackPlugin
~~~