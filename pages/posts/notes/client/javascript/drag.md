---
title: JavasScript drag
categories:
  - Notes
  - Client
  - html
tags: 
  - javascript
  - html5
---

拖拽功能的实现主要依靠3个事件，分别是 onousedown 鼠标按下、onmousemove 鼠标移动和 onmouseup 鼠标抬起。
并且它们具体是按照这样的一个顺序执行的。

- event.clientX 和 event.clientY 分别是鼠标当前的横坐标和纵坐标
- offsetX 和 offsetY 分别表示元素的初始横坐标和纵坐标，移动的过程改变的是绝对定位下的left和top值。

<!-- more -->

## 普通拖拽

~~~js
var drag = InitDrag({
  mousedown(ev) { // 鼠标按下规则
    // 按下时元素内偏移量
    this.offsetX = this.offsetLeft - ev.x
    this.offsetY = this.offsetTop - ev.y
  },
  mousemove(ev) { // 鼠标移动规则
    this.style.left = `${ev.x + this.offsetX}px`
    this.style.top = `${ev.y + this.offsetY}px`
  },
  mouseup(ev) { // 鼠标松开规则
  }
})
var div = document.querySelector('div')
drag.ev(div)
~~~

## 限制范围

~~~js
var drag = InitDrag({
  mousedown(ev) { // 鼠标按下规则
    // 按下时元素内偏移量
    this.offsetX = ev.x - this.offsetLeft
    this.offsetY =	ev.y - this.offsetTop
  },
  mousemove(ev) { // 鼠标移动规则
    var x = ev.x - this.offsetX
    var y = ev.y - this.offsetY

    /* --- 让div永远困在body --- */
    if (x < 0)
      x = 0
    if (y < 0)
      y = 0
    // 元素偏移量(反向)
    const anti_offsetX = ev.x + this.offsetWidth - this.offsetX
    const anti_offsetY = ev.y + this.offsetHeight - this.offsetY
    // 父元素宽高
    const bodyWidth = document.body.offsetWidth
    const bodyHeight = document.body.offsetHeight
    // 当超出右边和下边时，子元素保持在父元素内
    if (anti_offsetX > bodyWidth)
      x = bodyWidth - this.offsetWidth
    if (anti_offsetY > bodyHeight)
      y = bodyHeight - this.offsetHeight
    /* --- 让div永远困在body --- */

    this.style.left = `${x}px`
    this.style.top = `${y}px`
  },
  mouseup(ev) { // 鼠标松开规则
  }
})
var div = document.querySelector('div')
drag.ev(div)
~~~

## 磁性吸附

~~~js
var drag = InitDrag({
  mousedown(ev) { // 鼠标按下规则
    // 按下时元素内偏移量
    this.offsetX = ev.x - this.offsetLeft
    this.offsetY =	ev.y - this.offsetTop
  },
  mousemove(ev) { // 鼠标移动规则
    var x = ev.x - this.offsetX
    var y = ev.y - this.offsetY

    // 定义吸附值
    var suckVal = 30

    /* 让div永远困在body */
    // 元素偏移量(反向)
    var anti_offsetX = ev.x + this.offsetWidth - this.offsetX
    var anti_offsetY = ev.y + this.offsetHeight - this.offsetY
    // 父元素宽高
    var bodyWidth = document.body.offsetWidth
    var bodyHeight = document.body.offsetHeight
    // 当超出右边和下边时，子元素保持在父元素内
    if (anti_offsetX + suckVal > bodyWidth)
      x = bodyWidth - this.offsetWidth
    if (anti_offsetY + suckVal > bodyHeight)
      y = bodyHeight - this.offsetHeight
    // 当超出左边和上边是，子元素保持在父元素内
    if (x - suckVal < 0)
      x = 0
    if (y - suckVal < 0)
      y = 0
    /* 让div永远困在body */
    this.style.left = `${x}px`
    this.style.top = `${y}px`
  },
  mouseup(ev) { // 鼠标松开规则
  }
})
var div = document.querySelector('div')
drag.ev(div)
~~~