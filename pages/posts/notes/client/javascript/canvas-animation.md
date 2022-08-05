---
title: JavaScript Canvas Animation
categories:
  - notes
  - client
  - javascript
tags:
  - javascript
---

要实现 canvas 中的动画，本质上是通过储存|计算|处理，不断的绘制画面帧，从而实现动画的流程运行。

由此可见，动画构造器应具有以下特点：

- 数据容器(所有绘制体)
- 定时注入(单个绘制体)
- 数据变化(绘制体信息产生的变化|状态)
- 数据绘制(将数据作用于画布)

实际运作流程：不断注入 -> 循环变化 -> 循环绘制

<!-- more -->


## 构造原型(CanvasAnimation)

```js
function CanvasAnimation(options) {
  return CanvasAnimation.prototype.init(options)
}
```

## 初始化(init)

```js
CanvasAnimation.prototype.init = function (options) {
  this.processor(options)
}
```

## 处理器(processor)

```js
CanvasAnimation.prototype.processor = function (options) {
  if (!options.el)
    throw new Error('options.el')
  // 注入速度
  options.injectSpeed = 400 - options.injectSpeed
  // 动画速度
  options.animationSpeed = 400 - options.animationSpeed

  const ctx = options.el.getContext('2d')

  // 注入器
  setInterval(() => {
    this.inject(options.inject())
  }, options.injectSpeed)
  setInterval(() => {
    // 变化器处理函数，传入变化器
    this.changer(options.changer)
    // 绘制器处理函数，传入绘制其
    this.plotter(ctx, options.plotter)
  }, info.animationSpeed)
}
```

## 注入处理(inject)

```js
CanvasAnimation.prototype.inject = function (item) {
  this.data.push(item)
}
```

## 变化处理(changer)

```js
CanvasAnimation.prototype.inject = function (changer) {
  for (let i = 0; i < this.data.length; i++) {
    // 判断个体状态
    const status = changer(this.data[i])
    // 如果为true，代表需要清除该个体
    if (status)
      this.data.splice(i, 1)
  }
}
```

## 绘制处理(plotter)

```js
CanvasAnimation.prototype.plotter = function (ctx, plotter) {
  // 每次执行清除画板
  ctx.clearRect(0, 0, oc.width, oc.height)
  for (let i = 0; i < this.data.length; i++)
    plotter(ctx, this.data[i])
}
```

## 实际使用

参数分析：

- el：canvas 元素
- injectSpeed：注入速度  1 -> 400	0或者空串是默认值340
- animationSpeed：动画速度  1 - 1000	0或者空串是默认值60
- inject：注入器，定时向数组注入随机圆的信息
- changer：循环变化器，每次执行个体的信息的改变，以及判断是否需要删除个体
  - 删除个体：当个体的某个值满足条件时 清除容器的的第i位
- plotter：绘制器，绘制每个个体的工厂
- item：个体信息

```js
const canvas = document.querySelector('canvas')
const canvasAnimation = new CanvasAnimation({
  el: canvas,
  injectSpeed: 340,
  animationSpeed: 60,
  inject() { return { width: 0, height: 0 } },
  changer(item) {
    item.width++; item.height++
    // 达成条件返回true，代表删除个体信息
    if (item.width > 100)
      return true
  },
  plotter(ctx, item) {
    ctx.save()
    // 这里添加样式
    ctx.beginPath()
    // 这里进行绘制规则
    ctx.fillRect(0, 0, item.width, item.height) // 创建一个矩形
    ctx.fill()
    ctx.restore()
  }
})
```