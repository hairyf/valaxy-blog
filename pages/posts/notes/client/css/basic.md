---
title: CSS 基本概念
categories:
  - Notes
  - Client
  - Css
tags:
  - Css
date: 2018-05-20
---

层叠样式表 (`Cascading Style Sheets`，缩写为 `CSS`），是一种 [样式表](https://developer.mozilla.org/zh-CN/docs/Web/API/StyleSheet) 语言，用来描述 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 或 [XML](https://developer.mozilla.org/zh-CN/docs/Web/XML/XML_Introduction)（包括如 [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG)、[MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)、[XHTML](https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML) 之类的 `XML` 分支语言）文档的呈现。[CSS](https://w3.org/Style/CSS/#specs) 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

`CSS` 是开放网络的核心语言之一，由 W3C 规范 实现跨浏览器的标准化。`CSS` 节省了大量的工作。 样式可以通过定义保存在外部 `.css` 文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。`CSS` 被分为不同等级：`CSS1` 现已废弃， `CSS2.1` 是推荐标准， `CSS3` 分成多个小模块且正在标准化中。

<!-- more -->

## CSS Layout basic unit

`Box` 是 `CSS` 布局的对象和基本单位，直观点来说，页面是由很多个 `Box` 组成的。

元素的类型和`display`属性，决定了这个Box的类型。不同类型的`Box`，会参与不同的`Formatting Context`（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染

- **block-level  box**： `display` 属性为 `block`、`list-item`、`table`的元素，会生成 `block-level-box`，并且参与 Formatting Context

- **inline-level box**： `display` 属性为 `inline`、`inline-table`的元素，会生成`block-level-box`。并且参与 Formatting Context

`Formatting Context` 是 `W3C CSS2.1` 规范中的一个概念，他是页面中的一块渲染区域，并且有一套渲染规则，他决定了其子元素将如何定位，以及和其他元素的关系合互相作用。

最常见的 `Formatting Context` 有 **Block formatting context**（简称 `BFC`）、**Inline formatting context**（简称 `IFC`）

## Block formatting context

`BFC（Block formatting context）`直译为 “块级格式化上下文” 。他是一个独立的渲染区域，只有 `block-level box` 参与，他规定了内部的 `block-level box` 如何布局，并与这个区域外部毫不相关。

BFC 具有以下规则：

- 内部的 `box` 会在垂直方向，一个接一个的放置。
- BFC的区域不会与 `float box` 重叠。
- 内部的 `box` 垂直方向的距离由 `margin` 决定。属于同一个 BFC 的两个相邻 `box` 的 `margin` 会发送重叠
- 计算 BFC 的高度时，浮动元素也参与计算。（清除浮动 `has layout`）
- BFC 计算页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

BFC 的出现因素：

- 根元素（`html`、`body`）
- `float` 属性不为 `none`
- `position`   为 `absolute` 或 `fixed`
- `overflow` 不为 `visible`
- `display`    为 `inline-block|table-cell|table-caption|flex|inline-flex`

## Clear float

清除浮动指清除掉元素 `float` 属性所引起的元素浮动。

```css
/* 由于 IE6|7 需要开启布局才会撑开父元素 zoom 可以让父元素拥有布局 */
.clear-fix {
  *zoom: 1;
}
.clear-fix:after {
  content: '';
  display: block;
  clear: both;
}
```

## CSS Size Unit

设一个 `1000px`（宽）和 `800px`（高）的视窗(viewport)

**`vw`** —— 代表视窗(Viewport)的宽度为`1%`，在我们的例子里`100vw = 1000px`。

**`vh`** —— 窗口高度的百分比 `100vh = 800px`。

**`vmin`** —— vmin 的值是当前`vw`和`vh`中较小的值。所以`100vim = 800px`。

**`vmax`** —— 大尺寸的百分比。`100vmax = 1000px`。

### `vmin`、`vmax` 的应用场景

例如做移动页面开发时，如果使用 `vw`、`wh` 设置字体大小（比如 `5vw`），在竖屏和横屏状态下显示的字体大小是不一样的。

由于 `vmin` 和 `vmax` 是当前较小的 `vw` 和 `vh` 和当前较大的 `vw` 和 `vh`。这里就可以用到 `vmin` 和 `vmax`。使得文字大小在横竖屏下保持一致。

### `vw`、`vh` 与 `%` 百分比的区别

`%` 是相对于父元素的大小设定的比率，而 `vw`、`vh` 是视窗大小决定的。

`vw`、`vh` 优势在于能够直接获取高度，而用 `%` 在没有设置 `body` 高度的情况下，是无法正确获得可视区域的高度的。

## CSS W3C

- https://www.w3.org/Style/CSS/
- https://www.w3.org/Style/CSS/current-work

## 浏览器滚动机制

浏览器滚动由容器的 `overflow` 决定，`hidden` 则代表禁止滚动条。

```css
html,body { height: 100%; overflow: hidden }
```

由于滚动条默认是给 `document` ，在把 `html` 的高度固定在视口窗，在由 `body` 进行滚动操作。

将 `html` 的滚动条禁止，在将 `body` 的滚动条开启，就形成一个相反的状况这时候以 `body` 为父元素的绝对定位则拖动滚动条位置也不会改变。

```css
html { height: 100%; overflow: hidden; }
body { height: 100%; overflow: audo; }
```

## Icon Font

字体图标即将图片绘制成字体文件格式，通过引用与使用字体达到使用图标的目的，不过现如今 SVG 的使用更多，SVG 具有更好的扩展性和尺寸。

具体使用：

~~~html
<!-- Step.1: 引入字体图标文件(iconfont) -->
<link rel="stylesheet" href="font/iconfont.css">
<!-- Step.2: 添加默认样式 -->
<style> i { font-family:"iconfont"; font-style: normal; }</style>
<!-- Step.3: 使用标签 -->
<i class="icon-windows" />
~~~

字体图标的制作：

![字体图标的制作](https://tva4.sinaimg.cn/large/006C2ocely8h4umnkig11j30gx08nwel.jpg)