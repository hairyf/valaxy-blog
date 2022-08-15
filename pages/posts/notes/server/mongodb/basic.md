---
title: MongoDB 基本应用
date: 2020-05-01 15:00:00
categories:
  - Server
  - MongoDB
tags: 
  - MongoDB
---

MongoDB 用 C++ 高效地实现了底层的数据读写等功能，对外提供的操作 API 规则|调用方式，使用了 JavaScript 来实现，客户端中使用的命令与 JavaScript 极度相似。

## 与关系型数据库对比

| 关系型数据库概念 | MongoDB概念          | 说明                                |
| ---------------- | -------------------- | ----------------------------------- |
| Database         | Database             | 数据库                              |
| Table            | Collection           | 数据库表\|集合                      |
| Row              | Document             | 数据记录行 \| 文档                  |
| Column           | Field                | 数据列 \| 数据字段                  |
| Index            | Index                | 索引                                |
| Table joins      | MongoDB 不支持表关联 | 表关联                              |
| Primary Key      | Object ID            | 主键，MongoDB 自动将 _id 设置为主键 |

## 数据类型

MongoDB 中的数据类型基本与 JavaScript 相同，例如：字符串型(String)、逻辑型(Boolean)、空值(Null)、符号（Symbol）、日期（Date）、正则（Regular）、数组（Array）、对象（Object）。

除此之外，MongoDB 还提供了一部分内置类型：

| 数据类型     | 说明      | 解释                                                         | 举例                   |
| ------------ | --------- | ------------------------------------------------------------ | ---------------------- |
| Integer      | 整数      | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64位。 | `{ x: 1 }`             |
| Double       | 浮点数    | 双精度浮点值。                                               | `{ x: 3.14 }`          |
| ObjectID     | 对象 ID   | 对象 ID。用于创建文档的 ID。                                 | `{ id: ObjectId() }`   |
| Timestamp    | 时间戳    | 从标准纪元开始的毫秒数                                       | `{ t: 1528183743111 }` |
| Binary Data  | 二进制    | 用于存储二进制数据。                                         |                        |
| Min/Max keys | 最小/大值 | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比   |                        |

## 插入文档

向 `test` 数据库中的，`stus` 集合中插入一个新的学生对象：

~~~js
// 添加一个（insert）
db.stus.insert({ name: '孙悟空', age: 18, gender: '男' })
// 添加多个（insert）
db.stus.insert([
  { name: '猪八戒', age: 60, gender: '男' },
  { name: '沙和尚', age: 65, gender: '男' },
  { name: 'ba', age: 60, gender: '男' }
])
// 添加一个（insertOne）
db.stus.insertOne(doc)
// 方法添加多个（insertMany）
db.stus.insertMany([doc])
~~~

> 当我们向集合中插入文档时,如果没给文档指定 `_id` 属性,则数据库会自动为文档添加 `_id` 属性，该属性原来作为文档的唯一标识当设置了 `_id` 则不会主动生成。

`db.stus.insert({ _id:"hello", name: "猪八戒", age:28 });`


### 优化添加大数据

mongo 内置方法优化差，尽量包装好数据在添加进集合中。

~~~js
// 向 numbers 中插入 20000 条数据
for (let i = 0; i < 20000; i++) { 	// 15.2s
  db.numbers.insert({ num: i })
}
const arr = []
for (let i = 0; i < 20000; i++) { // 0.3s
  arr.push({ num: i })
}
db.numbers.insert(arr)
~~~

## 查询文档

根据指定条件从集合中查询所有符合条件的文档，返回的是一个数组或对象。

~~~javascript
// 根据指定条件从集合中查询所有符合条件的文档，返回的是一个数组
db.<collection>.find() 												    // 查询所有文档
db.<collection>.find({name:'孙悟空'}) 						// 查询name为孙悟空的文档
db.<collection>.find({_id:'hello',name:'孙悟空'}) // 查询_id为hello,name为孙悟空的文档
// 查询第一个符合条件的文档，返回的是一个对象。
db.collection.findOne()
// 查询符合条件的文档的数量
db.collection.find().count()
~~~

## 修改文档

~~~js
// 修改、替换集合中的一个或多个文档:
// update 默认情况会使用新对象替换旧的对象
db.collection.update(查询条件, 新对象)
db.collection.update({ name: '沙和尚' }, { age: 28 })

// $set 可以原来修改文档中的指定属性
// 替换 name 值为沙和尚的文档的 age 值为猪八戒
db.collection.update({ name: '沙和尚' }, { $set: { age: 70, address: '流沙河' } })
// $unset操作符可以删除文档中的指定属性
db.collection.update({ name: '沙和尚' }, { $unset: { address: '' } })
// update默认情况只会修改一个,但可以修改为修改多个
db.collection.update({ name: '猪八戒' }, { $unset: { address: '哈哈哈' } }, { multi: true })

// 修改集合中的一个文档
db.collection.updateOne()
// 修改集合中的多个文档
db.collection.updateMany()
// 替换集合中的一个文档
db.collection.replaceOne()
// 替换集合中的多个文档
db.collection.replaceOne()
~~~

### 条件修改

为所有薪资低于 1000 的员工增加工资 400 元， `$inc` 增加数值：

~~~js
db.emp.updateMany(
  { sal: { $lte: 1000 } },
  { $inc: { sal: 400 } }
)
~~~

## 删除数据

~~~js
// 删除集合中的一个或多个文档（默认删除多个）
// 删除 _id 为 hello 的所有文档
db.collection.remove({ _id: 'hello' })
// 删除 _id 为 hello 的一个文档
db.collection.remove({ _id: 'hello' }, true)

// 删除集合中的一个文档
db.collection.deleteOne()
// 删除集合中的多个文档
db.collection.deleteMany()

// 清空一个集合(性能略差)
db.collection.remove({})
// 删除一个集合
db.collection.drop()
// 删除一个数据库
db.dropDatabase()
~~~

### 假删除

一般数据库中的数据都不会删除的，所以删除的方法很少调用，一半会在数据中添加有够字段，来标识数据是否被删除。

~~~js
db.stus.insert([{ name: 'zbj', isDel: 0 }, { name: 'swk', isDel: 0 }])
// 假删除
db.stus.updateOne({ name: 'zbj' }, { $set: { isDel: 1 } })
// 搜索 del 值为 0 (没有删除的)
db.stus.find({ isDel: 0 })
~~~