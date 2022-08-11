---
title: Webpack 基本应用
categories:
  - Notes
  - Client
  - webpack
tags: 
  - webpack
---

webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)

## 五个核心

- **entry**   指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。
- **output**  指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。
- **loader**  loader 让 webpack 能够去处理那些 非 JavaScript 文件 (webpack 自身只理解 JavaScript)
- **plugins** 可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。
- **mode**    指示 webpack 使用相应模式的配置。

<!-- more -->

## 基本特征

- `webpack` 能够编译打包 `js` 和 `json` 文件。
- 能将 `es6` 的模块化语法转换成浏览器能识别的语法。
- 不能编译打包 `css、img` 等文件，
- 不能将 `js` 的 `es6` 基本语法转化为 `es5` 以下语法。

## 模式特征

`development` - 本地调试运行环境 `webpack src/js/index.js -o build/js/built.js --mode=development`

- 启用 NamedChunksPlugin、NamedModulesPlugin。
- 将 DefinePlugin 中的 process `env.NODE_ENV` 设置为 `development`

`production`  - 线上优化运行环境 `webpack src/js/index.js -o build/js/built.js --mode=production`

- 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。
- 将 DefinePlugin 中的 process `env.NODE_ENV` 设置为 `production`

## 基本应用

源文件：

~~~javascript
// 引入资源
import data from './data.json';
console.log(data);
function add(x, y) { return x + y; }
console.log(add(1, 2));
~~~

配置 `config` 接口文件(webpack.config.js)

~~~javascript
const { resolve } = require('path'); // node 内置核心模块，用来处理路径问题。
module.exports = {
  	// 接口文件
	entry: './src/js/index.js', 					
	// 输出配置
	output: { 
		filename: './built.js', 			// 输出文件名
		path: resolve(__dirname, 'build/js') // 输出文件路径配置(绝对路径)
	},
	mode: 'development' //开发环境
};
~~~

**运行指令**： `webpack`

> 注意，此时功能只能编译打包 `js` 和 `json`

