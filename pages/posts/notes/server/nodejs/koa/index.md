---
title: Koa 新一代 Web 开发框架
date: 2020-05-03 14:30:00
categories:
  - Server
  - Express
tags: 
  - Express
---

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

<!-- more -->

基本使用：

~~~js
// 引入Koa模块
const Koa = require('koa')
// 创建app应用对象
const app = new Koa()
// 添加中间件, 该中间件所有请求都会通过
app.use(async (ctx, next) => {})
// 监听端口号, 启动服务器
app.listen(3000, () => console.log('服务器启动成功'))
~~~

## 中间件流程

~~~js
app.use(async (ctx, next) => {
  console.log(1)
  next() // next不写会报错
  console.log(5)
})
app.use(async (ctx, next) => {
  console.log(2)
  next()
  console.log(4)
})

app.use(async (ctx, next) => {
  console.log(3)
  ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('服务器启动成功'))
// 打印出1、2、3、4、5
~~~

## 请求携带参数

~~~js
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
router.get('/search', async (ctx) => {
  // 查询字符串组成的对象 通常在get请求中使用
  console.log(ctx.query) // => {...}

  // 请求体中携带的对象 通常在post请求中使用
  console.log(ctx.request.body) // => {...}

  // 请求中的占位符 如/search:id中, id是占位符, 则可以获取params.id的值
  console.log(ctx.params) // => {...}
  // 当使用正则表达式来定义路由占位符规则时, req.params通常是一个数组
  console.log(ctx.params[0])

  // 请求中携带的cookies, 如果没有则为{}
  console.log(ctx.cookies.get) // => {...}

  ctx.body = { code: 1, msg: '请求成功' }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('服务器启动成功'))
~~~

## 响应携带参数

~~~js
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

router.get('/search', async (ctx) => {

  // 将cookie设置name为value, 后面还可以跟一个配置对象
  ctx.cookies.set('name', 'value', {
    signed: true, // 是否使用加密签名(默认false)
    domain: '.example.com', // Cookie的域名(默认为应用程序的域名)
    path: '/admin', // Cookie的路径(默认为/)
    maxAge: new Date(Date.now() + 900000), // cookies的过期时间(未指定或设置为0, 则创建会话cookie)
    secure: true, // 将cookie标记为仅与HTTPS一起使用(默认为false)
    httpOnly: true, // 将Cookie标记为只能由Web服务器访问(默认为true)
  })
  // 清除由指定的Cookie name
  ctx.cookies.set('name', '', { signed: false, maxAge: 0 })

  // 返回一个响应数据, 该格式可以是字符串, Buffer对象, 流数据, 对象(转换为JOSN字符串), null(无内容响应)
  ctx.body = { code: 1, msg: '数据' }

  // 根路径重定向
  ctx.redirect('/admin')
  // 相对当前路径URL 如当前路径是/admin/home那么重定向后就是/admin/home/post/new
  ctx.redirect('post/new')
  // 重定向其他站点URL
  ctx.redirect('http://example.com')
  // 重定向路径后退, 如当前路径是/admin/home那么重定向后就是/admin
  ctx.redirect('..')
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('服务器启动成功'))
~~~