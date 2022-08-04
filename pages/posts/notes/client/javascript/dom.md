---
title: JavaScript DOM
categories:
  - notes
  - client
  - javascript
tags:
  - javascript
---

JavaScript 的核心 ECMAScript 描述了该语言的语法和基本对象， DOM 则描述了处理网页内容的方法和接口；

<!-- - BOM 描述了与浏览器进行交互的方法和接口。 -->

<!-- more -->

## 元素对象获取(tag)

~~~js
// 获取 body 的元素节点
const body = document.body
// 获取 html 的元素节点
const html = document.documentElement
// 获取全部的元素节点
const all = document.all
// 获取全部的元素节点
const all2 = document.getElementsByTagName('*')
// 获取 head 的元素节点
const head = document.head
// 使用 CSS 选择器选择节点 但总是单个识别
const calsx = document.querySelector('.box')
// 使用 CSS 选择器选择节点, 组成伪数组
// 注意：一旦元素结构发生改变 querySelectorAll 就会失效
const calsx2 = document.querySelectorAll('.box')
~~~

## 元素样式提取(style)

~~~js
function getStyle(obj, styleName) {
  if (!window.getComputedStyle) {
    // IE8 获取元素宽度样式方法
    return obj.currentStyle[styleName]
  }
  else {
    // 其他浏览器获取样式方法
    return getComputedStyle(obj, null)[styleName]
  }
}
const domObj = document.getElementById('div')
console.log(getStyle(domObj, 'width')) // "350px"
~~~

## 元素基本参数(attrs)

~~~js
// 当前元素的定位父元素, 如果父元素都没定位, 则获取body
dom.offsetParent
// 元素可视区高宽度, 不包括边框
dom.clientHeight;			dom.offsetWidth
// 当前元素相对其定位元素的水平与垂直的偏移量
dom.offsetLeft;				dom.offsetTop
// 元素总高宽度, 包括溢出高宽度
dom.scrollWidth;			dom.scrollHeight
// 溢出的滚动条的偏移值
dom.scrollLeft;				dom.scrollTop
// 浏览器滚动条的偏移值
document.documentElement.scrollLeft || document.body.scrollLeft
document.documentElement.scrollTop || document.body.scrollTop
~~~

## DOM 触底公式

总高度 - 溢出偏移量 === 可见高度

```js
const isEnd = dom.scrollHeight - dom.scrollTop === dom.clientHeight
```

## DOM 增删改查

~~~html
<div class="dom"> 
  <span>我是子元素</span> 
  我是普通文本
</div>
~~~

~~~js
const dom = document.querySelector('.dom')
// 创建元素节点对象与元素文本节点对象, 注意: 创建并不会马上渲染到页面
const div = document.createElement('div')
const divText = document.createTextNode('广州')
// 将元素文本对象插入元素对象中
div.appendChild(divText)

// 将元素对象添加到页面元素对象中
dom.appendChild(div)
// 替换子节点元素, 语法：父节点.replaceChild(新节点, 旧节点)
dom.replaceChild(new_dom_obj, old_dom_obj)
// 销毁子节点元素: 两种方式
dom.replaceChild(dom_obj)
dom_obj.parentNode.removeChild(dom_obj)

// 元素的代码字符串与文本字符串 (可读写)
dom.innerHTML;				dom.innerText
// 添加子元素: 添加html代码
dom.innerHTML += '<div>子元素</div>'
// 添加或修改元素文本
dom.innerText += '广州珠海区'
~~~

## DOM Events

HTML DOM 事件允许Javascript在HTML文档元素中注册不同事件处理程序。

事件通常与函数结合使用，函数不会在事件发生前被执行 (如用户点击按钮)。

常见的事件：

```md
- 元素中点击 click
- 元素中双击 dblclick
- 元素中右击 contextmenu

- 元素中按下 mousedown
- 元素中移动 mousemove
- 元素中松开 mouseup

- 指针进入元素之上 mouseover (当有挡住事件元素，该事件会进行冒泡并触发事件)
- 指针移出元素之上 mouseout (当有挡住事件元素，该事件会进行冒泡，不会触发事件)

- 指针进入元素 mouseover (当有挡住事件元素，该事件不会进行冒泡，也就是不会触发)
- 指针移出元素 mouseenter (当有挡住事件元素，该事件不会进行冒泡，也就是判断已经移出元素，会触发事件)
```

### 事件回调

~~~js
const dom = document.querySelector('.dom')
function callback() { console.log('事件被触发') }

// 元素添加事件方式一: on, 一次性添加, 再次写入同样的事件会被覆盖
dom.onclick = callback

// 元素添加事件方式二: addEventListener, 可添加多个同样的事件回调
dom.addEventListener('click', callback)
// IE没有addEventListener, 有attachEvent, 事件名需要加on, 并且this执行有问题
dom.attachEvent('onclick', callback.bind(dom), false)

// 销毁eventListener的特定事件: removeEventListener
dom.removeEventListener('click', callback)
// IE没有removeEventListener, 有detachEvent, 事件名需要加on
dom.detachEvent('onclick', callback)
~~~

### 事件对象

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
事件通常与函数结合使用，函数不会在事件发生前被执行！

~~~js
dom.onclick = function (event) {
  event = event || window.event // 兼容ie8
  // 该元素距离视口的偏移量
  event.clientX;			event.clientY
  // 触发此事件的元素 (事件的目标节点)
  event.target
  // 当前 Event 对象表示的事件的名称
  event.type
  // 按下的按键编号
  event.keyCode
}
~~~

### 键盘事件

键盘事件一般可用于 document 于 input 节点，document 为全局的键盘事件，input 则是在该元素获取焦点时的键盘事件

~~~js
// 当键盘按下时: keydown, 当键盘一直按下时会一直触发onkeydown事件
// 当键盘松开时: keyup
document.onkeyup = function (event) {
  event = event || window.event
  if (event.keyCode === 86 && event.shiftKey === true)
    console.log('同时按下了shift和v')
}
~~~

### 按键编号(event.keyCode)

![](https://img-blog.csdn.net/20180601153357278)

![](https://img-blog.csdn.net/20180601153406667)

## DOM Event Skill

### 阻止默认行为

通常事件在执行时，在某些特定元素中，会触发特定的默认行为。例如a标签在点击时会默认进行跳转。当我们并不需要默认行为时，就需要阻止事件的默认行为触发。

~~~js
dom.onclick = function (event) {
  event = event || window.event
  event.preventDefault()
  return false
}
~~~

### 阻止向上冒泡

所谓的冒泡(Bubble)就是指事件的向上传导， 当后代元素上的事件被触发时，其主线元素的相同事件也会被触发
阻止冒泡，则代表不执行主线元素的相同事件。

~~~js
dom.onclick = function (event) {
  event = event || window.event
  event.stopPropagation()
}
~~~

### 子元素事件的委派

当子元素元素过多时，一个一个的添加子元素十分浪费时间和性能。并且在添加新的元素时，新的元素并不具备事件，新的元素也要进行添加事件，这样就会使得业务逻辑十分的繁琐。事件的委派的目的就是为了解决这个问题。

问题的产生：

~~~js
// 问题: 性能和效率, 以及新元素不具备事件
const ul = document.getElementById('ulu')
const lil = document.getElementsByClassName('link')
for (let i = 0; i < lil.length; i++) {
  lil[i].onclick = function () {
    console.log(this)
  }
}
~~~

解决方案：事件委派

~~~js
// 解决方案: 事件委派
ul.onclick = function (event) {
  event = event || window.event
  // 如果触发事件的对象是我们期望的元素，则执行否则不执行
  if (event.target.className === 'link')
    alert('我是ul的单击响应函数')
}
~~~

### 滚轮功能函数(方向)

由于火狐与非火狐的滚轮事件差异很大，所以需要进行兼容封装。

~~~js
function onWheel(el, callback) {
  // 火狐没有onmousewheel 只有addEventListener的DOMMouseScroll
  if (el.addEventListener)
    el.addEventListener('DOMMouseScroll', fn)
  else el.onmousewheel = fn
  function fn(ev) {
    ev = ev || event
    // 火狐detail 上:正 下:负; 			非火狐wheelDelta 上:负 下:正
    const wheel = ev.wheelDelta !== undefined ? ev.wheelDelta : -ev.detail
    const dir = wheel > 0 ? 'up' : 'down'
    callback.call(el, ev, dir)
  }
}
wheel(dom, (event, dir) => {
  // 上则dir="up", 下则dir="down"
})
~~~

### 滚轮功能函数(数值)

~~~js
function onScroll(el, doSomething) {
  let ticking = false
  el.addEventListener('scroll', (e) => {
    // 获取滚动值
    const last_known_scroll_position = el.scrollY
    if (!ticking) {
      el.requestAnimationFrame(() => {
        doSomething(last_known_scroll_position)
        ticking = false
      })
    }
    ticking = true
  })
}
onScroll(dom, (clientY) => {
  // ...
})
~~~

### 元素拖拽实现

~~~js
dom.onmousedown = function (event) {
  dom.setCapture && dom.setCapture()	// 当点击时所有事件都捕获为该dom的事件
  // 鼠标在元素内按下时, 记录参数
  // 浏览器鼠标所在位置的偏移量
  // 元素距离父元素的偏移量

  // 浏览器鼠标所在位置的偏移量 - 元素距离父元素的偏移量 = 元素内的偏移量
  document.onmousemove = function (event) {
    // 移动时触发此函数, 根据按下时的参数与移动的参数改变元素的偏移量
  }
  document.onmouseup = function (event) {
    // 松开时触发此函数, 销毁document的所有事件
    dom.releaseCapture && dom.releaseCapture()	// 释放该dom的事件
  }
  return false // 兼容谷歌和IE浏览器 清除默认行为
}
~~~

