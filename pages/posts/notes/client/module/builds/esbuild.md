---
title: ESBuild 基于 GO 的 JS|TS 编译器
date: 2021-06-29
categories:
  - Notes
  - Client
  - bundler
tags: 
  - grunt
---

esbuild 是一个用 go 语言写的 javascript, typescript 打包工具，速度比 webpack 快 100 倍以上。

<!-- more -->

![](https://pic.imgdb.cn/item/62f5b6a116f2c2beb1ea99c2.jpg)

## 为什么这么快 ？

- js 是单线程串行，esbuild 是新开一个进程，然后多线程并行，充分发挥多核优势
- go 是纯机器码，肯定要比 JIT 快
- 不使用 AST，优化了构建流程。（也带来了一些缺点）


## 基本使用

> ESbulid 文档: [esbuild.github.io/api](https://link.juejin.cn/?target=https%3A%2F%2Fesbuild.github.io%2Fapi%2F)

Esbuild 有命令行 ，js 调用， go 调用三种使用方式。

命令行：

~~~sh
# cmd >> minify 为压缩, outfile 为输出文件
esbuild app.jsx --bundle --outfile=out.js --minify
~~~

代码调用：

~~~js
import { build } from 'esbuild'
// 编译路径文件
build({
  entryPoints: ['app.jsx'],
  outfile: 'out.js',
  bundle: true
})
~~~

## Plugin 概念

在 esbuild 中，插件被设计为一个函数，该函数需要返回一个对象（`Object`），对象中包含 `name` 和 `setup` 等 2 个属性：

其中，`name` 的值是一个字符串，它表示你的插件名称 。 `setup` 的值是一个函数，它会被传入一个参数 `build`（对象）。

`build` 对象上会暴露整个构建过程中**非常重要**的 2 个函数：`onResolve` 和 `onLoad`，它们都需要传入 Options（选项）和 CallBack（回调）等 2 个参数。

其中，Options 是一个对象，它包含 `filter`（必须）和 `namespace` 等 2 个属性:

```typescript
interface OnResolveOptions {
  filter: RegExp;
  namespace?: string;
}
```


而 CallBack 是一个函数，即回调函数。插件实现的关键则是在 `onResolve` 和 `onLoad` 中定义的回调函数内部做一些特殊的处理。

那么，接下来先来认识一下 Options 的几个个属性：`namespace` 和 `filter`（划重点，它们**非常重要** ）

### namespace

默认情况下，esbuild 是在文件系统上的文件（File Modules）相对应的 `namespace` 中运行的，即此时 `namespace` 的值为 `file`。

esbuild 的插件可以创建 Virtual Modules，而 Virtual Modules 则会使用 `namespace` 来和 File Modules 做区分。

> 注意，每个 `namespace` 都是特定于该插件的。

简单地理解，Virtual Modules （虚拟模块）是指在系统中不存在的模块，往往需要我们构造出 Virtual Modules 对应的模块内容。

### filter

`filter` 作为 Options 上必须的属性，它的值是一个正则。它主要用于匹配指定规则的导入（`import`）路径的模块，避免执行不需要的回调，从而提高整体打包性能。

### onResolve 

`onResolve` 函数的回调函数会在 esbuild 构建每个模块的导入路径（可匹配的）时执行。

`onResolve` 函数的回调函数需要返回一个对象，其中会包含 `path`、`namespace`、`external` 等属性。

通常，该回调函数会用于自定义 esbuild 处理 `path` 的方式，例如：

- 重写原本的路径，例如重定向到其他路径
- 将该路径所对应的模块标记为 `external`，即不会对改文件进行构建操作（原样输出）

### onLoad

`onLoad` 函数的回调函数会在 esbuild 解析模块之前调用，主要是用于**处理并返回模块的内容**，并告知 esbuild 要如何解析它们。并且，需要注意的是 `onLoad` 的回调函数不会处理被标记为 `external` 的模块。

`onLoad` 函数的回调函数需要返回一个对象，该对象总共有 9 个属性。这里我们来认识一下较为常见 3 个属性：

- `contents` 处理过的模块内容
- `loader` 告知 esbuild 要如何解释该内容（默认为 `js`)。例如，返回的模块内容是 CSS，则声明 `loader` 为 `css`
- `resolveDir` 是在将导入路径解析为文件系统上实际路径时，要使用的文件系统目录

## Plugin 自定义

~~~ts
import axios from 'axios'
import type { Plugin } from 'esbuild'
import esbuild, { transform } from 'esbuild'

const importCdnUrlPlugin: Plugin = {
  name: 'url-import',
  setup: ({ onResolve, onLoad }) => {
    // 在 onResolve 的时候将对应的 filter 引入更改命名空间
    onResolve({ filter: /^https?:\/\// }, ({ path }) => {
      return { namespace: 'url-import', path }
    })

    // 在进入 onResolve 时，假如是 url-import 空间, 将地址转换为绝对地址
    // ./add.js > https.../add.js
    onResolve({ filter: /.*/, namespace: 'url-import' }, ({ path, importer }) => {
      const urlPath = new URL(path, importer).toString()
      return { namespace: 'url-import', path: urlPath }
    })

    // 在 onLoad 时只接受 url-import 的命名空间
    // 在这里请求 path, 将内容 return 出去
    onLoad({ filter: /.*/, namespace: 'url-import' }, async ({ path }) => {
      const { data: contents } = await axios.get(path)
      return { contents }
    })
  }
}

esbuild.build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [importCdnUrlPlugin]
})
~~~
