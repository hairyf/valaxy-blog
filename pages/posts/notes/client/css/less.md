---
title: Less 样式预处理语言
categories:
  - Notes
  - Client
  - css
tags:
  - css
  - less
---

Less 是一门 CSS 预处理语言,它扩展了 CSS 语言,增加了变量、Mixin、函数等特性。Less 可以运行在 Node 或浏览器端。

<!-- more -->

## 嵌套式

~~~less
#box1{
  ...
  #box2{
    ...
  }
}
~~~

## 注释

~~~less
// 这是见不得人的注释
/* 这是想给人看见的注释 */
~~~

## 变量

~~~less
@color: pink;			/* 变量可以是css属性值 */
@m: margin;				/* 变量可以是css属性 */
@selector: #wrap;	/* 变量可以是选择器 */
~~~

## hover

默认情况下添加 :hover 编译时会认为这个是 inner 的子元素, 即 `.inner :hover{}`
加上 `&` 后让 `:hover{}` 可以让前面的空格不保留, 即 `.inner:hover{}`

~~~less
#warp {
  &:hover {

  }
}
~~~

## 普通混合

~~~less
.center(){
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
// 可以插入选择器大括号内
#warp {
  .center
}
~~~

## 参数混合

~~~less
// 可以带默认值
.size(@width: 10px, @height: 10px) {
  width: @width;
  height: @height;
}
#warp {
  .size(60px,60px)
}
~~~

## 引入外部文件

~~~less
@import "triangle.less";// 引用库|路径文件
~~~

## 匹配模式

~~~less
.triangle(T, 15px, 15rpx) {
}
.triangle(B){ /* .. */ } // 匹配B
.triangle(C){ /* .. */ } // 匹配C

// 使用
#warp { 
  .triangle(T, 15px, 15px)
}
~~~

## 基本运算

现在基本可以使用 calc 代替使用

~~~less
#warp { width: (100 +100px) }
~~~

## 继承样式

~~~less
//在 #wrap 选择器后面加入
.a { &:extend(.b) }   // ---> .a{ color:red }
.b { color: red }
~~~
