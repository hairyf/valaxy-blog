---
title: CSS 布局
categories:
  - Notes
  - Client
  - Css
tags:
  - Css
  - layout
date: 2018-05-22
---

CSS 布局易于设计。我们可以使用 CSS 布局来设计我们的网页，例如主页，与我们联系，关于我们等。

基本上有三种设计网页布局的方法：

HTML Div + CSS 布局：现在已广泛使用。

HTML表格：速度较慢，较不受欢迎。

HTML框架集：现已弃用。

CSS布局可以包含页眉，页脚，左窗格，右窗格和正文部分。

<!-- more -->

## 双列布局（CSS2）

双列布局即左边一列固定，右边一列自动填满。

```html
<style>
#left {
  width: 200px;
  float: left;
}
#right {
  background: pink;
}
</style>

<div id="left">left</div>
<div id="right">right</div>
```

![双列布局](https://tva2.sinaimg.cn/large/006C2ocely8h4uis3ikpdj30hc08va9x.jpg)

## 圣杯布局（CSS2）

两侧宽度固定，中间宽度自适应的三栏布局，中间部分在 DOM 结构上优先，以便先行渲染、中间部分在 DOM 结构上优先，以便先行渲染、允许三列中的任意一列成为最高列。

```html
<div id="container">
  <div id="center"></div>
	<div id="left"></div>
 	<div id="right"></div>
</div>
```

首先定义出整个布局的 DOM 结构，主体部分是由 `container` 包裹的 `center`、`left`、`right` 三列，其中 `center` 定义在最前面。

假设左侧的固定宽度为 `200px` ，右侧的固定宽度为 `150px` ，则首先在 `container` 上设置，为左右两列预留出相应的空间。

```css
#container {
  padding-left: 200px; 
  padding-right: 150px;
}
#left{ width: 200px; }
#right{ width: 150px; }
```

得到如下示意图：

![圣杯布局](https://tva2.sinaimg.cn/large/006C2ocely8h4uiw3q3cbj30f009qmxn.jpg)

### 设置浮动

```css
/* 为 left 和 right 和 center 设置浮动，更好的进行排序工作 */
#left,#right,#center { float: left; }
/* 为了让中间元素自适应，设置宽度为 100% */
#center { width: 100%; }
```

![圣杯布局](https://tva3.sinaimg.cn/large/006C2ocely8h4uiywc15oj30f009qgm9.jpg)

根据浮动的特性，由于 `center` 的宽度为 `100%` ，即占据了第一行的所有空间，所以 `left` 和 `right` 被挤到了第二行。

### 左边元素到位

接下来的工作是将 `left` 放置到之前预留出的位置上，使用 [负外边距](https://www.cnblogs.com/2050/archive/2012/08/13/2636467.html)（nagetive margin）将元素往某个方向扯，简单点说，margin 是控制元素的边界。

```css
#left { margin-left: -100%; }
```

用 `margin` 负值调整 `#left` 超出父元素边界时，浮动元素边界的就会被拉回第一行

![圣杯布局](https://tva4.sinaimg.cn/large/006C2ocely8h4uj1a6yekj30f009qgm7.jpg)

为什么？

上方 `#center` 盒子是浮动块的、所以并不是真正意义上的占据一行，往回拉，超出父元素边界，其原理跟 `center` 腾出 `left` 的位置一样，只不过这种做法是强制的调整 `left` 的边界。

在利用相对定位，将 `left` 在往左边拉，跟父级元素 `padding` 重叠

```css
#left { position: relative; left: -200px; }
```

![圣杯布局](https://tva1.sinaimg.cn/large/006C2ocely8h4uj6xtiq9j30f009q0t6.jpg)

### 右边元素到位

right 只要一条代码，将元素的右边界往左拉。

```css
#right { margin-right: -150px }
```

如果右边的边界超出了父元素左边的边界，就会掉上去。这时候，元素的左边界就会贴着 `center` 上，可以理解为 把父元素的 `padding-right` 的尺寸给削没了。

![圣杯布局](https://tva3.sinaimg.cn/large/006C2ocely8h4uj7xiovcj30f009q0su.jpg)

### 元素宽度限制

布局效果完成。不过还需要考虑最后一步，那就是**页面的最小宽度**：要想保证该布局效果正常显示，由于两侧都具有固定的宽度，所以需要给定页面一个最小的宽度，但这并不只是简单的`200+150=350px`。回想之前 `left` 使用了 `position: relative` ，所以就意味着在 `center` 开始的区域，还存在着一个 `left` 的宽度。所以页面的最小宽度应该设置为 `200+150+200=550px`：

```css
#container { min-width: 550px; }
```

## 伪等高布局（CSS2）

基于上述布局，本质是将三个元素的内边距调到很高的值，在利用 `margin` 将边距调回来

```css
#left,#right,#center {
	padding-bottom: 10000px;
	margin-bottom: -10000px;
}
```

![伪等高布局](https://tva2.sinaimg.cn/large/006C2ocely8h4ujb460wej311x072t8y.jpg)

## 双飞翼布局（CSS2）

双飞翼布局与圣杯布局类似，但 DOM 结构是用 `container` 仅包裹住 `center`，另外将 `浮动元素` 从 `center` 移至 `container` 上。

```html
<body>
  <div id="container">
    <div id="center"></div>
  </div>
  <div id="left"></div>
  <div id="right"></div>
<body>
```

```css
/* 假设 left 为 200，right 为 150 */
#container { width: 100%; }
#center { margin-left: 200px;margin-right: 150px; }
#left { width: 200px; }
#right { width: 150px; }
```

![双飞翼布局](https://tva4.sinaimg.cn/large/006C2ocely8h4uje25e6bj30qn01n749.jpg)

### 左边元素到位

```css
#left {margin-left: -100%;}
```

![双飞翼布局](https://tva2.sinaimg.cn/large/006C2ocely8h4ujew4wp1j30ql01kwee.jpg)

### 右边元素到位

```css
#right { margin-left: -150px; }
```

![双飞翼布局](https://tva1.sinaimg.cn/large/006C2ocely8h4ujff7qqaj30qo00xt8n.jpg)


## 粘黏布局

在正常文档流中，当内容较少时，页脚部分不会始终固定在屏幕的最下方。这时候就该让传说中的 `sticky footer` 布局出现了。

![粘黏布局](https://tva2.sinaimg.cn/large/006C2ocely8h4ujj7x3jmj308z0d40t1.jpg)

不管内容区有多少内容，页脚始终显示在屏幕的最下方，当内容区域超过屏幕的高度时。页脚会始终显示在页面的最底部。

![粘黏布局](https://tva2.sinaimg.cn/large/006C2ocely8h4ujjzyxq7j30900feaab.jpg)

具体实现：

```html
<body>
	<div id="wrap">
		<div id="main">......</div>
	</div>
	<div id="footer">footer</div>
</body>
```

```css
/* 首先让父元素的高度撑开屏幕 */
html, body { height: 100%; }

/* 固定内容区的高度为 100% */
#warp { height: 100%; }
#footer {
	/* 固定 footer 的高度为 200 */
	height: 100px;
	/* 由于这时内容区的高度是 100% 所以 footer 被挤下去了，但是我们可以利用 margin 负值来将 footer 拉上来 */
	margin-top: -100px;
}
```