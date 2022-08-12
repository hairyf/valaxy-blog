---
title: 实现迷你 webpack
categories:
  - Notes
  - Client
  - webpack
tags: 
  - webpack
date: 2019-11-10 17:00:00
---

其实 webpack 早期时候并不是用来当做一个脚手架来用的（loader，plugin 是后人慢慢加进去的功能），它只是一个把 es6 或者 commonJs 转换成浏览器可识别脚本的工具。而 mini webpack 就是对这一基本功能的实现。

<!-- more -->

## 实现依赖收集(deps)

~~~ts
// lib/webpack/core.ts

import path from 'path'
import type { DeepRequired } from '@tuimao/core'
import { merge } from 'lodash'
import fs from 'fs-extra'

// @babel/parser 用于将字符串转换为 ast
import { parse } from '@babel/parser'

// @babel/traverse 用于节点遍历查询
import traverse from '@babel/traverse'

// @babel/generator 用于将节点转换为代码
import { transformFromAstSync } from '@babel/core'

export interface Configuration {
  entry?: string
  output?: {
    path?: string
    filename?: string
  }
}

const base = process.cwd()
const defaultConfig = {
  entry: path.resolve(base, './src/index.js'),
  output: {
    filename: path.resolve(base, 'main.js'),
    path: path.resolve(base, './dist')
  }
}

class Compiler {
  $options: DeepRequired<Configuration>
  constructor(options: Configuration) {
    this.$options = merge(defaultConfig, options)
  }

  /**
   * 创建 webpack 打包
   */
  run() {
    // 获取到文件文件夹路径
    const dirname = path.dirname(this.$options.entry)
    // 1. 读取入口文件内容
    const entryFile = fs.readFileSync(this.$options.entry, 'utf-8')
    // 2. 将其解析成 ast 抽象语法树
    const ast = parse(entryFile, {
      sourceType: 'module'
    })

    // 定义储存依赖的容器
    const deps: Record<string, string> = {}

    // 递归收集入口依赖
    traverse(ast, {
      // 内部遍历 ast 中的 program.body 判断里面语句类型
      // 如果 type = ImportDeclaration 则触发当前函数
      ImportDeclaration({ node }) {
        const importPath = node.source.value
        // 这里只做一个简单的拼接, 实际情况要复杂很多
        // - 是否携带后缀 .js | .ts
        // - 是否是 node_modules 中的 package
        const absolutePath = path.resolve(dirname, importPath)
        // 进行收集
        deps[importPath] = absolutePath
      }
    })

    // 将入口文件编译为浏览器可识别代码
    const { code } = transformFromAstSync(ast, null, { presets: ['@babel/preset-env'] })
    console.log(code)
  }
}

export function webpack(config: Configuration) {
  return new Compiler(config)
}
~~~


整段代码可以看到，收集的 deps 还没有处理，这里先不着急，先把功能模块分离了。

## 分离源码逻辑

入口文件：`webpack/index.ts`

~~~ts
import { merge } from 'lodash'
import type { Configuration } from './core'
import { defaultConfig } from './core'
import Compiler from './compiler'

export function webpack(config: Configuration) {
  const $config = merge(defaultConfig, config)
  return new Compiler($config)
}
~~~

源码配置：`webpack/core.ts`

~~~ts
import path from 'path'

/** 基本地址 */
export const basePath = process.cwd()

/** 外部配置 */
export interface Configuration {
  entry?: string
  output?: {
    path?: string
    filename?: string
  }
}

/** 内部读取配置 */
export type ConfigurationRead = Configuration & typeof defaultConfig

/** 默认配置 */
export const defaultConfig = {
  entry: path.resolve(basePath, './src/index.js'),
  output: {
    filename: path.resolve(basePath, 'main.js'),
    path: path.resolve(basePath, './dist')
  }
}
~~~

解析方法：`webpack/parser.ts`

~~~ts
import path from 'path'
import fs from 'fs-extra'

// @babel/parser 用于将字符串转换为 ast
import type { ParserOptions } from '@babel/parser'
import { parse } from '@babel/parser'

// @babel/traverse 用于节点遍历查询
import traverse from '@babel/traverse'

// transformFromAstSync 用于将节点转换
import type { Node } from '@babel/core'
import { transformFromAstSync } from '@babel/core'

/**
 * 同步读取文件 ast
 * @param path 路径
 * @param options {ParserOptions}
 */
export const readFileAstSync = (path: string, options?: ParserOptions) => {
  const file = fs.readFileSync(path, 'utf-8')
  return parse(file, options || { sourceType: 'module' })
}

/**
 * 读取 entry ast 中 module 并收集依赖
 * @param entry
 */
export const readFileAstModuleDeps = (entry: string) => {
  const ast = readFileAstSync(entry)
  // 获取到文件文件夹路径
  const dirname = path.dirname(entry)

  // 定义储存依赖的容器
  const deps: Record<string, string> = {}
  // 递归收集入口依赖
  traverse(ast, {
    // 内部遍历 ast 中的 program.body 判断里面语句类型
    // 如果 type = ImportDeclaration 则触发当前函数
    ImportDeclaration({ node }) {
      const importPath = node.source.value
      // 这里只做一个简单的拼接, 实际情况要复杂很多
      // - 是否携带后缀 .js | .ts
      // - 是否是 node_modules 中的 package
      const absolutePath = path.resolve(dirname, importPath)
      // 进行收集
      deps[importPath] = absolutePath.replace(/\\/g, '/')
    }
  })
  return deps
}

/**
 * 将 ast 经过 @babel/preset-env 处理返回代码
 * @param ast
 */
export const transformPresetEnvCode = (ast: Node) => {
  const { code } = transformFromAstSync(ast, null, { presets: ['@babel/preset-env'] })
  return code || ''
}
~~~

编译器：`webpack/compiler.ts`

~~~ts
import type { ConfigurationRead } from './core'
import { readFileAstModuleDeps, readFileAstSync, transformPresetEnvCode } from './parser'

class Compiler {
  constructor(private $options: ConfigurationRead) {}
  /**
   * 创建 webpack 打包
   */
  run() {
    // 1. 读取入口文件 ast
    const ast = readFileAstSync(this.$options.entry)

    // 2. 收集引入依赖
    const deps = readFileAstModuleDeps(this.$options.entry)

    // 3. 将入口文件编译
    const code = transformPresetEnvCode(ast)

    console.log(ast, deps, code)
  }
}

export default Compiler
~~~

## 代码生成(generate)

~~~ts
import path from 'path'
import fs from 'fs-extra'
import type { ConfigurationRead } from './core'
import { readFileAstModuleDeps, readFileAstSync, transformPresetEnvCode } from './parser'
interface Source {
  path: string
  deps: Record<string, string>
  code: string
}

interface Dependencys {
  [key: string]: {
    code: string
    deps: Record<string, string>
  }
}

class Compiler {
  constructor(private $options: ConfigurationRead, private modules: Source[] = []) {}
  /**
   * 创建 webpack 打包
   */
  run() {
    // 1. 初次构建, 得到入口文件的信息
    const entry = this.$options.entry
    const source = this.build(entry)

    this.modules.push(source)
    // 2. 遍历所有的依赖, 收集所有模块
    for (const { deps } of this.modules) {
      // 遍历当前文件的所有依赖
      for (const [_, absolutePath] of Object.entries(deps)) {
        const depSource = this.build(absolutePath)
        // 将处理信息再次加入 modules 中
        // 下一步遍历将遍历该模块
        this.modules.push(depSource)
      }
    }
    // 3. 将依赖整理成依赖关系表
    const depsGraph = this.modules.reduce((graph, source) => {
      return {
        ...graph,
        [source.path]: {
          code: source.code,
          deps: source.deps
        }
      }
    }, <Dependencys>{})
    this.generate(depsGraph)
  }

  /**
   * 构建某个 js 文件
   * @param filePath
   */
  build(filePath: string) {
    // 1. 读取文件 ast
    const ast = readFileAstSync(filePath)

    // 2. 收集引入依赖
    const deps = readFileAstModuleDeps(filePath)

    // 3. 将文件编译
    const code = transformPresetEnvCode(ast)

    return <Source>{ path: filePath, deps, code }
  }

  generate(depsGraph: Dependencys) {
    const bundle = `
    ;(function (depsGraph) {
      // require 目的: 加载入口文件
      function require(module) {
        // 模块内部的 require 函数, 调用模块中依赖模块, 再次进入外部 require
        function localRequire(depModule) {
          return require(depsGraph[module].deps[depModule])
        }

        // 定义暴露对象 (将来模块要暴露的内容)
        let exports = {}

        ;(function (require, exports, code) {
          // 调用 code, 存在 require 会进入内部的 localRequire
          // 从而形成递归调用, 调用 code > 存在依赖 > 调用 localRequire > 调用 code ....
          eval(code)
        })(localRequire, exports, depsGraph[module].code)

        // 返回模块中的 exports 对象
        // 这里其实做的不完整, 因为 exports 会因为 module.exports 给覆盖
        return exports
      }

      // 加载入口文件
      require('${this.$options.entry}')
    })(${JSON.stringify(depsGraph)})
    `

    const filePath = path.resolve(this.$options.output.path, this.$options.output.filename)
    fs.ensureDirSync(this.$options.output.path)
    fs.writeFileSync(filePath, bundle)
  }
}

export default Compiler
~~~

