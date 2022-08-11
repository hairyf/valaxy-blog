---
title: JavaScript BOM
categories:
  - Notes
  - Client
  - JavaScript
tags:
  - JavaScript
---

浏览器对象模型(BOM)可以使我们通过JS来操作浏览器，以及获取浏览器信息。通常BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。

<!-- more -->

## 浏览器窗口(window)

代表的是整个浏览器窗口，同时window也是网页中的全局对象。具备所有定义的全局变量和方法。

~~~js
console.log(window)

// 打开一个新窗口
window.open(url, [name], [configuration])
// url， 为要新打开页面的url
// name，为新打开窗口的名字，可以通过此名字获取该窗口对象
// configuration，为新打开窗口的一些配置项，比如是否有菜单栏、滚动条、长高等等信息
~~~

## 浏览器信息(navigator)

代表的当前浏览器的信息，可以通过该对象可以来识别不同的浏览器。

~~~md
- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
- 由于历史原因,Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
  所以一般我们只用userAgent来判断浏览器的信息
- userAgent是一个字符串,这个字符串中包含用来描述浏览器信息的内容

- 不同的浏览器会有不同的userAgent
	- 谷歌: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36..."
	- 火狐: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:59.0) Gecko/2010..."
	- IE: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; ..."
~~~

> IE11 将微软和 IE 相关的标示都已经去除了

根据 userAgent 以及 ActiveXObject 判断浏览器是否是 IE

~~~js
const ua = navigator.userAgent
switch (true) {
  case /firefox/i.test(ua):
    console.log('你是火狐！！')
    break
  case /Chrome/i.test(ua):
    console.log('你是谷歌！！')
    break
  case /MSIE/i.test(ua):
    console.log('你是IE！！')
    break
    // 如果通过UserAgent不能判断,还可以通过一些浏览器特有的对象,来判断浏览器的信息
    // 但IE11此方法转换为布尔值为false, 解决方法: 判断该对象是否是window的属性
  case ('ActiveXObject' in window):
    console.log('你是IE11，我要枪毙了你')
}
~~~

## 地址栏信息(location)

location 代表当前浏览器的地址信息栏，通过Location可以获取地址栏信息，或者操作浏览器跳转页面。

~~~js
// 打印location，则返回地址栏的信息（完整的）
alert(location)
// 将location熟悉修改为一个完整的路径，或相对路径
// 则我们页面会自动跳转到该路径，并且生成相应的历史记录
location = 'http://www.baidu.com'

// 跳转到其他页面, 作用和直接修改location一样
location.assign('http://www.baidu.com')
// 重新加载, 作用跟页面刷新一样, 并且缓存也不放过
location.reload(true)
// 跳转到其他页面, 但不会存在历史记录
location.replace('http://www.baidu.com')
~~~

## 历史记录(history)

代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只能在当次访问时有效。

~~~js
// 当前访问的链接数量
history.length
// 回退上一个页面，跟浏览器的回退同理
history.back()
// 前进下一个页面，跟浏览器的前进同理
history.forward()
// 跳转指定的页面
// 1: 表示向前跳转一个页面
// -1: 表示向后跳转一个页面
history.go(1)
history.go(-1)
~~~

## 屏幕信息(screen)

代表用户的屏幕信息，通过该对象可以获取到用户的显示器的相关的信息。

## 多线程方案(worker)

Web Workers 是 HTML5 提供的一个 JavaScript 多线程解决方案，我们可以将一些大计算量的代码交由 web Worker 运行而不冻结用户界面，但是子线程完全受主线程控制，且不得操作 DOM。，所以，这个新标准并没有改变 JavaScript 单线程的本质。

不足：慢、不能跨域加载JS、worker内代码不能访问DOM(更新UI)、以及不是每个浏览器都支持这个新特性。

下述通过编程实现斐波那契数列（Fibonacci sequence）的计算来表达多线程使用。

定义子线程：

~~~js
function fibonacci(n) { // 5
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
const onmessage = function (event) {
  const num = event.data 		// 分线程接收主线程发送的数据
  postMessage(fibonacci(num)) // 分线程向主线程返回数据
  // alert(result) 不能再分线程调用,分线程没有window对象
}
~~~

主线程使用：

~~~js
const input = document.querySelector('input')
document.querySelector('button').onclick = function () {
  const num = input.value
  const worker = new Worker('worker.js')// 引用分线程
  worker.postMessage(num) 		// 主线程向分线程发送数据
  worker.onmessage = function (event) { // 主线程接收分线程返回的数据
    alert(event.data)
  }
}
~~~

## 本地储存(storage)

Web Storage是HTML5中新增的除Canvas元素以外，非常非常重要的功能，顾名思义，其就是在Web端存储数据的功能，当然这里的存储只是针对客户端本地而言的。

### sessionStorage

- 声明周期：浏览器打开到关闭的过程
- 大小：5M甚至更大
- 保存的位置：浏览器端
- 设置：`setItem('key', value)`
- 获取：`getItem('key')`
- 删除：`removeItem('key')`

### localStorage

- 声明周期：永久，除非人为删除
- 大小：5M甚至更大
- 保存的位置：浏览器端
- 设置：`setItem('key', value)`
- 获取：`getItem('key')`
- 删除：`removeItem('key')`

> sessionStorage 和 localStorage 当设置的时候，value 的值必须得是json格式字符串，读取的时候也是json字符串

## 小型文本储存(cookie)

Cookie，有时也用其复数形式 Cookies。类型为“小型文本文件”，是某些网站为了辨别用户身份，进行 Session 跟踪而储存在用户本地终端上的数据（通常经过加密），由用户客户端计算机暂时或永久保存的信息。

- 声明周期：如果不设置浏览器关闭则消失
- 大小：4kb
- 每次发送请求都携带，导致占用带宽
- 保存的位置：浏览器端
- cookie容易被截获，不安全
