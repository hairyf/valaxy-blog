---
title: NodeJS 服务端 JavaScript 解释器
date: 2020-05-03 14:00:00
categories:
  - Server
  - NodeJS
tags: 
  - NodeJS
---

Node.js 发布于2009年5月，由 Ryan Dahl 开发，是一个基于 [Chrome](https://baike.baidu.com/item/Google%20Chrome/5638378?fromtitle=Chrome&fromid=5633839) [V8](https://baike.baidu.com/item/V8/6178125) 引擎的 JavaScript 运行环境，使用了一个事件驱动、非阻塞式I/O模型，让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与 PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。 

<!-- more -->

## 基本特点

- Node.js 大部分基本模块都用 JavaScript 编写。在 Node.js 出现之前，JavaScript 通常作为客户端程序设计语言使用，以 JavaScript 写出的程序常在用户的浏览器上运行。

- Node.js 已被 IBM、Microsoft、Yahoo!、Walmart、Groupon、SAP、 LinkedIn、Rakuten、PayPal、VoxerGoDaddy 等企业采用。

- Node.js 是事件驱动的。开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽人意，Node正是在这个前提下被创造出来。

- Node.js 把 JavaScript 的易学易用和 Unix 网络编程的强大结合到了一起。

- Node.js 允许通过 JavaScript 和一系列模块来编写服务器端应用和网络相关的应用。

- Node.js 核心模块包括文件系统 I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等。Node.js 模块的 API 形式简单，降低了编程的复杂度。

- Node.js 有强大的开源社区，使用框架可以加速开发。常用的框架有 Express.js、Socket.IO和 Connect 等。Node.js 的程序可以在 Microsoft Windows、Linux、Unix、Mac OS X 等服务器上运行。

- Node.js 也可以使用 CoffeeScript、TypeScript、Dart 语言，以及其他能够编译成 JavaScript 的语言编程。

## 基本用途

- Web服务 API，比如 REST
- 实时多人游戏
- 后端 Web 服务，例如跨域、服务器端的请求
- 基于 Web 的应用
- 多客户端的通信，如即时通信

## I/O(Input/Output)

I/O操作指的是对磁盘的读写操作

## JavaScript 引擎

- Node.js 是对 ES 标准一个实现，Node.js 也是一个 JS 引擎，通过 Node.js 可以使 js 代码在服务器端执行
- Node.js 仅仅对 ES 标准进行了实现，所以在 Node.js 中不包含 DOM 和 BOM
- Node.js 编写都是单线程的服务器
- Node.js 处理请求时是单线程，但是在后台拥有一个 `I/O` 线程池

## Node.js 内建对象

- String
- Number
- Boolean
- Math
- Date
- RegExp
- Function
- Object
- Array

> `BOM`，`DOM` 不能使用，但是可以使用 `console` 也可以使用定时器 `setTimeout()`、`setInterval()`

## 命令行

Node.js 通常运行在命令行中，所以我们先掌握基本的命令行指令

1. `开始菜单 --> 运行 --> CMD --> 回车`
2. `Win + R --> CMD --> 回车`

| 命令      | 功能                     |
| --------- | ------------------------ |
| dir       | 列出当前目录下的所有文件 |
| cd 目录名 | 进入到指定的目录         |
| md 目录名 | 创建一个文件夹           |
| rd 目录名 | 删除一个文件夹           |

- `.`  表示当前目录
- `..` 表示上一级目录


## 开启调试模式

~~~
node --inspect-brk file.js
~~~

打开浏览器，点击控制台的 node 标签

