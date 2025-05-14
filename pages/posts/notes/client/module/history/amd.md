---
title: AMD-RequireJS 模块化
categories:
  - Notes
  - Client
  - JavaScript Modules
tags:
  - JavaScript Modules
date: 2019-08-08 15:00:00
---

AMD规范主要是解决各个模块之间的依赖关系，可以顺序的加载js模块，但是却是异步加载，不会影响页面的css和html标签的加载。

AMD 即Asynchronous Module Definition，中文名是异步模块定义的意思。它是一个在浏览器端模块化开发的规范。

由于不是JavaScript原生支持，使用AMD规范进行页面开发需要用到对应的库函数，也就是大名鼎鼎RequireJS，实际上AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出
requireJS主要解决两个问题

- 多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
- js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长

<!-- more -->

### 创建项目结构

~~~
  |-src
    |-libs
      |-require.js
    |-modules
      |-alerter.js 			// 定义有依赖的模块
      |-dataService.js	// 定义没有依赖的模块
    |-main.js
  |-index.html
~~~

### 定义没有依赖的模块

~~~js
// dataService.js
define(() => { // 定义有依赖的模块
  var data = 'dataService'
  var getName = () => { return data }
  return { getName } // 暴露模块
})
~~~

### 定义有依赖的模块

~~~js
// alerter.js
define(['dataService'], (dataService) => { // 定义有依赖的模块
  var data = 'alerter'
  var getToName = () => { return data + dataService.getName() }
  return { getToName } // 暴露模块
})
~~~

### 定义接口模块

~~~js
// main.js
require.config({ // 配置接口
  baseUrl: 'src/', // 从页面根目录开始找起的模块根路径
  // 如果不添加baseUrl,那么模块将从接口函数文件夹找起
  paths: { // 模块位置
    alerter: 'modules/alerter',
    dataService: 'modules/dataService'
  },
})
require(['alerter'], (alerter) => { // 引入模块
  console.log(alerter.getToName())
})
~~~

### 页面进行引入

`data-main`是接口模块的位置，`src/lib/require.js`是`require`模块的支持库

~~~html
<script data-main="src/main.js" src="src/lib/require.js"></script>
~~~

### 引入第三方库

~~~js
require.config({
  baseUrl: 'js/',
  paths: {
    jquery: 'lib/jquery-1.10.1',
    angular: 'lib/angular'
  },
  // 注意，有的插件不支持AMD，需要在shim里面配置
  shim: {
    angular: {
      exports: 'angular'
    }
  }
})
require(['jquery'], (alerter, $) => { // 引入jquery模块
  $('body').css('background', 'red')
})
~~~
