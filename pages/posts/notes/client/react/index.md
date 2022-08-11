---
title: React 前端框架开发
date: 2020-11-01
categories:
  - Notes
  - Client
  - react
tags: 
  - react
---

React是用于构建用户界面的 JavaScript 库，起源于 Facebook 的内部项目，该公司对市场上所有 JavaScript MVC 框架都不满意，决定自行开发一套，用于架设 Instagram 的网站。于2013年5月开源。

<!-- more -->

## React 特点

**声明式编码**：以声明式编写 UI，可以让你的代码更加可靠，且方便调试。
**组件化编码**：组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。
**支持客户端与服务器渲染**：可以使用 Node 进行服务器渲染，或使用 [React Native](https://facebook.github.io/react-native/) 开发原生移动应用。
**虚拟(virtual)DOM**：不总是直接操作 DOM，并具有 DOM Diff 算法, 最小化页面重绘。

## JavaScript XML

react定义的一种类似于XML的JS扩展语法: XML+JS，他专门用来创建react虚拟DOM(元素)对象，它不是字符串, 也不是HTML/XML标签。但它最终产生的就是一个JS对象。这个JS对象包含着这个DOM的创建信息，并具有以下特点：

- 遇到 < 开头的代码, 以标签的语法解析在转换为 html 同名元素
- 遇到 { 开头的代码，以 JS 语法解析

实际代码：

~~~jsx
// JSX标签语法跟HTML标签语法一样
var ele = <h2>Hello JSX!</h2> // <div>Hello JSX!</div>
var ele = <h2 class=''>Hello JSX!</h2> // <div id="">Hello JSX!</div>
~~~

> 实际上，浏览器不能直接解析 JSX 代码, 需要借助 babel 等工具转译为纯 JS（虚拟 DOM）的代码才能运行。

## Virtual DOM

一个虚拟DOM(元素)是一个一般的 js 对象, 准确的说是一个对象树(倒立的)。虚拟 DOM 保存了真实 DOM 的层次关系和一些基本属性，与真实 DOM 一一对应。如果只是更新虚拟 DOM, 页面是不会重绘的。

React 提供了一些 API 来创建一种特别的 js 对象，他可以将虚拟 DOM 元素渲染到页面中的真实容器DOM中显示。

~~~js
var element = React.createElement('h1', { id: 'myTitle' }, 'hello')
~~~

JSX：

```jsx
var li = [
  <li key=1> jquery  <li>,
  <li key=2> angular <li>,
  <li key=3> zepto   <li>
]
var ul = <ul>{li}</ul>
```

## Diff

Diff 指更高效地通过对比新旧 vDom 的不同来找出真正的 dom 的变化之处，即通过计算两次 vDom 之间真正发生变化的那一部分，并只针对有变化的这一部分进行 Dom 操作，而不是重新渲染整个的 html 页面。

具体步骤：

用JS对象树表示DOM树的结构；然后用这个树构建一个真正的DOM树插到文档当中，当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异，把差异应用到真实DOM树上，视图就更新了。

![](https://pic.imgdb.cn/item/62f0db9216f2c2beb1ee8176.jpg)

把树形结构按照层级分解，只比较同级元素，给列表结构的每个单元添加唯一的 key 属性，方便比较，React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字），选择性子树渲染。

开发人员还可以重写 shouldComponentUpdate 提高 diff 的性能。

## 基本应用

相关JS库|插件：

- **react.js：**React的核心库
- **react-dom.js：**提供操作DOM的react扩展库
- **babel.min.js：**解析JSX语法代码转为纯JS语法代码的库
- **React Developer Tools：**提供浏览器调试

页面引入：
~~~html
<script type="text/javascript" src="./js/react.development.js"></script>
<script type="text/javascript" src="./js/react-dom.development.js"></script>
<script type="text/javascript" src="./js/babel.min.js"></script>
~~~
~~~html
<script type="text/babel">
  // 创建虚拟DOM元素
  const vDom = <h1>Hello React</h1> // 千万不要加引号
  // 渲染虚拟DOM到页面真实DOM容器中
  ReactDOM.render(vDom, document.getElementById('test'))
</script>
~~~
