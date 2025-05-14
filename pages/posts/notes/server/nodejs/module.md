---
title: NodeJS CommonJS 规范
date: 2020-05-03 15:00:00
categories:
  - Notes
  - Server
  - NodeJS
tags:
  - NodeJS
---

如果程序设计的规模达到了一定程度，则必须对其进行模块化，模块化可以有多种形式，但至少应该提供能够将代码分割为多个源文件的机制。Node.js 执行的 CommonJS 模块功能可以帮我们解决该问题。

<!-- more -->

- CommonJS 规范的提出，主要是为了弥补当前 JavaScript 没有模块化标准的缺陷。
- CommonJS 规范为 JS 指定了一个美好的愿景，希望 JS 能够在任何地方运行。
- CommonJS 对模块的定义十分简单： – 模块引用 – 模块定义 – 模块标识

## 模块概念

模块标识：

模块标识其实就是模块的名字，也就是传递给require()方法的参数，它必须是符合驼峰命名法的字符串，或者是以.、…开头的相对路径、或者绝对路径。

模块的定义十分简单，接口也十分简洁。每个模块具有独立的空间，它们互不干扰，在引用时也显得干净利落。

核心模块：

由node引擎提供的模块，核心模块的标识就是，模块的名字，里面封装着内置方法
`var fs = require("fs");`

文件模块：

由用户自己创建的模块，文件模块的标识就是文件的路径（绝对路径，相对路径）
相对路径使用 `.` 或 `..` 开头

软件模块：

由安装的依赖名称表示，通常存在 `node_modules` 中，通过 `npm i [name]` 安装。

## 模块实例

- Node.js 中虽然使用的是 CommonJS 规范，但是其自身也对规范做了一些取舍。
- Node.js 中引入模块，需要经历 3 个步骤	`– 路径分析	– 文件定位	– 编译执行`
- Node.js 中，模块分为三类：一类是底层由 C++ 编写的内建模块，一类是 Node 提供的核心模块；还有一类是用户编写的模块，称为文件模块。

~~~js
// 扩展模块
var fs = require('node:fs')
var math = require('./math')
// 核心模块
console.log(math.add(123, 456))
console.log(fs)
~~~

我们可以通过 `exports` 来向外部暴露变量和方法只需要将需要暴露给外部的变量或方法设置为exports的属性即可

~~~javascript
// 向外部暴露属性或方法
exports.x = '我是02.module.js中的x'
exports.y = '我是y'
exports.fn = function () {}
~~~

## 全局对象（global）

在全局中创建的变量和函数都会作为 `global` 的属性和方法保存，实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了 `5` 个实参：

~~~js
// 当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
function global(exports, require, module, __filename, __dirname) {
  exports = module.exports
  // ....
}
// 在代码的这里，添加用户代码
~~~

- **exports**： 该对象用来将变量或函数暴露到外部
- **require**： 函数，用来引入外部的模块
- **module**：  代表的是当前模块本身
- **__filename**：当前模块的完整路径 `...\01.node\04.module.js`
- **__dirname**： 当前模块所在文件夹的完整路径

~~~js
console.log(global.a)
console.log(`${arguments.callee}`)// - 这个属性保存的是当前执行的函数对象
console.log(arguments.length)
console.log(exports)
console.log(module.exports === exports)
console.log(__dirname)
~~~

## 模块暴露（exports）

通过 `exports` 只能使用 `.` 的方式来向外暴露内部变量
- `exports.xxx = xxx`

而 `module.exports` 既可以通过 `.` 的形式，也可以直接赋值
- `module.exports.xxx = xxxx`
- `module.exports = {}`

这样有个好处，就是引入的时候可以直接使用返回的 `exports` 值，不用通过 `.xxx` 获取

~~~js
// 模块一定义
module.exports = {}
// 模块二引入
const demo = require('模块一') // demo = {}
~~~

## 软件引用（package）

CommonJS 的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具，包规范由包文件和包描述文件两个部分组成。

- 包文件：组织包中的各种文件，实际上就是一个压缩文件，解压以后还原为目录。
- 包描述：`package.json`，描述包的相关信息，用于表达非代码相关的信息，它是一个 JSON 格式的文件。

而软件包的使用则分为两个步骤：

安装：

```sh
npm i [name]
```

引用：

~~~js
var math = require('math')
console.log(math.add(123, 456))
~~~
