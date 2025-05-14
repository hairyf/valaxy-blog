---
title: 微信公众号服务接入
date: 2020-04-04 14:00:00
categories:
  - Notes
  - Client
  - Official Account
tags:
  - Official Account
---

微信公众平台,是给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。简单来说，一个提供服务平台。

注册微信公众号：https://mp.weixin.qq.com/

登录后，页面左边将会有一排功能选项，订阅号中一共有5个功能可以直接设置使用。

![](https://pic.imgdb.cn/item/62f4c86416f2c2beb1c498c5.jpg)

<!-- more -->

## 微信公众号类型

订阅号：

- 适用人群：个人、媒体。
- 群发次数：订阅号（认证用户、非认证用户）1天内可群发1条消息。

> 订阅号媒体和个人提供一种新的信息传播方式，主要功能是在微信侧给用户传达资讯；（功能类似报纸杂志）

服务号：

- 适用人群：企业、政府或其他组织。
- 群发次数：服务号 1 个月（按自然月）内可发送 4 条群发消息。

> 为企业和组织提供更强大的业务服务与用户管理能力，主要偏向服务类交互（功能类似银行，12315，114等）

企业微信（原企业号）：

企业微信继承企业号所有能力，同时为企业提供专业的通讯工具、丰富的办公应用与 API，助力企业高效沟通与办公。

## 构建服务器（node）

- `demo.js`

~~~js
// 引入express模块
const express = require('express')
// 创建app应用对象
const app = express()
// 添加中间件
app.use((req, res, next) => {})
// 监听端口号
app.listen(3000, () => console.log('服务器启动成功'))
~~~

运行服务器：

```sh
node demo.js
```

## 映射内网端口（ngrok）

~~~sh
# 授权命令
ngrok authtoken 1aHiCly2wNBjST2mtF4oJp92Zjj_3sM27HoSy4yDSUtc6tRdL
# 运行开发端口
ngrok http 3000
~~~

![](https://pic.imgdb.cn/item/62f4c91f16f2c2beb1c677b5.jpg)

## 公众号授权服务器

![](https://pic.imgdb.cn/item/62f4c95816f2c2beb1c70dd5.jpg)

先进入公众号平台设置开发信息：

1. 进入开发者工具
2. 开发者文档
3. 接口测试号申请
4. 进入微信公众帐号测试号申请系统

![](https://pic.imgdb.cn/item/62f4c9ba16f2c2beb1c818b0.jpg)

填写 ngrok 内网渗透的 URL 和 Token 提交后，微信会发送一个请求到填写的 url 上，服务器需要对请求处理并返回给微信才能配置成功。

![](https://pic.imgdb.cn/item/62f4c9fb16f2c2beb1c8bf01.jpg)

配置请求参数：

~~~json
{
  // 微信加密签名
  "signature": "c35b593471d122b1683c1090eb4dffa3a494e14c",
  // 随机字符串
  "echostr": "8914314992233147389",
  // 微信发送请求时间戳
  "timestamp": "1586400252",
  // 随机数字
  "nonce": "267878625"
}
~~~

服务器验证：

微信服务器会向配置服务器发送授权请求，并会传入三个参数，分别是 timestamp、nonce、token。

- 将 timestamp、nonce、token 三个参数进行字典序排序 (a b c.... 1 2 3...)
- 将三个参数字符串拼接成一个字符串进行 `sha1` 加密。
- 开发者获得加密后的字符串 与微信加密签名（signature）对比， 标识该请求来源于微信。

~~~js
// 引入 express 模块
const express = require('express')
// 引入 sha1 加密模块
const sha1 = require('sha1')
// 创建 app 应用对象
const app = express()

// 配置官网提供的参数
const token = 'mrMaoHTML15106'
const appID = 'wxa2a6b98bb1a339d6'
const appsecret = 'd0896af5e43a366558cb05e68f6ce7c8'

/* 验证服务器有效性(接收处理所有参数) */
app.use((req, res, next) => {
  // 获取请求参数：加密签名、随机字符串、请求时间戳、随机数字
  const { signature, echostr, timestamp, nonce } = req.query
  // 进行字典排序, 并进行拼串
  const str = [timestamp, nonce, token].sort().join('')
  // 进行sha1加密
  const sha1Str = sha1(str)
  // 加密字符串进行微信服务器比较。比较成功返回随机字符串，比较失败返回error。
  if (sha1Str === signature)
    res.send(echostr)

  else
    res.send('error')
})
// 监听端口号
app.listen(3000, () => console.log('服务器启动成功'))
~~~

## 服务器划分模块

~~~makefile
├─ config/           	## 存储配置信息目录
│   ├─ index.js
├── wechat/           ## 核心功能库(路由中间件函数)
│   ├─ auth.js		    ## 验证服务器功能
├── app.js         	  ## 路由接口启动文件
├── package.json     	## 配置文件
~~~

存储配置信息目录：`config/index.js`

```js
module.exports = {
  token: 'mrMaoHTML15106',
  appID: 'wxa2a6b98bb1a339d6',
  appsecret: 'd0896af5e43a366558cb05e68f6ce7c8'
}
```

验证服务器功能：`wechat/auth.js`

```js
// 引入sha1加密模块
const sha1 = require('sha1')
// 引入token数据模块
const { token } = require('./config')
module.exports = () => (req, res, next) => {
  // 获取请求参数：加密签名、随机字符串、请求时间戳、随机数字
  const { signature, echostr, timestamp, nonce } = req.query
  // 进行字典排序, 并进行拼串
  const str = [timestamp, nonce, token].sort().join('')
  // 进行sha1加密
  const sha1Str = sha1(str)
  // 加密字符串进行微信服务器比较。比较成功返回随机字符串，比较失败返回error。
  if (sha1Str === signature)
    res.send(echostr)
  else res.send('error')
}
```

服务器接口启动文件：`app.js`

```js
// 引入express并创建app应用对象
const app = require('express')()
// 引入auth中间件函数
const auth = require('./wechat/auth')
// 添加默认根路径请求路由
app.use(auth())
// 开启监听端口号
app.listen(3000, () => console.log('服务器启动成功'))
```

## EJS 公众号页面

```sh
npm i ejs --save
```
`wpp_server/app.js`

~~~javascript
const app = require('express')()
const auth = require('./wechat/auth')

// 配置模板资源目录的绝对路径
app.set('views', `${__dirname}/views`)
// 配置模板引擎
app.set('view engine', 'ejs')
// 渲染路由页面, 将渲染好的页面返回给用户
app.get('/search', (req, res) => res.render('search'))

app.use(auth())

// 开启监听端口号
app.listen(3000, () => console.log('start_server:http://localhost:3000/'))
~~~

## 路由中间件

使用路由中间件改善项目结构。

`router/index.js`

~~~javascript
// 创建router实例
const router = new require('express').Router()
// 添加路由
router.get(...)
router.use(...)
// 暴露router
module.exports = router
~~~

`app.js`

~~~javascript
// 引入express并创建app应用对象
const app = require('express')()
// 配置模板资源目录的绝对路径
app.set('views', `${__dirname}/views`)
// 配置模板引擎
app.set('view engine', 'ejs')
// 开启监听端口号
app.listen(3000, () => console.log('start_server:http://localhost:3000/'))
~~~
