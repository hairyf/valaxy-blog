---
title: Koa 常用中间件
date: 2020-05-03 14:40:00
categories:
  - Notes
  - Server
  - Express
tags: 
  - Express
---

Koa 和 Express 一样是一个自身功能极简，完全是由路由和中间件构成的一个web开发框架，从本质上来说，一个 Koa 应用就是在调用各种中间件，而 Koa 也具有很多第三方中间件可以使用。

<!-- more -->

## 设置模板资源渲染

~~~js
const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()

// 加载模板目录(绝对路径), 引擎为ejs
app.use(views(path.join(__dirname, './views'), { extension: 'ejs' }))
app.use(async (ctx) => {
  // 渲染/views/index.ejs, 并传入数据供模板使用
  await ctx.render('index', { title: 'nmd' })
})

app.listen(3000, () => console.log('服务器启动成功'))
~~~

## router 中间件

**安装**：`npm i koa-router --save`

~~~js
const Koa = require('koa')
const app = new Koa()
// 由于Koa本身并没有内置路由, 需要引入路由器
const router = require('koa-router')()

// 创建一个get请求, 路径是/search
router.get('/search', async (ctx) => {
  // 处理并返回数据.....
  ctx.body = { code: 1, msg: '请求成功' }
})
// 创建一个post请求, 路径是/search
router.post('login', async (ctx) => {
  // 处理并返回数据.....
  ctx.body = { code: 1, msg: '请求成功' }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('服务器启动成功'))
~~~

## static 中间件


**安装**：`npm i koa-static --save`

~~~js
const static = require('koa-static')
const Koa = require('koa')
const app = new Koa()
// 指定根路径 为 public目录为静态资源目录
app.use(static('public'))
// localhost:4000/a.mp3 --> public/a.mp3

app.listen(3000, () => console.log('服务器启动成功'))
~~~

程序指定对应路径：

~~~js
import koaStatic from 'koa-static'
import mount from 'koa-mount'
import Koa from 'koa'
const app = new Koa()
app.use(mount('/public', koaStatic(`${__dirname}/public`)))
// localhost:4000/public/a.mp3 --> public/a.mp3

app.listen(3000, () => console.log('服务器启动成功'))
~~~

## session 中间件

**安装**：`npm i koa-session --save`

~~~js
const Koa = require('koa')
const app = new Koa()
// 使用session会话储存信息的中间件
const Koa_Session = require('koa-session')

// 这个是配合signed属性的加密签名key
app.keys = ['im a newer secret']
const CONFIG = {
  key: 'koa.sess', // cookie的key(默认是 koa:sess)
  maxAge: 86400000, // 过期时间, 以毫秒ms为单位计算(默认为一天)
  autoCommit: true, // 自动提交到响应头(默认true)
  overwrite: true, // 是否允许重写(默认true)
  httpOnly: true, // 是否设置HttpOnly, 设置了"HttpOnly"属性能有效的防止XSS攻击 (默认true)
  signed: true, // 是否使用加密签名(默认true)
  rolling: false, // 是否每次响应时刷新Session的有效期(默认false)
  renew: false, // 是否在Session快过期时刷新Session的有效期(默认false)
}

// 添加该session中间件
app.use(Koa_Session(session_config, app))

// 请求中使用
app.use(async (ctx) => {
  // 设置session回话对象中的值
  ctx.session.username = '张山'
  // 获取session对象中的值
  const session = ctx.session.username
})
app.listen(3000, () => console.log('服务器启动成功'))
~~~