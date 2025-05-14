---
title: Gsap Web 动画框架
categories:
  - Notes
  - Client
  - Gsap
tags:
  - Gsap
date: 2022-08-22 16:36:00
---

GreenSock动画平台（GSAP）可以对 JavaScript 可以操作的所有内容进行动画处理（CSS 属性，SVG，React，画布，通用对象等），同时解决了不同浏览器上存在的兼容性问题，而且速度极快（比jQuery 快20倍）。大约有 1000 万个站点和许多主要品牌都使用 GSAP。

官网：https://greensock.com/

<!-- more -->

动画其实是每秒多次改变元素属性值，元素看起来就仿佛在动一样，比如淡入淡出，旋转，移动等。而 GSAP 捕捉一个起始值和一个结束值，然后每秒在它们之间插值 60 次。

如果从技术上面来讲，GSAP 其实应该被称为“GreenSock属性操纵器”（GSPM）。

## 核心模块

- `gsap.go(targets, vars)`：从开始的位置到结束的位置。
- `gsap.from(targets, vars)`：与上面的相反，这个是从结束的位置到开始的位置。

`targets` - 你需要添加动画的对象，可以是 `Element`, `object`, `array` 和选择器 `".myClass"`。
`vars` - 一个对象，里面包含你想要改变的属性，延时，已经回调函数等。

```ts
// 1 秒内使用 .box 类旋转和移动元素（x 是translateX 的快捷变体）
gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
```

<hairy-codepen slug-hash="wvwEOZL" user="GreenSock" default-tab="html,result" />

`Easing`：运动状态。属于 `vars` 中的一个属性，官网对于 [ease 属性](https://greensock.com/docs/v3/Eases)提供很多内置属性。

> 还可以使用 `delay` 特殊属性进行基本排序，但 [Timeline](https://greensock.com/docs/v3/GSAP/Timeline) 可以使排序和复杂的编排变得更加容易。

## 时间线

[Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
是 Tweens 的容器。它是 gaps 的排序工具 ，可及时将动画定位到任何您想要的位置，然后使用
[pause()](https://greensock.com/docs/v3/GSAP/Timeline/pause())、
[play()](https://greensock.com/docs/v3/GSAP/Timeline/play())、
[progress()](https://greensock.com/docs/v3/GSAP/Timeline/progress())、
[timeScale()](https://greensock.com/docs/v3/GSAP/Timeline/timeScale())、
等方法控制整个序列。

```
                        PLAY HEAD
|--------------timeline-----|-----------|
|--tween1--|                |
           |-----tween2-----|-----------|
```

创建 Timeline 的方法：

- [gsap.timeline()](https://greensock.com/docs/v3/GSAP/gsap.timeline())

## 在时间轴中排序

首先，创建一个时间轴：

```ts
const tl = gsap.timeline()
```

然后添加一个或多个 `.to` 事物，时间线会按照添加顺序执行：

```ts
tl.to('.box1', { duration: 2, x: 100 }) // notice that there's no semicolon!
  .to('.box2', { duration: 1, y: 200 })
  .to('.box3', { duration: 3, rotation: 360 })
```

<hairy-codepen slug-hash="gOYdyYE" user="GreenSock" default-tab="html,result" />

使用 `exactly` 可以对每个事件的时间线进行精确控制，数字表示绝对事件（以秒为单位），或带有 `+=` or `-=` 前缀的字符串表示相对时间线 `END` 的偏移量。
例如，`+=2` 将在时间轴的事物结束后延迟两秒在执行，`-=2` 会在开始前两秒执行。

```javascript
tl.to(..., 1.5)
  .to(..., "-=0.75") // overlaps by 0.75 seconds
  .to(..., "+=1")    // adds a 1-second gap before
```
