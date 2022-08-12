---
title: H5 原生 Web 适配
categories:
  - Notes
  - Client
  - Web Mobile
tags:
  - Mobile
  - Html
date: 2020-03-08 16:00:00
---

## 利用 rem 适配

**优点**：没有破坏完美视口，**缺点**：px值到rem的转换太复杂

~~~css
/* em  自身标签font-size的大小 */
div{width: 10em;height: 10em;}
/* rem 根标签的font-size的大小 */
div{width: 10rem;height: 10rem;}
/* 谷歌下字体的默认大小为16px */
/* 谷歌下字体的最小大小为12px */
~~~

~~~html
<script>
var html = document.querySelector('html')
// 将html的字体大小更改为视觉视口大小的宽度, 这样, 1rem就等于满屏
html.style.fontSize = document.documentElement.clinetWidth + 'px'
// 假如我们要在总宽750px的div上放一个200px宽高的盒子，也就是750px = 1rem，那么就是200 / 750 ≈0.26rem

// 但是小数点并不方便计算，所以可以将满屏的宽度分成多个rem尺寸, 这里是16个rem等于满屏
html.style.fontSize = document.documentElement.clinetWidth / 16 + 'px'
// 假如我们要在总宽750px的div上放一个200px宽高的盒子，也就是750px = 16rem，那么就是(200 / 750) * 16 ≈ 4.26rem
</script>

<!-- 
设置了html的字体大小，但子元素有权重问题，一旦以某种方式更改了字体覆盖了html的字体大小，那么适配将不起效果，
所以要在适配标签中假如!important
-->
<script>
(function(){
    var styleNode = document.createElement("style");
	var w = document.documentElement.clientWidth/16;
	styleNode.innerHTML = "html{font-size:"+w+"px!important}";
	document.head.appendChild(styleNode);
})
</script>
~~~

利用 less 简化计算 rem

~~~less
@rem: 设计图总宽/16rem // 每一rem对应多少px
width: 70/@rem // css像素/rem值 = 则等于70对设计图总宽对应的rem值
~~~

## 利用 viewport 适配

**优点**：方便,直接使用px值也可以等比，**缺点**：没有使用完美视口

1. 将布局视口设置为设计图的宽度

问题：安卓不支持`width=number`

~~~html
<!-- 将布局视口设置为设计图的宽度 -->
<meta name="viewport" content="width=640">
<!-- 将布局视口设置为设计图的宽度 -->
~~~

2. 调整视口放大比例为设计图宽度

问题：`screen.width`兼容性太差

~~~html
<script>
    var targetW = 750
    // 视觉视口 / 设计图尺寸 = 一个视觉视口的px值 对应 一个设计图尺寸 的放大比例
    var scale = screen.width/targetW
    var meta = document.createElement('meta')
    meta.name = "viewport"
    meta.content = 'initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no'
    document.head.appendChild(meta)
</script>
~~~

3. 根据完美视口调整放大比例

~~~html
<!-- 先设置为完美视口 -->
<meta name="viewport" content="width=device-width">
<script>
    var targetW = 750
    // 完美视口宽度 / 设计图宽度 = 一个视觉视口宽的px值 对应 一个设计图宽度 的放大比例
    var scale = document.documentElement.clientWidth / targetW
    var meta = document.querySelector("meta[name='viewport']")
    meta.content = 'initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no'
</script>
~~~
