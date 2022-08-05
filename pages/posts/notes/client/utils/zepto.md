---
title: JavaScript 工具库(Zepto)
categories:
  - notes
  - client
  - utils
tags:
  - javascript
  - zepto
  - utils
---

Zepto是一个轻量级的、针对现代高级浏览器的JavaScript工具库, 它兼容jQuery的API。Zepto是一款开源软件, 它采用的是对开发者和商业都很友好的开源协议--MIT license, 并具有以下特点：

- 体积 8kb
- 针对移动端的框架
- 同 `jquery` 大部分一样, 都是 `$` 为核心函数
- 功能完善

<!-- more -->

## 与 jquery 相似

作为函数使用

- Function
- 选择器字符串
- html 标签字符串
- DOM code

作为对象使用

- $.each()
- $.trim()
- ajax(), $.get(), $.post()
- $.isArray(),....

> $调用返回的就是 jquery对象/zepto对象 伪数组(有时候只有一个元素)

## 与 jquery 不同

标签属性 attr | prop
- jquery: 标签的固有属性, 布尔值属性
- zepto: 标签的自定义属性, 用attr布尔值属性并且布尔值属性在标签体内没有定义时候`zepto:attr` 同样获取布尔值属性

配置对象 jquery | zepto
- jquery: 不同使用配置对象添加id, class。。。
- zepto: 可以使用配置对象---结构, 样式分离, 而且容易管理

获取目标元素相对于视口的偏移量(offset)
- jquery: top, left
- zepto: top, left, width, height, content, padding, border

元素操控 width | height | css | innerHeight |　innerWidth

jquery：
- width() | height()：获取content内容区的值，没有单位
- css()：获取content内容区的值，有单位
- innerHeight()：content，padding，borde，没有单位

zepto：
- width() | height()：获取的content，补白，border
- 没有innerHeight()，innerWidth()
- css()：需要而外引入插件，语法也不一样

通用遍历 each
- jquery：能遍历数组，对象，不能遍历字符串，json
- zepto：能遍历数组，对象，字符串，json

获取隐藏元素的宽高
- jquery：能
- zepto： 不能

## touch event

- tap 点击事件
- singleTap 点击事件
- longTap 长按事件，连续作用 `750ms`
- swipe 滑动事件，在同一个方向连续滑动`30px`才为滑动，否则就是点击
- longTap 长按事件 手指在目标对象上连续作用超过`750ms`算长按，否则算点击