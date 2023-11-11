---
title: CSS3 应用
categories:
  - Notes
  - Client
  - Css
tags:
  - Css
date: 2018-05-21
---

CSS3是[CSS](https://baike.baidu.com/item/CSS/5457)（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
CSS演进的一个主要变化就是W3C决定将CSS3分成一系列模块。浏览器厂商按CSS节奏快速创新，因此通过采用模块方法，CSS3规范里的元素能以不同速度向前发展，因为不同的浏览器厂商只支持给定特性。但不同浏览器在不同时间支持不同特性，这也让跨浏览器开发变得复杂。

<!-- more -->

## 元素选择器

CSS 中，选择器用来指定网页上我们想要样式化的 HTML 元素。有 CSS 选择器提供了很多种方法，所以在选择要样式化的元素时，我们可以做到很精细的地步。本文和本文的子篇中，我们将会详细地讲授选择器的不同使用方式，并了解它们的工作原理。

### 常用选择器

CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”，下属列出了一些常见的选择器：

```scss
// 通配符
* { margin: 0 }
// 标签
body {}
// 类
.list {}
// ID
#list {}
// 分组
.list, #wrap {}
// 后代
.list   li {}
// 子代
.warp > li {}
// 下排相邻兄弟
#wrap #first + .inner {}
// 下排所有兄弟
#wrap #first ~ .inner {}
```

### 属性选择器

CSS 属性选择器通过已经存在的属性名或属性值匹配元素。

```scss
// 含有name标签 
div[name]
	--> <div name></div>
// 值为cm 
div[name="cm"]
	--> <div name="cm"></div>
// 值有完整的cm值
div[name~="cm"]
	--> <div name="cm a"></div>  | <div name="a cm"></div>
// 值为cm开头
div[name^="cm"]
	--> <div name="cmffff"></div>
// 值为cm结尾
div[name$="cm"]
	--> <div name="ffffcm"></div>
// 值包含cm
div[name*="cm"]
	--> <div name="ffcmff"></div>
```

### 伪类选择器

CSS 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，[:hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。

```scss
a:link {} 		// 未访问地址
a:visited {}    // 已访问地址
```

命中瞄点伪类

```scss
:target{ color: red }
```
```html
<a href="#text">点击</a>
				↓
<span id="text">文本</span>
		color: red
```

动态反馈伪类

```scss
div:hover  {}	 // 指标移到元素时
div:active {}    // 鼠标点击元素, 并未松开时
```

表单状态伪类

```scss
input:enabled  {} // 可编辑表单
input:disabled {} // 被禁用表单
input:checked  {} // 被选中表单
input:focus    {} // 获取焦点的表单
```

结构选择伪类

```scss
div:nth-child(n)     {} // 第n个元素
div:nth-child(odd)   {} // 奇数
div:nth-child(even)  {} // 偶数
div:first-child      {} // 第1个元素
div:last-child       {} // 最后1个元素
div:not(:last-child) {} // 反向选择: 除了最后1个
```

内容为空伪类

```scss
div:empty{} // 标签内无内容
```

### 伪元素选择器

```scss
// before|after: 伪元素可设置尺寸, 元素样式, 定位按照被插入的元素
// 一般可以利用伪元素做 css 界面应用
div::before { content:'内容' } // 标签头部伪元素
div::after  { content:'内容' } // 标签尾部伪元素
```

伪元素的 `content` 属性，可以通过 `attr(xxx)`，可以读取到对应 DOM 元素标签名为 xxx 的属性的值。

```html
<div count="5">Message</div>
```

```scss
div {
  position: relative;
  width: 200px;
  height: 64px;
}
div::before {
  content: attr(count);
  // ...
}
```

![](https://segmentfault.com/img/remote/1460000019533524)

### 字体选择器

```scss
div::first-line   {} // 首行文本
div::first-letter {} // 首字母文本
div::selection    {} // 字体选中时
```

### 选择器特殊性

特殊性字数越小则越大, 特性越高, 特性高的属性则覆盖特性低的属性。

```scss
// 特殊性字数越后,越大 特性性越高
// 特殊性为0 比所有特殊性都大

// 特殊性: 0100
#test {}
// 特殊性: 0030
.pink.pink.pink {}
```

行内样式特性是最高的

```html
<!-- 特殊性: 0000 -->
<div style=""></div>
```

### 属性重要声明

在重要属性中声明 `!important` 代表不可被覆盖，同样具有 `!important` 则看具体特性高低，声明将覆盖属性，一般情况下谨慎使用。

```less
background: red !important; // 该属性不可被覆盖
```

## 文字字体样式

字体设置也是网页设计中的重要组成部分，合适的字体不仅会使页面更加美观，也可以提升用户体验。CSS 中提供了一系列用于设置文本字体样式的属性，比如更改字体，控制字体大小和粗细等等。

<h3 style="color: var(--hy-c-bg); text-shadow: red 1px 1px 30px;">文字模糊</h3>

```scss
text-shadow: red 1px 1px 30px
```

<h3 style="color: var(--hy-c-bg); text-shadow: #54ffb6 1px 1px 1px;">浮雕字体</h3>

```scss
text-shadow: #54ffb6 1px 1px 2px;
```

<h3 style="color: var(--hy-c-bg); -webkit-text-stroke: 0.1px pink;">描边字体</h3>

```scss
-webkit-text-stroke: 0.1px pink;
```

<h3 style="background-image: url(https://tva2.sinaimg.cn/large/6833939bly1gipetfk5zwj20zk0m8e81.jpg); -webkit-background-clip: text; color: rgba(0,0,0,.2);">背景字体裁剪</h3>

```scss
h3 {
  background-image: url(tg.png); // 设置背景图
  -webkit-background-clip: text; // 由字体内容裁剪背景图片
  color: rgba(0,0,0,.2);         // 设置字体透明度
}
```

## 盒模型样式

```scss
white-space: nowrap;     // 盒模型字体超出不换号
overflow: hidden;		     // 溢出不显示
text-overflow: ellipsis; // 盒模型字体溢出显示...
box-sizing: border-box;  // 边框不在占据元素外宽度
border-radius: 15px; 		 // 圆角 50% 为圆
// 盒模型倒影
-webkit-box-reflect: below 0 linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0));
-webkit-box-reflect: 倒影方向 倒影距离 透明度线性;
// 盒模型字体分栏
column-count: 4   // 字体分栏4行
column-gap: 14px;	//每栏的间距为14px
column-rule: solid 1px red; // 每栏中间线样式
```

### 属性的继承

通过声明父类元素属性将使子元素属性得到继承，只有部分属性具有继承特性，最具有代表性的就是 `color` 属性。

```scss
body { color: darkcyan }
div  { } // color: darkcyan
```

## 背景简写方式

```css
background: [,color] image [,repeat] [,attachment] [,position]/[,size];
color: #000		            // 背景颜色
image: url(/img.gif)		// 背景图像
repeat: (repeat-x | repeat-y | no-repeat | inherit)
		repeat-x: 水平重复
		repeat-y: 垂直重复
		no-repeat: 不重复(一张)
		inherit: 遵从父级
attachment: (fixed | inherit)
		fixed: 页面滚动时, 背景图片不滚动
		inherit: 遵从父级
position: x y
		关键字: (left | right | top | bottom | center)
size: width height
		关键字: (cover | contain)
			cover: 背景图像完全覆盖背景区域
			contain: 宽度和高度完全适应内容区域
background-clip: (content-box | padding-box)
		content-box: 内容区开始裁剪
		padding-box: 内边距开始裁剪
background-origin: (content-box | padding-box)
		content-box: 内容区开始绘制
		padding-box: 内边距开始绘制
```

## 透明度|阴影|模糊

```scss
// opacity: 元素透明度
opacity: 0~1;
// rgba: 样式透明度
color: rgba(0, 0, 0, 0~1);
```

```scss
// 字体阴影
text-shadow: rgba(0,0,0,.5) 10px 10px 10px;
text-shadow: 颜色 X轴偏移 Y轴偏移 模糊半径, [下一个阴影];
// 盒模型阴影
box-shadow: rgba(0,0,0,.5) 10px 10px 10px;
box-shadow:  颜色 X轴偏移 Y轴偏移 模糊半径 , [下一个阴影];
// 高斯模糊
filter: blur(50px);
```

## 线性渐变(linear-gradient)

向下/向上/向左/向右/对角线多种指定颜色之间的平滑过渡。

```scss
@from = rgba(0,0,0,0); // 开始:透明
@go = rgba(201,45,45); // 中途:红色
@end = rgba(0,0,0,.5); // 最后:灰
// 上往下渐变(默认)
background-image: linear-gradient(@to,@end);
// 右/左渐变
background-image: linear-gradient(left right, @to, @end);
background-image: linear-gradient(to   left,  @to, @go, @end);
// 度数旋转渐变
background-image: linear-gradient(-45deg,     @to, @go, @end);
// 设置颜色区间占比多少像素
background-image: linear-gradient(@to 10%, @go 80%, @end 10%);
// 当渐变区间未占满时, 会重复渐变
background-image: linear-gradient(@to 10%, @end 10%);
```

## 径向渐变(radial-gradient)

由其中心定义多种指定颜色之间的平滑过渡。

```scss
@from = yellow; 		     // 开始:黄色
@go   = rgba(201,45,45); // 中途:红色
@end  = green; 		       // 最后:绿色
// 宽高自适应(椭圆), 开始的圆为30%, 结束的圆为70%
background-image: radial-gradient(@from 30%, @end 70%)
// 圆(默认以最远的边算半径)
background-image: radial-gradient(circle, @from 30%, @end 70%)
// 设置圆中心
background-image: radial-gradient(circle at 0px 0px, @from 30%, @end 70%)
// 以最近的边算半径
background-image: radial-gradient(closest-side circle, @from 30%, @end 70%)
```

## 过渡特效(transition)

通常当 CSS 的属性值更改后，浏览器会立即更新相应的样式，例如当鼠标悬停在元素上时，通过 :hover 选择器定义的样式会立即应用在元素上。在 CSS3 中加入了一项过渡功能，通过该功能您可以将元素从一种样式在指定时间内平滑的过渡到另一种样式，类似于简单的动画，但无需借助 flash 或 JavaScript。

```scss
transition: ([,property] duration timing-function [,delay]);
transition: (过渡属性 过渡时间 时间曲线 延迟启动过渡)
transition-property: width | height | ......
transition-duration: 1s | 2s | 0.4s
transition-timing-function: 
	linear // 相同速度
	ease		// 慢速->快速->慢速
	ease-in	// 慢速->同速
	ease-out		// 同速->慢速
	ease-in-out	// 慢速->同速->慢速
	cubic-bezier(n,n,n,n) // 贝塞尔曲线
transition-delay: 1s | 2s | 0.4s
```

## 2D Transform

transform 属性可以向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

> transform 百分比参数按照盒模型

### 旋转(rotate)

```scss
transform: rotate(180deg);  // 平移旋转
transform: rotateY(180deg); // X 轴旋转
transform: rotateX(180deg); // Y 轴旋转
```

### 平移(translate)

```scss
transform: translateX(20px)       // X 轴偏移
transform: translateY(20px)       // Y 轴偏移
transform: translate(300px,300px) // X, Y 轴偏移
```

### 倾斜(skew)

```scss
transform: skewX(-45deg)      // X轴倾斜
transform: skewY(-45deg)      // Y轴倾斜
transform: skew(-45deg)       // X轴倾斜
transform: skew(-45deg,45deg) // X,Y轴倾斜
```

### 缩放

```scss
transform: scaleX(.5) // X轴缩放一半
transform: scaleY(.5) // Y轴缩放一半
transform: scale(.5)  // X,Y轴缩放一半
```

## 3D Transform

### 旋转(rotate3d)

```scss
// 笛卡尔坐标 on ℝ3
transform: rotateZ(160deg/* Z轴旋转 */);
```

```scss
// 三轴旋转函数
transform: rotate3d(0/* X轴矢量 */, 0/* Y轴矢量 */, 1/* Z轴矢量 */, 180deg/* 旋转角度 */)
```

### 平移(translate3d)

```less
transform: translateZ(100px); // Z轴往前平移100px
transform: translate3d(100px,100px,100px); // X,Y,Z 平移 100px
```

### 缩放(scaleZ)

```less
transform:scaleZ(2) translateZ(100px); // --> Z轴前进 200px
```


## 营造舞台效果

通过设置景深(perspective)、3D 舞台赋予元素层次空间，使得可以立体显示。

```scss
perspective: 300px; // 盒模型Z轴空间为300px
perspective-origin: center; 	// 景深基点为中心(默认)
perspective-origin: left top; // 景深基点为右下角(视觉)
perspective-origin: right bottom; // 景深基点为左下角(视觉)
```

> 景深可以被子元素的景深进行叠加

如果父级元素设置了 preserve-3d , 则赋予了元素层次, Z 轴靠前的会覆盖 Z 轴靠后的元素。

```less
transform-style: preserve-3d; // 赋予元素层次
```

可以通过 `transform-origin` 改变变形依据的基点。

```scss
transform-origin: 0% 100%;
	filed: left right top bottom
		   0% 100%
		   1px 100px
```

## 动画(animation)

动画就是使元素从一种样式逐渐变化为另一种样式的效果，我们可以改变任意多的样式和任意多的次数。

定义动画：

```scss
@keyframes [name] {
  from { background: red; }
  to   { background: yellow; }
}
```

使用动画：

```scss
animation: name duration [,timing-function] [,delay] [,iteration-count] [,direction];
animation: 名称 动画时间 时间曲线 开始延迟 播放次数 反向播放
	timing-function: 
      linear // 相同速度
      ease		// 慢速->快速->慢速
      ease-in	// 慢速->同速
      ease-out		// 同速->慢速
      ease-in-out	// 慢速->同速->慢速
      cubic-bezier(n,n,n,n) // 贝塞尔曲线
	animation-iteration-count:
			n			    // 播放n次
			infinite	// 播放无数次
	animation-direction:
			normal		  // 默认, 正常播放
			alternate   // 反向播放
```

## CSS函数

CSS 函数用作各种 CSS 属性的值。

### 属性值(attr)

CSS 表达式 attr() 用来获取选择到的元素的某一 HTML 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。

> 理论上能用于所有的 CSS 属性但目前支持的仅有伪元素的 content 属性，其他的属性和高级特性目前是实验性的。

```scss
// 以下实例在每个链接后面插入内容：
a:after {
  content: " (" attr(href) ")";
}
```

### 动态计算(calc)

calc() 此 CSS 函数允许在声明 CSS 属性值时执行一些计算。

```scss
#div1 {
  width: calc(100% - 100px);
}
```

- 需要注意的是，运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px)`；
- 任何长度值都可以使用 calc() 函数进行计算；
- calc()函数支持 "+", "-", "*", "/" 运算；
- calc()函数使用标准的数学运算优先级规则；

### 贝塞尔曲线(cubic-bezier)

贝塞尔曲线曲线由四个点 P0，P1，P2 和 P3 定义。P0 和 P3 是曲线的起点和终点。P0是（0,0）并且表示初始时间和初始状态，P3是（1,1）并且表示最终时间和最终状态。

```scss
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
```

### HSL颜色(hsl)

hsl() 函数使用色相、饱和度、亮度来定义颜色。

```scss
#p1 { background-color:hsl(120,100%,50%); } /* 绿色 */
#p2 { background-color:hsl(120,100%,75%); } /* 浅绿  */
#p3 { background-color:hsl(120,100%,25%); } /* 暗绿  */
#p4 { background-color:hsl(120,60%,70%);  } /* 柔和的绿色 */
```

- 色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
- 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。
- 亮度（L）取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。

### 变量定义(var)

var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）变量可定义在 `:root` 即根选择器或任意选择器中。

```scss
:root {
  --main-bg-color: coral;
}
 
#div1 {
  background-color: var(--main-bg-color);
}
 
#div2 {
  --main-bg-color: red;
  background-color: var(--main-bg-color);
}
```

## 媒体查询(media)

媒体查询（Media queries）非常实用，尤其是当你想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。

```scss
@media [设备关键字] [条件关键字] (条件1) [条件关键字] (条件2) { 
  a{/*样式内容*/}
}
	设备关键字:all | screen | print | speech
			all: 	  所有设备
			screen:	彩色屏幕
			print:  手持设备
			speech:	“听觉”类似的媒体设备
	条件关键字:all | , | not
			and: JS中的&&
			,:	 JS中的||
			not: JS中的! (取反)
	条件:
		width: 根元素宽度	(可加max(width<) min(width>) 前缀)
		height: 根元素宽度		(可加max(height<) min(height>) 前缀)
		device-width: 设备宽度		(可加max(device-width<) min(device-width>) 前缀)
		-webkit-device-pixel-ratio: 设备像素比
		orienttation: 横屏/竖屏 (竖屏:portrait, 横屏:landscape)
```

实际使用：

```scss
@media screen and (min-width: 60px), (min-height:60) {
  a{/*样式内容*/}
}
```

## Other

### 禁用元素事件

~~~html
<style>
  .button {
    pointer-events: none;
  }
</style>
<div class="button"></div>
~~~
