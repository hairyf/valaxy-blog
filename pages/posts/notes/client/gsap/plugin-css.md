---
title: Gsap 核心插件 - CSS
categories:
  - Notes
  - Client
  - Gsap
tags:
  - Gsap
date: 2022-08-23 10:12:00
---

在 CSSPlugin 的帮助下，GSAP 可以为几乎任何与 CSS 相关的 DOM 元素属性设置动画，包括像宽度、高度、边距、填充、顶部、左侧等明显的东西，以及更多有趣的东西，比如变换（旋转、缩放 X、缩放 Y 、skewX、skewY、x、y、rotationX 和 rotationY）、颜色、不透明度等等。

<!-- more -->

> 注意：CSS Plugin 不支持中划线属性，所以应该使用 `fontSize` 而不是 `font-size`，其他属性也是如此。

CSSPlugin 还可以定义通常不可补间的属性，例如 `position: "absolute"` 或 `borderStyle: "solid"`，不可补间的属性将在动画开始前设置（`display: "none"` 出于某些显而易见的原因将在动画结束时应用）

如果使用 GSAP 的特定属性，则可以省略值的单位。例如，如果要设置 `x` 属性，可以是 `x: 24`，而不用编写为 `x: 24px`，因为 GSAP的 `x` 属性默认使用像素做为单位。此外，及时使用的单位与当前不匹配，GSAP 也会尝试转换，因此还可以将元素的宽度从 `50%` 补间到 `200px`。

CSSPlugin 可以为复杂的值设置的话，例如 `boxShadow: "0px 0px 20px 20px red"`、`borderRadius: "50% 50%"`、`border: "5px solid rgb(0,255,0)"`。可能会有一部分复杂或前沿的 CSS 属性不能处理，但很少见。

## 转换信息（gsTransform）

gsTransform 是 GSAP 在运行期间提供的 transform 的完整信息，它将会在运行的 `targets` 元素中添加

```ts
function showValues() {
  output.innerHTML
  = `x: ${box._gsTransform.x.toFixed(2)}<br>`
    + `y: ${box._gsTransform.y.toFixed(2)}<br>`
    + `rotation: ${box._gsTransform.rotation.toFixed(2)}`
}
```

![](https://pic.imgdb.cn/item/6304409316f2c2beb1650ed5.jpg)

## 相对值

相对值（Relative Values），CSSPlugin 的属性值支持持续累加，使用 `+=`、`-=` 来累积内部尺寸：

```ts
TweenMax.to('.box', 0.3, { rotation: '+=45' })
TweenMax.to('.box', 0.3, { x: '+=100' })
```

## 定向旋转

定向旋转（Directional Rotation Visualizer），允许指定特定方向的旋转，在这种情况，可以是顺时针（`cw` 后缀）、逆时针（`_ccw` 后缀）、或是最短方向（`_short` 后缀）根据最短路径选择方向。

<hairy-codepen slug-hash="KjyyZw" user="adrianagarcia" />

## 倾斜补偿

GSAP 在处理 `skew` 时，会自动进行 CSS 属性补偿，例如 `transform-origin`、`perspective`、`transform-style` 等，自动添加舞台、距离等，而 `skewType` 则可以指定 GSAP 是否进行 `transform` 舞台补偿：

<hairy-codepen slug-hash="JjOaPEg" user="mikeK" default-tab="js,result" />

SVG Percent-based translation

## 注意事项

- 要进行基于百分比的计算，请使用用 `xPercent` 和 `yPercent` 而不是 `x` 和 `y`，因为 `x` 和 `y` 是基于像素的。
> 为什么 GSAP 要具有基于百分比的特殊属性？因为 GSAP 允许组合它们来完成一些特定的任务。
- 可以使用 `scale` 作为快捷方式来同时控制 `scaleX` 和 `scaleY` 属性。
- 可以定义相对值，例如 `rotation: "+=30"`。
- 声明 `transform` 的属性顺序没有区别。
- GSAP 与浏览器中元素渲染质量无关。
- 基于百分比的 `x/y` 的 `transform` 也适用于 SVG 元素。
- 有关于 CSSPlugin 如何处理 SVG 元素 `transform`，可以查看 [SVG 技巧文章](https://greensock.com/svg-tips/)

## 平滑原点

平滑原点（smoothOrigin），当更改 SVG 元素的 `transformOrigin`（或 `svgOrigin`）时，CSSPlugin 将自动记录和应用一些偏移量，以确保元素不会“跳跃”。可以通过设置来禁用此功能，例如 `CSSPlugin.defaultSmoothOrigin = false`，假如是对某个补间进行控制，则 `smoothOrigin: false`。

<iframe width="900" height="507" src="https://www.youtube.com/embed/GsniGDilKtI" title="Introducing smoothOrigin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## CSS 变量

GSAP 可以在支持它们的浏览器中为 CSS 变量设置动画。

<hairy-codepen slug-hash="MoeLdj" user="GreenSock" />
