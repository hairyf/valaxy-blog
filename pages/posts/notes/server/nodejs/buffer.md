---
title: NodeJS 缓冲区（Buffer）
date: 2020-05-03 14:30:00
categories:
  - Notes
  - Server
  - NodeJS
tags: 
  - NodeJS
---
JS 数组性能比其他语言的数组差，但 Buffer 中的内存不是通过 JavaScript 分配的，而是在底层通过 C++ 申请的，也就是我们可以直接通过 Buffer 来创建内存中的空间。

<!-- more -->

## 基本特点

从结构上看 Buffer 非常像一个数组，它的元素为 16 进制的两位数。一个元素就表示内存中的一个字节。

- Buffer 的结构和数组很像，操作的方法也和数组类似
- 数组中不能存储二进制的文件，而 Buffer 就是专门用来存储二进制数据
- Buffer 不需要引入模块，直接使用即可
- Buffer 中的一个元素，占用内存的一个字节
- Buffer 的大小一旦确定，则不能修改，Buffer 实际上是对底层内存的直接操作

在 Buffer 中存储的都是二进制数据，但是在显示时都是以 16 进制的形式显示，Buffer 中每一个元素的范围是 `00 - ff`、`0 - 255`、`00000000 - 11111111`

~~~javascript
// 计算机 一个 0 或一个 1 我们称为1位（bit）
8bit     = 1byte（字节）
1024byte = 1kb
1024kb = 1mb
1024mb = 1gb
1024gb = 1tb
~~~

## 使用方法

- `Buffer.from(str)`：将一个字符串转换为 Buffer
- `Buffer.alloc(size)`：创建一个指定大小的 Buffer
- `Buffer.alloUnsafe(size)`：创建一个指定大小的 Buffer，但是可能包含敏感数据
- `Buffer.toString() `：将缓冲区中的数据转换为字符串

## 实际运用

~~~js
var str = 'Hello 尚硅谷'
// 将一个字符串保存到buffer中
var buf = Buffer.from(str)
~~~

~~~js
// 创建一个10个字节的buffer
var buf2 = Buffer.alloc(10)
// 通过索引，来操作buf中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xAA
buf2[3] = 256 // 超过二进制8位就会舍掉前面多的
buf2[10] = 15 // 一旦确定长度,不可修改
console.log(buf2) // <Buffer 58 ff aa 00 00 00 00 00 00 00>
// 只要数字在控制台或页面中输出一定是10进制
console.log(buf2[2]) // 170
// 转换为16进制的字符串
console.log(buf2[2].toString(16)) // aa
~~~
