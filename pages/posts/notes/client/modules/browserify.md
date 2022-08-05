---
title: Browserify 模块化
categories:
  - notes
  - client
  - Javascript Modules
tags:
  - Javascript Modules
---

Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。

<!-- more -->

## 创建项目结构

~~~
  |-js
    |-dist //打包生成文件的目录
    |-src //源码所在的目录
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js //应用主源文件
  |-index.html
  |-package.json
    {
      "name": "browserify-test",
      "version": "1.0.0"
    }
~~~

**下载browserify（两个都要安装）**
- **全局**：`npm install browserify -g`
- **局部**：`npm install browserify --save-dev`

**下载uniq**
- `npm install uniq --save-dev`

## 定义模块代码

~~~javascript
// module1.js
module.exports = {foo() {}}
// module2.js
module.exports = {foo() {}}
// module3.js
module.exports = {foo() {}}
~~~

## 引入模块代码

~~~javascript
//引用文件模块
let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
// 引入uniq模块
let uniq = require('uniq')
~~~

## 打包处理js

`browserify main.js -o bundle.js`

## 页面使用引入

~~~html
<script type="text/javascript" src="js/dist/bundle.js"></script> 
~~~
