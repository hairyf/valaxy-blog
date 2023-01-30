---
title: Express Web 开发框架
date: 2020-05-03 14:30:00
categories:
  - Notes
  - Server
  - Express
tags: 
  - Express
---


Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。
可以选择的各种 HTTP 实用工具和中间件，快速方便地创建强大的 API。Express 还提供精简的基本 Web 应用程序功能，而不会隐藏了解和青睐的 Node.js 功能。许多流行的开发框架 都基于 Express 构建。

<!-- more -->

基本使用：

~~~js
// 引入express模块
const express = require('express')
// 创建app应用对象
const app = express()
// 添加中间件, 该中间件所有请求都会通过(可选)
app.use((req, res, next) => {})

// 创建一个 get 请求, 路径是 /search
app.get('/search', (req, res) => {
  // 处理并返回数据.....
  res.send({ code: 1, msg: '请求成功' })
})
// 创建一个 post 请求, 路径是 /search
app.post('login', (req, res) => {
  // 处理并返回数据.....
  res.send({ code: 1, msg: '请求成功' })
})

// 监听端口号, 启动服务器
app.listen(3000, () => console.log('服务器启动成功'))
~~~

## 请求携带参数

~~~js
app.get('/search', (req, res) => {
  // 查询字符串组成的对象 通常在get请求中使用
  console.log(req.query) // => {...}

  // 请求体中携带的对象 通常在post请求中使用
  console.log(req.body) // => {...}

  // 请求中的占位符 如/search:id中, id是占位符, 则可以获取params.id的值
  console.log(req.params) // => {...}
  // 当使用正则表达式来定义路由占位符规则时, req.params通常是一个数组
  console.log(req.params[0])

  // 使用cookie-parser中间件后, 则是请求中携带的cookies, 如果没有则为{}
  console.log(req.cookies) // => {...}
  // 请求中发送过来的签名cookies(加密) 如不是签名的cookies, 则是空对象
  console.log(req.signedCookies) // => {...}

  // 接收流体数据使用req.on方法(可promise封装)
  let data = ''
  req.on('data', buffer_data => data += buffer_data.toString())
    // 接收完毕, 此时数据是完整的
    .on('end', () => console.log(data))

  res.send({ code: 1, msg: '请求成功' })
})
~~~

## 响应携带参数

~~~js
app.get('/search', (req, res) => {

  // 将cookie设置name为value, 后面还可以跟一个配置对象
  res.cookie('name', 'value', {
    domain: '.example.com', // Cookie的域名. 默认为应用程序的域名
    path: '/admin', // Cookie的路径. 默认为/
    expires: new Date(Date.now() + 900000), // cookies的过期时间, 未指定或设置为0, 则创建会话cookie.
    secure: true, // 将cookie标记为仅与HTTPS一起使用.
    httpOnly: true, // 将Cookie标记为只能由Web服务器访问.
    signed: true // 设置cookie为加密(引入中间件函数参数为secret)
  })
  // 清除由指定的Cookie name, 后面还可以跟着一个配置对象, 该配置对象与 res.cookie基本一致
  res.clearCookie('name', {})

  // path以attachment(附件)的方式传输文件(相对路径, 全路径)
  // 通常浏览器会提示下载, 底层代码通过res.sendFile实现
  res.download('/report-12345.pdf')
  res.download('/report-12345.pdf', 'report.pdf')
  res.download('/report-12345.pdf', 'report.pdf', (err) => { })

  // 用于快速结束响应 而无需任何数据
  res.end()
  res.status(404).end()

  // 返回一个json格式的响应数据
  res.json({ code: 1, msg: '请求成功' })
  // 返回一个支持jsonp的响应数据
  res.jsonp({ code: 1, msg: '请求成功' })
  // 返回一个http响应数据, body参数可以是对象, 字符串, Buffer对象或一个Array
  res.send({ code: 1, msg: '请求成功' })
  // path以attachment(附件)的方式传输文件(全路径)
  res.sendFile(`${__dirname}/download/download.txt`)

  // 根路径重定向
  res.redirect('/admin')
  // 相对当前路径URL 如当前路径是 /admin/home 那么重定向后就是 /admin/home/post/new
  res.redirect('post/new')
  // 重定向其他站点URL
  res.redirect('http://example.com')
  // 重定向路径后退, 如当前路径是 /admin/home 那么重定向后就是 /admin
  res.redirect('..')

  // views中的模板资源渲染为html并返回响应
  // 后面可传入数据对象供模板使用
  res.render('search', { name: '孙悟空' })
})
~~~

## 脚手架构建

~~~sh
## 安装脚手架构建工具
cnpm i express express-generator -g

express '文件名'		## 创建一个默认配置的项目文件夹
express		## 创建一个以当前文件夹的项目

## express配置方式如下
express -e		#创建一个以ejs模板解析的项目
express -e --css less		#创建一个以ejs模板解析, 样式以less解析的项目

## 构建完成后启动项目
cnpm i		#进入项目架构安装依赖项
npm start		#启动项目

## 构建代码express配置帮助
$ express -h
  Usage: express [,options] [,dir]
  Options:
    -h, --help          输出使用方法
        --version       输出版本号
    -e, --ejs           添加对 ejs 模板引擎的支持
        --hbs           添加对 handlebars 模板引擎的支持
        --pug           添加对 pug 模板引擎的支持
    -H, --hogan         添加对 hogan.js 模板引擎的支持
        --no-view       创建不带视图引擎的项目
    -v, --view <engine> 添加对视图引擎（view） (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）
    -c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是 css 引擎）
        --git           添加 .gitignore
    -f, --force         强制在非空目录下创建
~~~

脚手架构建配置：

```js
// bin/www的配置(默认端口设置)
var port = normalizePort(process.env.PORT || '3000')

```

~~~sh
## 配置后台应用保存自动重运行
cnpm i nodemon --save
~~~