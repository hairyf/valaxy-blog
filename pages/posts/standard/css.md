---
title: CSS 编写规范
date: 2022-03-04
categories:
  - Standard
tags: 
  - Css
---

关于 CSS 的标准。

## 类命名

类命名采用小写，中划线（ - ）分开关键字命名，英文单词尽量不要缩写。

~~~css
/* 符合 */
.video-warp {}
/* 不符合 */
.video_warp {}
.videoWarp {}
.VIDEOWarp {}
~~~

<!-- more -->

## 避免事项

- 避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于 10 行以上的嵌套规则出现
- 少用 `#`，少用 `*`，少用标签选择器，`!important` 尽量避免使用。

## CSS 属性书写顺序

样式编写，建议遵循以下顺序。

1. 布局定位属性：`display / position / float / clear / visibility / overflow/...`
2. 自身属性：`width / height / margin / padding / border / background /...`
3. 文本属性：`color / font / text-decoration / text-align / vertical-align /...`
4. 其他属性（CSS3）：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient/...`