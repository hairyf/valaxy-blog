---
title: ECMAScript6 模块化
categories:
  - Notes
  - Client
  - Javascript Modules
tags:
  - Javascript Modules
---

在 ES6 模块化规范诞生之前，Javascript 社区已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范。

但是，这些社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准，例如：
- AMD 和 CMD 适用于浏览器端的 Javascript 模块化
- CommonJS 适用于服务器端的 Javascript 模块化

因此，ES6 语法规范中，在语言层面上定义了 ES6 模块化规范，是浏览器端与服务器端通用的模块化开发规范。

ES6模块化规范中定义：

- 每个 js 文件都是一个独立的模块
- 导入模块成员使用 import 关键字
- 暴露模块成员使用 export 关键字

<!-- more -->

## 初始化本地文件

~~~json
{
  "name": "es6-babel-browserify",
  "version": "1.0.0"
}
~~~

**安装`babel-cli, babel-preset-es2015`和`browserify`**
- `npm install babel-cli browserify -g`
- `npm install babel-preset-es2015 --save-dev `

**定义项目根目录`.babelrc`文件**
~~~json
// .balelrc
{ "presets": ["es2015"] }
~~~

## 定义模块

~~~js
// module1.js
export function fun1() { console.log('fun1') }
export function fun2() { console.log('fun2') }
// module2.js
const data = 'foo'
export function foo() { console.log(data) }
export const arr = [0, 1, 2, 3]
// module3.js
export default { // 当需要暴露的是一个对象时，需要在export后面加上default
  name: '卢旺达',
  getName() { console.log(this.name) }
}
~~~

## 引入模块

~~~js
import { fun1, fun2 } from 'commt/module1'
import { arr, foo } from 'commt/module2'
import module3 from 'commt/module3'
fun1(); fun2()
console.log(arr)
console.log(module3)
// import * as obj from './....' 将./....的所有内容赋值给obj
~~~

> export 常规暴露，只能用解析赋值来提取引入模块的暴露方法/属性，export default 默认暴露可以暴露任意单个数据类型

## 进行编译

使用`Babel`将`ES6`编译为`ES5`代码(但包含`CommonJS`语法) : `babel 编译目录 -d 输出目录/build.js`
使用`Browserify`编译为`js`： `browserify 编译接口模块js -o 输出目录/bundle.js`

> 使用Browserify编译时，必须要先创建输出目录

## 页面引入

~~~html
<script src="dist/bundle.js"></script>
~~~

## 第三方扩展引入

~~~js
import $ from 'jquery' // 要放在前面
~~~