---
title: 微信小程序组件开发
categories:
  - Notes
  - Client
  - Mini Program
tags:
  - Mini Program
date: 2020-04-01 16:00:00
---

我们知道了微信小程序的视图层，而视图层还包括了组件。以下，总结微信小程序的常用组件，并自定义自己的组件。

<!-- more -->

## 标签组件

基本组件：

~~~html
<view><!-- 块级元素 --></view>
<image src=""><!-- 图片元素 --></image>
<text><!-- 行内元素 --></text>
<web-view><!-- 承载网页, 自动铺满屏幕 --></web-view>
<rich-text nodes="{{info.content}}"><!-- 富文本组件, 渲染nodes中的html字符串 --></rich-text>
~~~

表单组件：

~~~html
<button><!-- 按钮 --></button>
<switch><!-- 开关 --></switch>
<slider><!-- 滑动进度条 --></slider>
<picker><!-- 滚动选择器 --></picker>
<checkbox-group>
  <!-- 多项选择容器 -->
	<checkbox><!-- 多项项目 --></checkbox>
</checkbox-group>
<radio-group>
  <!-- 单项选择容器 -->
	<radio><!-- 单项项目 --></radio>
</radio-group>
~~~

媒体组件：

~~~html
<camera><!-- 系统相机 --></camera>
<live-player><!-- 音视频直播 --></live-player>
<live-pusher><!-- 音视频录制 --></live-pusher>
<video><!-- 音视频播放 --></video>
<map><!-- 地图 --></map>
<canvas><!-- 画布 --></canvas>
~~~

开放组件：

~~~html
<ad><!-- 广告 --></ad>
<official-account><!-- 公众号关注 --></official-account>
~~~

## 自定义模板

使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段，如：`pages/template/template.wxml`

~~~html
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
~~~

在模板的同级目录创建相同名称的样式文件，如：`pages/template/template.wxss`

~~~css
.list{}
~~~

在模板的同级目录创建相同名称的js文件，如：`pages/template/template.js`

~~~js
Page({
  data: {
    index: 0,
    msg: 'this is a template',
    time: '2016-09-15'
  }
})
~~~

使用模板：

`import`可以在该文件中使用目标文件定义的`template`，在 index.wxml 中引用了 template.wxml，就可以使用`template`模板：`pages/template/template.wxml`

~~~html
<import src="/pages/template/template.wxml" /><!-- 引入 -->
<template is="list_template" /><!-- 使用 -->
~~~

由于默认模板是不带有样式的，需要引入模板文件夹中的样式：`pages/template/template.wxss`

~~~css
@import "/pages/template/template.wxss"
~~~

## 自定义组件

开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块，有助于代码维护。自定义组件在使用时与基础组件非常相似。

### 定义组件

类似于页面，一个自定义组件由 `json` `wxml` `wxss` `js` 4个文件组成。要编写一个自定义组件，首先需要在 `json` 文件中进行自定义组件声明（将 `component` 字段设为 `true` 可将这一组文件设为自定义组件）：

~~~json
{ "component": true }
~~~

同时，还要在 `wxml` 文件中编写组件模板，在 `wxss` 文件中加入组件样式，它们的写法与页面的写法类似。

~~~html
<!-- 这是自定义组件的内部WXML结构 -->
<view class="inner">
 	{{innerText}}
    <slot><!-- 插槽是使用时, 传入的所有内容 --></slot>
</view>
~~~

~~~css
/* 这里的样式只应用于这个自定义组件 */
.inner {
  color: red;
}
~~~

在自定义组件的 `js` 文件中，需要使用 `Component()` 来注册组件，并提供组件的属性定义、内部数据和自定义方法。
组件的属性值和内部数据将被用于组件 `wxml` 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 [Component构造器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html) 。

~~~js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() {}
  }
})
~~~

### 使用组件

使用已注册的自定义组件前，首先要在页面的 `json` 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径

~~~json
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
~~~

这样，在页面的 `wxml` 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

~~~html
<view>
  <!-- 以下是对一个自定义组件的引用 -->
  <component-tag-name inner-text="Some text">
  	<!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
    <view>这里是插入到组件slot中的内容</view>
  </component-tag-name>
</view>
~~~

### 组件插槽

在组件的wxml中可以包含 `slot` 节点，用于承载组件使用者提供的wxml结构。默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。

~~~js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { /* ... */ },
  methods: { /* ... */ }
})
~~~

此时，可以在这个组件的wxml中使用多个slot，以不同的 `name` 来区分。

~~~html
<!-- 组件模板 -->
<view class="wrapper">
  <slot name="before"></slot>
  <view>这里是组件的内部细节</view>
  <slot name="after"></slot>
</view>
~~~

使用时，用 `slot` 属性来将节点插入到不同的slot上。

~~~html
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
    <view slot="before">这里是插入到组件slot name="before"中的内容</view>
    <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
    <view slot="after">这里是插入到组件slot name="after"中的内容</view>
  </component-tag-name>
</view>
~~~
