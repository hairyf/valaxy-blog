---
title: H5 原生 Web 基本应用
categories:
  - Notes
  - Client
  - Web Mobile
tags:
  - Mobile
  - Html
date: 2020-03-09 14:00:00
---

## UIVew 像素

UIVew: 1px 在不同像素比中，对应的物理像素数量是不一样的，例如：像素比为 2 的手机上，1px 对应 2 个物理像素，与之对应的像素比 1 的实际对比，像素比2的手机分栏线就会显得很粗。那这个时候在分栏线中，如何让 1px 值对应一个物理像素，这就显得很重要。

<!-- more -->

利用媒体查询像素比：

~~~css
#test { height:1px }
@media only screen and (-webkit-device-pixel-ratio: 2){
    /* 像素比为2的时候，缩放指定元素 */
    #test{ transform:scaleY(0.5) }
}
@media only screen and (-webkit-device-pixel-ratio: 3){
    /* 像素比为3的时候，缩放指定元素 */
    #test{ transform:scaleY(0.3333333333333333333333333) }
}
~~~


## Touch Events

- 手指按下(touchstart)
- 手指移动(touchmove)
- 手指松开(touchend)

Event：

~~~js
const item = document.querySelector('.item')
// changedTouches: 触发当前事件的手指列表
// targetTouches: 触发当前事件时元素上的手指列表
// touches: 触发当前事件时屏幕上的手指列表
item.addEventListener('touchend', (ev) => {
  ev = ev || event
  console.log(ev.changedTouches)
  console.log(ev.targetTouches)
  console.log(ev.touches)
})
~~~

## 禁止默认行为

谷歌的手机模拟器与真机环境不同，手机模拟器不能禁止document的默认行为，但真机可以。

~~~js
document.addEventListener('touchstart', (ev) => {
  ev = ev || event
  ev.prenentDefault()
})
~~~

当禁止所有默认行为时，如果有需要默认行为的元素，可以禁止元素的冒泡，避免受到父级元素的阻止所有默认行为的影响。

~~~js
item.addEventListener('touchstart', (ev) => {
  ev = ev || event
  ev.stopPropagation()
})
~~~

当禁止所有默认行为时，解决a标签默认行为失效。

~~~js
var a = document.querySelectorAll('a')
for (let i = 0; i < a.length; i++) {

  // ! 当a标签按下时,定义一个判断,代表鼠标还未滑动
  a.addEventListener('touchstart', function () { this.isMoved = false })

  // ! 当触发滑动时,更改判断,代表滑动了
  a.addEventListener('touchmove', function () { this.isMoved = true })

  // ! 如果进行滑动了,那么不进行跳转.
  a.addEventListener('touchend', function () {
    if (!this.isMoved)
      location.href = this.href
  })

}
~~~

## 轮播图滑屏锁

当页面上下滚动是，不能触发轮播图的左右滑动，这个时候需要设置滑屏锁，阻止滑动触发。

~~~js
const touch = {
  start(ev) {
    // 保存按下X/Y偏移量
    this.startClientX = ev.touches[0].clientX
    this.startClientY = ev.touches[0].clientY
    // 抖动方向判断初始值
    this.isShakeX = false
    this.isShakeY = false
  },
  move(ev) {
    // 获取判断滑动值
    this.slidingCountX = ev.touches[0].clientX - this.startClientX
    this.slidingCountY = ev.touches[0].clientY - this.startClientY

    // 如果Y/X轴抖动，则直接返回 (防抖动)
    if (this.isShakeY)
      return
    if (this.isShakeY === this.isShakeX) {
      // 一次性逻辑, 判断抖动方向
      this.isShakeX = Math.abs(this.slidingCountY) < Math.abs(this.slidingCountX)
      this.isShakeY = Math.abs(this.slidingCountY) > Math.abs(this.slidingCountX)
    }
  }
}
~~~

## 轮播图无缝滑

~~~js
// 初始化代码
// 定义页码
// 定义一页的css像素是多少
// 定义一开始没有复制的项目长度
if (是否需要无缝) {
  // 元素项目复制添加
  // 定义复制后的项目长度
}
function autoplaycreate() {
  // 执行无缝逻辑
  return setInterval(() => {
    // 页码+1
    // 根据页码与一页宽度计算偏移量 , 在更新偏移量
    // 更新零件状态
  })
}
if (是否需要轮播) {
  const timer = autoplaycreate()
}

const touch = {
  start(ev) {
    // 如果有轮播, 按下时关闭轮播定时器

    // 记录滑屏值

    // 如果有无缝, 计算页码实现无缝
    // 假设有三张图片 [0 0 0] 有无缝为 [0 0 0  0 0 0]
    // 如果页码等于0,代表当前页为[1 0 0  0 0 0] 跳转为 [0 0 0  1 0 0]
    // 如果页码等于项目数量, 代表当前页为[0 0 0  0 0 1] 跳转为 [0 0 1  0 0 0]

    // 重置抖动判断
  },
  move(ev) {
    // 如果Y轴抖动，则直接返回 (防抖动)

    // 计算滑屏值

    // 当滑屏值超出一页的css像素时固定为划过一页的值

    // 移动时改变元素transform值
  },
  end(ev) {
    //  如果有轮播  松开时启动轮播

    // 如果Y轴抖动, 不执行end逻辑

    // 松开时判断有没有超出滑屏值(是否进行上下切换)

    // 改变元素transfrom值为没切换的值(橡皮筋), 或者切换的值(换页)
  }
}
~~~

## 橡皮筋效果

~~~js
const touch = {
  start(ev) {
    this.startClientX = ev.touches[0].clientX
    this.startVaryElOffsetX = this.varyEl.getBoundingClientRect().x
  },
  move(ev) {
    // 计算滑屏值
    this.moveX = ev.touches[0].clientX - this.startClientX + this.startVaryElOffsetX

    // 视口宽 / (视口宽 - 超出值) = 橡皮筋值 [1 , 0]之间
    // 拖动块总偏移量 + (超出值 * 橡皮筋值) = 橡皮筋滑动值(每次滑动有效距离减少)
    if (this.moveX > 0) { // 如果在左区间
      const leftEsxceedVal = (0 + this.moveX)
      this.rubberBandValue = this.viewWidth / ((this.viewWidth + this.moveX) * 3)
      this.moveX = 0 + leftEsxceedVal * this.rubberBandValue
    }
    if (this.moveX < -[moveTotalOffsetLeft]) { // 如果在右区间
      const rightEsxceedVal = -([moveTotalOffsetLeft] + this.moveX)
      this.rubberBandValue = this.viewWidth / ((this.viewWidth + this.moveX) * 3)
      this.moveX = -([moveTotalOffsetLeft] + (rightEsxceedVal * this.rubberBandValue))
    }
    this.varyEl.style.transform = `translateX(${this.moveX}px)`
  }
}
~~~

## 快速滑屏

~~~js
const touch = {
  start(ev) {
    this.startClientX = ev.touches[0].clientX
    this.startVaryElOffsetX = this.varyEl.getBoundingClientRect().x

    // 按下时,记录当前时间
    this.newTime = new Date().getTime()
    // 按下时, 重置当前拖动的像素
    this.slidingCount = 0
  },
  move(ev) {
    // 计算滑屏值
    this.moveX = ev.touches[0].clientX - this.startClientX + this.startVaryElOffsetX
    // 记录滑动偏移量
    this.slidingCount = this.moveClientX - this.startClientX
    this.varyEl.style.transform = `translateX(${this.moveX}px)`
  },
  end(ev) {
    this.lastTime = new Date().getTime()
    // 计算时差(毫秒)
    const timeEqu = this.lastTime - this.newTime
    // 每毫秒走了多少css像素
    const speed = Math.abs(this.slidingCount / timeEqu)
    // 如果一毫秒的css像素超过0.6, 并且不在两侧区间, 则进行快速滑屏计算
    if (speed > 0.6 && this.moveX < 0 && this.moveX > -[moveTotalOffsetLeft]) {
      // 0.3总过渡时间 / 速度 = 当速度越快时, 时间越短
      this.varyEl.style.transition = `${0.3 / speed}s`
      // 计算快速滑屏距离(滑冰距离)
      this.moveX = this.moveX + speed * this.slidingCount
      // 锁定快速滑屏距离在 [移动到开头的距离, -移动到最后面的距离] 之间
      this.moveX = this.moveX > 0
        ? 0
        : this.moveX < -[moveTotalOffsetLeft]
          ? -[moveTotalOffsetLeft]
          : this.moveX
      this.varyEl.style.transform = `translateX(${this.moveX}px)`
    }
  }
}
~~~

## 电话|邮箱禁止高亮

在移动端中，出现类似电话和邮箱的字符串会高亮显示并可以进行相应的操作。在开发中，有时候并不需要这种功能。这时候可以在`meta`标签中禁止。

## 链接禁止高亮背景色

在移动端中，我们可能并不需要点击链接后高亮字体背景。

~~~css
a {
	test-decoration: none;
	/* 禁止点击链接高亮背景 */
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
~~~

## 按钮默认圆角过圆

移动端的按钮默认样式居然是

![](https://pic.imgdb.cn/item/62f4b2cc16f2c2beb1821741.jpg)

这样太tm神奇了，我们想要的是正方形。我们需要禁止掉移动端默认的按钮圆角。

~~~css
button { webkit-appearance:none }
~~~

## Font Boosting 禁止


在浏览器中，如果浏览器觉得字体太小了，会自动的调整字体的大小。这个行为被称为`Font Boosting`。
`Font Boosting` 仅在未限定尺寸的文本流中有效，给元素指定宽高，就可以避免 `Font Boosting` 被触发。但是文本内容不可能都指定宽高。不过还好，可以指定 `max-height` 就可以无副作用的禁掉 `Font Boosting` 特性。

~~~css
p { font-size: 24px;;max-height: 999999px; }
~~~