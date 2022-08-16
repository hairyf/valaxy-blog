---
title: NodeJS 服务模块（http|s）
date: 2020-05-03 18:00:00
categories:
  - Server
  - NodeJS
tags: 
  - NodeJS
---

在 NodeJS 中，我们不需要使用 IIS、Apache 等这些第三方 web 服务器软件。因为我们可以基于 Node.js 提供的 http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务

NodeJS 自身就可以用来构建服务器，而且 http|s 模块是由 C++ 实现的，性能可靠。

<!-- more -->

基本使用：

~~~js
// 引入本地服务器API
const http = require('http')
// 创建服务器实例
const server = http.createServer()
// 绑定接收请求事件
server.on('request', (req, res) => {
  // 请求路径 (请求路径永远以 "/" 开头)
  console.log(req.url)
  // 根据请求路径处理事件, 返回对应数据给用户
  res.end('hello world')
})

// 绑定监听端口号, 开启服务器
server.listen(3000, () => console.log('服务器开启成功, 端口号为:3000'))
~~~

## 请求携带参数

~~~js
server.on('request', (req, res) => {
  // 请求路径 (请求路径永远以 "/" 开头)
  console.log(req.url)
  // 请求头对象
  console.log(req.headers)
  // 请求类型
  console.log(req.method)

  res.end('hello world')
})
~~~

## 响应携带参数

~~~js
server.on('request', (req, res) => {
  // 设置状态码和响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // 设置响应头
  res.setHeader('Content-Type', 'text/plain')
  // 写入内容
  res.write(fileData)
  // 结束并响应
  res.end('hello word')
})
~~~

