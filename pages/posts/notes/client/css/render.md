---
title: 页面渲染机制
categories:
  - Notes
  - Client
  - Css
tags:
  - Css
date: 2023-11-11
---

在页面的生命周期中，**网页生成的时候，初始化至少渲染一次。在用户访问的过程中，则会不断的触发重排(reflow)和重绘(repaint)**，不管页面发生了重绘还是重排，都会影响性能，在现代前端开发中，动效和动画效果的性能逐渐引起人们的重视，如何避免付出高额的性能代价，成为了我们前端工程师应该考虑的因素。

<!-- more -->

- 重排：指某些元素重新生成布局，更改排列元素
- 重绘：某些元素的外观被改变（背景、字体颜色）

就如上概念，淡淡改变元素的外观，不会引起页面重新布局，但浏览器完成重排之后，则会受到重排的影响导致元素乃至周边的 DOM 重新绘制。

> 重绘不一定导致重排，但重排一定会导致重绘。

## 重排(reflow)

当 DOM 变化影响元素的几何信息(位置和尺寸大小)，浏览器则需要重新计算元素的几何属性，将其安防在界面中的正确位置，这个过程叫做重排。

重排也叫回流，简单的说就是重新生成布局，重新排列元素。

**以下情况会导致重排：**

- 页面初始渲染，这是开销最大的重排
- 添加/删除可见的 DOM 元素
- 改变元素位置
- 改变元素尺寸（边距、填充、边框、宽度和高度）
- 改变元素字体大小
- 改变浏览器窗口尺寸（如 resize 事件触发）
- 激活 CSS 伪类（`:hover`）
- **设置 style 属性**（通过 `style` 将更改节点属性，则触发 reflow）
- 查询某些属性或某些计算方法（`offsetWidth`、`offsetHeight`）

> 当调用 `getComputedStyle`、或 IE 中的 `currentStyle` 时，浏览器为了追求即时性与准确性，都会触发重排。

| 常见引起重排属性和方法  | --                       | --                 | --         |
| ----------------------- | ------------------------ | ------------------ | ---------- |
| width                   | height                   | margin             | padding    |
| display                 | border-width             | border             | position   |
| overflow                | font-size                | vertical-align     | min-height |
| clientWidth             | clientHeight             | clientTop          | clientLeft |
| offsetWidth             | offsetHeight             | offsetTop          | offsetLeft |
| scrollWidth             | scrollHeight             | scrollTop          | scrollLeft |
| scrollIntoView()        | scrollTo()               | getComputedStyle() |            |
| getBoundingClientRect() | scrollIntoViewIfNeeded() |                    |            |

## 重排范围

浏览器渲染界面基于流式布局模型，触发重排时会对周围 DOm 重新排序，影响范围分两种：

- 全局：从根节点 html 开始对整个节点树进行重新布局渲染。
- 局部：对节点树某部分或某个对象进行重新布局渲染。

### 全局范围

```html
<body>
  <div class="hello">
    <h4>hello</h4>
    <p><strong>Name:</strong>BDing</p>
    <h5>male</h5>
    <ol>
      <li>coding</li>
      <li>loving</li>
    </ol>
  </div>
</body>
```

当 `p` 节点发生 reflow 时，`h4` 和 `body` 也会重新渲染，甚至 `h5` 和 `ol` 都会收到影响。

### 局部范围

当 DOM 的宽高等几何信息被限死，在 DOM 内中触发的重排，就只会重新渲染该 DOM 内部的元素，而不会影响到外部。

```html
<style>
  ol {
    width: 100px;
    height: 100px;
  }
</style>
<body>
  <h4>hello</h4>
  <ol>
    <!-- 当 li 发生重排时，不会影响 ol 外的元素 -->
    <li>coding</li>
    <li>loving</li>
  </ol>
</body>
```

## 重绘(repaints)

当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。

| 常见的引起重绘的属性： | --               | --                  | --                |
| ---------------------- | ---------------- | ------------------- | ----------------- |
| color                  | border-style     | visibility          | background        |
| text-decoration        | background-image | background-position | background-repeat |
| outline-color          | outline          | outline-style       | border-radius     |
| outline-width          | box-shadow       | background-size     |                   |

## 重排优化

重排的代价是昂贵的，如果重排次数过多，会破坏用户体验，并且让 UI 展示非常迟缓，通过减少重排的负面影响来提高用户体验的最简单方式减少尽可能的减少重排次数、范围。

> 尽可能的修改低层级的 DOM 节点，而不是在全局范围内修改父级元素，不要通过父元素影响子元素，这会导致更大范围的重排。

### 样式集中

不要频繁的操作样式，对于一个静态页面来说，更加明智的做法是更改类名而不是修改样式，对于动态修改的样式来说，相对每次微小修改都直接触及元素。

```js
// bad
var left = 10
var top = 10
el.style.left = `${left}px`
el.style.top = `${top}px`

// 当top和left的值是动态计算而成时...
// better
el.style.cssText += `; left: ${left}px; top: ${top}px;`

// better
el.className += ' className'
```

### 分离读写

DOM 的多个读写操作，应该放在一起，不要在两个读操作之间，加入应该写操作。

```js
// bad 强制刷新 触发四次重排+重绘
div.style.left = `${div.offsetLeft + 1}px`
div.style.top = `${div.offsetTop + 1}px`
div.style.right = `${div.offsetRight + 1}px`
div.style.bottom = `${div.offsetBottom + 1}px`

// good 缓存布局信息 相当于读写分离 触发一次重排+重绘
const { offsetLeft, offsetTop, offsetRight, offsetBottom } = div

div.style.left = `${offsetLeft + 1}px`
div.style.top = `${offsetTop + 1}px`
div.style.right = `${offsetRight + 1}px`
div.style.bottom = `${offsetBottom + 1}px`
```

原操作导致四次重排，读写分离之后实际值触发一次重排，这都得利于浏览器的渲染队列机制。

> 当我们修改元素的几何属性，导致浏览器触发重排或重绘时，它会把该操作放进渲染队列中，等到队列中的操作到了一定的数量或者到了一定的时间间隔时，浏览器就会批量执行执行操作。

### DOM 隐藏

- 使用 `display: node`

一旦我们给元素设置该属性（仅一次重排重绘）元素边不会在渲染树中，之后才做也不会触发重排重绘。另外，`visibility: hidden` 的元素支队重绘有影响，不影响重排。

- 通过 [documentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 创建 `dom` 碎片，批量修改操作 DOM 后添加文档，也只会触发一次重排。

### 脱离文档流

使用 `absolute/fixed` 脱离文档流，会使该元素单独称为渲染树中 `body` 的一个子元素，重排开销更小，不会对其他节点造成太多影响，当你在这些节点上放置这个元素时，一些其他在这个区域内的节点可能需要重绘，但不需要重排。

### 动画优化

- 可以将动画效果应用在 `position` 属性为 `absolute` 或 `fixed` 的元素上，这样对其他元素影响更小。

动画效果还应牺牲一些平滑，来换取速度，比如实现一个动画，以 1 个像素为单位移动这样最平滑，但布局就会过于频繁地，大量消耗 CPU 资源，如果以 3 个像素为单位移动则会减轻负担。

- 启用 GPU 加速，`GPU` 硬件加速是指应用 `GPU` 的图形性能，对浏览器中的一些图形操作交给 `GPU` 来完成，因为 `GPU` 是专门为处理图形而设计，所以在速度和能耗上更有优势。

`GPU` 加速通常包括以下几个部分：Canvas2D、Layout、CSS Transitions、CSS 3D Transforms、WebGL、Video。

```css
/*
 * 根据上面的结论
 * 将 2d transform 换成 3d
 * 就可以强制开启 GPU 加速
 * 提高动画性能
 */
div {
  transform: translate3d(10px, 10px, 0);
}
```

## 性能调试

开发者工具中，Performance 左侧录制页面，用于分析性能。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/654f5db2c458853aefd7aa68.jpg" />

- 蓝色: 网络通信和HTML解析
- 黄色: JavaScript执行
- 紫色: 样式计算和布局，即重排
- 绿色: 重绘