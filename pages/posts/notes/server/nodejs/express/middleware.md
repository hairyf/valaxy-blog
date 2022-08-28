---
title: Express 常用中间件
date: 2020-05-03 14:40:00
categories:
  - Notes
  - Server
  - Express
tags: 
  - Express
---

Express 是一个自身功能 极简,完全是由路由和中间件构成的一个web开发框架，从本质上来说，一个Express 应用就是在调用各种中间件，而 Express 具有很多第三方中间件可以使用。

<!-- more -->

## 设置模板资源渲染

~~~js
// 配置模板资源目录的绝对路径 与 模板引擎为ejs
// 通常配合res.render使用, 返回渲染页面
app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs')
~~~

## router 中间件

~~~js
// 创建一个路由器, 该路由器有use/get/post...等方法
// router通常用来构建模块化, 需要最后app.use(router)引入
const router = express.Router()
app.use(router)
~~~

## cookies 中间件

~~~js
const cookieParser = require('cookie-parser')
// 添加cookie中间件
app.use(cookieParser())
// 中间件可设置为加密
app.use(cookieParser('secret'))
~~~

## static 中间件

~~~js
// 添加静态资源访问路径, 后面可跟一个配置对象
app.static('public')
// localhost:4000/a.mp3 --> public/a.mp3
// localhost:4000/static/a.mp3 --> public/a.html
// localhost:4000/static/a.mp3 --> public/a.js

// 为`express.static`功能所服务的文件创建虚拟路径前缀(文件系统中实际上不存在该路径)
app.use('/static', express.static('public'))
// localhost:4000/static/a.mp3 --> public/a.mp3
// localhost:4000/static/a.mp3 --> public/a.html
// localhost:4000/static/a.mp3 --> public/a.js
~~~

## session 中间件

~~~js
const session = require('express-session')
// 添加session, 默认配置
app.use(session())
// 添加session, 更改配置
app.use(session({
  secret: 'asdasdasjop', // 盐值(默认无)
  cookie: { maxAge: 10000 }, // cookie的配置对象
  resave: true, // 是否保存到磁盘
  saveUninitialized: true // 是否保存初始化session
}))
router.get('/session', (req, res) => {
  // 设置session
  req.session.user_name = '....'
  // 获取session
  req.session.user_name
  // 重置session有效时间(cookies设置)
  req.session.cookie.maxAge = 10000
  // 销毁session
  req.session.destroy(() => console.log('销毁完毕'))
  res.send('session路由')
})
~~~
