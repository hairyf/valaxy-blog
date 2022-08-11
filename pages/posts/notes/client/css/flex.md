---
title: Flex Layout
categories:
  - Notes
  - Client
  - css
tags:
  - css
---


flex-box 布局（也叫Flex布局，弹性盒子布局）模块（ W3C 候选推荐，截止到2017年10月）旨在提供一个更有效地布局、对齐方式，并且能够使容器中的子元素大小未知或动态变化情况下仍然能够分配好子元素之间的空间。

Flex 布局的主要思想是使父容器能够调节子元素的宽度/高度（和排列顺序），从而能够最好地填充可用空间（主要是为了适应所有类型的显示设备和屏幕尺寸）。flex布容器能够放大子元素使之尽可能填充可用空间，也可以收缩子元素使之不溢出。

最重要的是，flex-box 布局与方向无关，不同于常规布局（基于垂直的块（block）和基于水平的内联（inline））。 虽然传统布局适用于页面，但它们对于大型或复杂的应用程序布局来说缺乏灵活性（特别是在改变方向，调整大小，拉伸，收缩等方面）。

<!-- more -->

> 设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

```scss
display: flex;				// 设置为 flex 容器
display: inline-flex;		// 设置为行内 flex 容器
```

## 容器项目排序(flex-direction)

```scss
flex-direction: column-reverse | column | row | row-reverse;
		column-reverse: Y轴排序, 起点在底部
		column:	Y轴排序, 起点为头部
		row: 	X轴排序, 起点为左侧
		row-reverse: 	X轴排序, 起点为右侧
```

![容器排序](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

## 容器项目换行(flex-wrap)

```scss
flex-wrap: wrap | nowrap | wrap-reverse;
		  wrap: 换行
		  nowrap:	不换行(默认)
		  wrap-reverse: 换行(从下往上)
```

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="a" style="zoom:80%;" />

## 容器主要轴对齐(justify-content)

```scss
justify-content: flex-start | flex-end | center | space-around | space-between;
		flex-start: 左端排序(默认)
		flex-end:	右端排序
		center:	中间排序
		space-around: 项目间隔相等
		space-between: 两端对齐, 项目间隔相等
```

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png"  />

## 容器交叉轴对齐(align-items)

```scss
align-items: flex-start | flex-end | center | baseline | stretch
		flex-start:	交叉轴起点对齐
		flex-end:	交叉轴终点对齐
		center:	交叉轴中心对齐
		baseline:	项目第一行文字基线对齐
		stretch: 如果项目未设置高宽或设为auto 将沾满父级flex元素高度 (默认)
```

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

## 容器多轴线对齐(align-content)

```scss
align-content: flex-start | flex-end | center | space-between | space-around | stretch
		flex-start:	交叉轴起点对齐
		flex-end:	交叉轴终点对齐
		center:	交叉轴中心对齐
		space-around: 轴线间隔相等
		space-between:	与交叉轴两端对齐, 轴线间隔相等
		stretch: 轴线占满整个交叉轴
```

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

## 项目排列顺序(order)

```scss
order: <number>
```

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

## 项目尺寸比例(flex-grow)

```scss
// 默认是不放大也不缩小, 宽度按照项目宽度撑开
flex: <number>
```

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

## 项目不被挤压(flex-shrink)

```css
flex-shrink: 0;
```

## 项目对齐方式(align-self)

```scss
// 该属性可能取6个值，除了auto，其他都与align-items属性完全一致
align-self: auto | flex-start | flex-end | center | baseline | stretch
```

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)