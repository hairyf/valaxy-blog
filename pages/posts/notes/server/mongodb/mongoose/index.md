---
title: Mongoose 对象异步模型框架
date: 2020-05-01 17:00:00
categories:
  - Server
  - MongoDB
tags: 
  - MongoDB
---

Mongoose 是设计用于异步环境的 MongoDB 对象模型工具，支持 promises 和 callbacks，Mongoose 为模型提供了一种直接的，基于 `scheme` 结构去定义你的数据模型。它内置数据验证，查询构建，业务逻辑钩子等，开箱即用。

在学习 Mongoose 的过程中需要熟悉一些名词：

- `Schema`: 一种以文件形式存储的数据库模型模式，不具备数据库的操作能力
- `Model`:  由 Schema 发布生成的模型，具有抽象属性和数据库操作能力
- `Entity`: 由 Model 创建的实例，也能操作数据库

<!-- more -->

## 基本使用

项目初始化：

```sh
## 初始化项目
npm init
## 安装 Mongoose
npm i mongoose --save
```

创建 `connect.js`，该文件用于连接数据库：

- 数据库 IP 地址，本案例使用本地地址 `localhost`
- 数据库名称，本案例使用 `test` 数据库
- IP 地址可以紧跟端口号 `url:[port]`，本案例使用默认端口（27017）

```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

监听连接状态：

~~~js
// 在 mongoose 对象中，有一个属性叫做 connection，该对象表示的就是数据库连接
mongoose.connection.once('open', () => {}) 	// 成功
mongoose.connection.once('close', () => {}) // 断开

~~~

断开数据连接：

```js
// 断开数据库
mongoose.disconnect()
```

### 创建模式（Schema）

Mongoose 中任何任何事物都是从 `Schema` 开始的。每一个 `Schema` 对应 MongoDB 中的一个集合（collection）。`Schema` 中定义了集合中文档（document）的格式。


~~~javascript
// 将 Schema 赋值给一个变量
const Schema = require('mongoose').Schema
// 创建 Schema(模式) 对象
const stuSchema = new Schema({
	address: String,
  name: String,
	age: Number,
  // 设置多个参数
	gender: {
		type: String,
    // 设置改属性默认值
		default: "female",
    // 该属性是否是必须的
	  required: true
	},
  xxx_id:{
    type: Number,
    // 为属性定义唯一标识
    unique: true
  }
  // 定义创建时间
  createTime: { type: Date, default: Date.now }
})
~~~

### 创建模型（Model）


Model 代表的是数据库中的集合，通过 Model 才能对数据库进行操作。

~~~js
// mongoose.model(modelName, schema):
// modelName 就是要映射的集合名, 会自动将集合名变成复数
var StuModel = mongoose.model('student', stuSchema)
~~~

## 插入文档（doc）

`Model.create(docs, [callback])`

- doc 可以是一个文档对象，也可以是一个文档对象的数组。
- callback 当操作完成以后调用的回调函数。

~~~js
// StuModel.create(doc, function(err){});
StuModel.create({
  name: '孙悟空',
  age: 70,
  gender: 'male',
  address: '花果山'
}, (err) => {
  if (!err)
    console.log('插入成功')

})
~~~

Mongoose 支持异步 `promise`：

~~~js
const result = await StuModel.create({
  name: '孙悟空',
  age: 70,
  gender: 'male',
  address: '花果山'
})
~~~

## 删除文档（remove）

- 删除多个文档：Model.remove(conditions, [callback])
- 删除单个文档：Model.deleteOne(conditions, [callback])
- 删除多个文档：Model.deleteMany(conditions, [callback])

~~~js
StuModel.remove({ name: '白骨精' })
~~~

## 修改文档（update）

`Model.update(conditions, mode, [options], [callback])`

- conditions：查询条件
- mode：更新表达式
- options：配置参数

~~~js
// 查询名称为孙悟空的文档，修改 age 为 20
StuModel.update({ name: '孙悟空' }, { $set: { age: 20 } })
~~~

`update` 默认情况只会修改一个，但可以修改为修改多个：

~~~js
StuModel.update({ name: '猪八戒' }, { $unset: { address: '哈哈哈' } }, { multi: true })
~~~


## 查询模型（find）

`Model.find(conditions, [projection], [options], [callback])`

- conditions：查询条件，基本和 MongoDB 一致
- projection：投影，需要获取到的字段

~~~js
const result = await StuModel.find({ name: '孙悟空' }, { _id: 0 })
~~~

projection 还支持纯字符串模式，`-_id` 则代表不显示 `_id`

~~~js
StuModel.find({ name: '孙悟空' }, 'name age -_id')
~~~

options 是查询选项：

- skip  跳过查询条目
- limit 查询数量

~~~js
StuModel.find({ name: '孙悟空' }, 'name age -_id', { skip: 3, limit: 3 })
~~~

根据文档 `_id` 来查询文档：

~~~js
StuModel.findById('5e51488eee942f08a4072305')
~~~

### 查询数量（count）

`Model.count(?conditions, [callback])`

- conditions：查询条件，可选项

~~~javascript
const count = await StuModel.count()
~~~

### 查询空值

~~~js
Model.find({
  // 该值为 '' | null | 该字段不存在
  $or: [
    { oneKey: '' },
    { oneKey: null },
    { oneKey: { $exists: false } }
  ]
})
~~~

### 关联查询

Mongoose中的填充查询（`populate`）类似关系型数据库中的“连接查询”，通过`populate()`函数，使你可以在一个文档中引用另一个集合中的文档，并将其填充到指定文档路径中。

https://itbilu.com/nodejs/npm/HkAKMTECm.html