---
title: JavaScript 模块化演进
categories:
  - Notes
  - Client
  - JavaScript Modules
tags:
  - JavaScript Modules
---

ES2015 在2015年6月正式发布，官方终于引入了对于模块的原生支持，如今 JS 的模块化开发非常的方便、自然，但这个新规范仅仅持续了3年。就在7年前，JS 的模块化还停留在运行时的支持；13年前，通过后端模版定义、注释定义模块依赖。对于经历过的人来说，历史的模块化方式还停留在脑海中，久久不能忘怀。

<!-- more -->

## 随心所欲函数模式

~~~js
// 操作数据的函数
function foo() { console.log() }
function bar() { console.log() }
~~~

**全局函数模式**：将不同的功能封装成不同的全局函数
**问题**：`Global`被污染了, 很容易引起命名冲突

## namespace 模式

~~~js
const myModule = {
  data: 'atguigu.com',
  foo() {},
  bar() {}
}
// D:\software\nodejs\node_global
~~~

- **模式**：简单对象封装
- **作用**：减少了全局变量
- **问题**：不安全

## IIFE 模式模块化

**IIFE模式**：匿名函数自调用(闭包)
**IIFE**： `immediately-invoked function expression`(立即调用函数表达式)
**作用**：数据是私有的, 外部只能通过暴露的方法操作
**问题**：如果当前这个模块依赖另一个模块怎么办?

**定义模块**

~~~js
(function (window) { // 没有依赖的模块
  // 数据
  const data = 'atguigu.com'
  // 操作数据的函数
  function foo() {}
  // 暴露行为
  window.myModule = { foo, bar }
})(window)
~~~

~~~js
(function (window, myModule) { // 有依赖的模块
  // 数据
  const data = 'atguigu.com'
  // 操作数据的函数
  function foo() { myModule.foo() }
})(window, myModule)
~~~

**引入模块**

~~~html
<script type="text/javascript" src="module1.js"></script>
<script type="text/javascript" src="module2.js"></script>
<script type="text/javascript" src="module3.js"></script>
<script type="text/javascript" src="module4.js"></script>
~~~

一个页面需要引入多个js文件将导致请求过多，依赖模糊，难以维护
这些问题可以通过现代模块化编码和项目构建来解决

## Node.js 模块化（仅支持后台）

**模块化编码**

~~~js
// module1.js
module.exports = { foo() {} }
// module2.js
module.exports = { foo() {} }
// module3.js
module.exports = { foo() {} }

// app.js
const module1 = require('./modules/module1')
const module2 = require('./modules/module2')
const module3 = require('./modules/module3')
module1.foo()
module2()
module3.foo()
module3.bar()
~~~
