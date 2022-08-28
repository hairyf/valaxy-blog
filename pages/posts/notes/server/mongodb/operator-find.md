---
title: MongoDB 查询操作符
date: 2020-05-02 14:00:00
categories:
  - Notes
  - Server
  - MongoDB
tags: 
  - MongoDB
---

查询操作符(Query Operators)可以让我们写出复杂查询条件，让我们使用的过程更加灵活。

<!-- more -->

## 比较操作符

~~~js
// $eq: 匹配等于指定的值, 相当于 ==30
db.t_01.find({ name: { $eq: 'david' } })
// $gt: 匹配大于指定的值, 相当于 >30
db.t_01.find({ age: { $gt: 30 } })
// $gte: 匹配大于或等于指定的值, 相当于 >=30
db.t_01.find({ age: { $gte: 30 } })
// $in: 匹配数组中的任意一个值, 相当于 40<= >=30
db.t_01.find({ age: { $in: [30, 40] } })
// $lt: 匹配小于指定的值, 相当于 <30
db.t_01.find({ age: { $lt: 30 } })
// $lte: 匹配小于等于指定的值, 相当于 <=30
db.t_01.find({ age: { $lte: 30 } })
// $ne: 匹配不等于指定值的所有值, 相当于 !==30
db.t_01.find({ age: { $ne: 30 } })
// $nin: 匹配不在数组中出现的值, 相当于 >30 <40
db.t_01.find({ age: { $nin: [30, 40] } })
~~~

## 逻辑操作符

| 操作符   | 描述                                                       | 举例                                                         |
| -------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| **$and** | 逻辑和操作需要同时满足具有两个或多个表达式的数组中的条件。 | `db.t_01.find({ $and: [{ age: { $gte: 28 } }, { deparment: { $eq: 'sale_01' } }] })` |
| **$not** | 逻辑否操作返回与查询表达式不匹配的文档                     | `db.t_01.find({ age: { $not: { $gt: 30 } } })` |
| **$nor** | 逻辑非或操作，返回同时不能匹配数组中表达式的文档           | `db.t_01.find({ $nor: [{ age: 30 }, { name: 'david' }] })` |
| **$or**  | 逻辑或操作，返回符合任一条件的所有文档                     | `db.t_01.find({ $or: [{ deparm: 30 }, { deparm: 40 }] })` |

~~~js
// $and: 逻辑和, 相当于 age >= 28 && deparment == sale_01
db.t_01.find({
  $and: [
    { age: { $gte: 28 } },
    { deparment: { $eq: 'sale_01' } }
  ]
})
// $not: 逻辑否, 相当于 !(age > 30)
db.t_01.find({
  age: { $not: { $gt: 30 } }
})
// $nor: 逻辑非或操作, 相当于 !(age==30) && !(name="devid")
db.t_01.find({
  $nor: [{ age: 30 }, { name: 'david' }]
})
// $or: 逻辑或操作, 相当于 age==30 || name="devid"
db.t_01.find({
  $or: [{ age: 30 }, { name: 'david' }]
})
~~~

## 元素操作符

| 操作符      | 描述                           |
| ----------- | ------------------------------ |
| **$exists** | 匹配具有指定字段的文档         |
| **$type**   | 如果字段为指定类型，则返回文档 |

~~~js
// 匹配具有指定字段的文档
db.t_01.find({ name: { $exists: true, $in: ['david', 'grut'] } })
// 如果字段为指定类型，则返回文档
db.t_01.find({ name: { $type: 'string' } })
~~~

## 数组操作符

| 操作符         | 描述                                                   |
| -------------- | ------------------------------------------------------ |
| **$all**       | 匹配包含查询中指定的所有元素的数组                     |
| **$elemMatch** | 返回数组字段中至少有一个元素与所有指定的元素匹配的文档 |
| **$size**      | 返回具有与指定大小一样的数组字段的文档                 |

```js
// $all: 查询 t_01 集合的 name 字段同时包含 deng、groot、lily 的文档
db.t_01.find({ name: { $all: ['deng', 'groot', 'lily'] } })

// $elemMatch: 查询 students 集合中的 scores 数组字段中，至少有一个大于或等于 80 且小于 90 的元素的文档
db.students.find({ scores: { $elemMatch: { $gte: 80, $lt: 90 } } })

// $size: 查询 students 集合中 scores 数组字段中具有 2 个元素的文档
db.students.find({ scores: { $size: 2 } })
```

##  诊断操作符

| 操作符          | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| **$expr**       | 允许在查询语句中使用聚合表达式，`$expr` 可以构建查询表达式，在匹配时，比较同一文档中的字段。 |
| **$jsonSchema** | `$jsonSchema` 可以被用于文档验证器，用于集合模式验证。       |
| **$mod**        | 对字段的值执行除以指定值取余数运算。                         |
| **$regex**      | 选择与指定正则表达式匹配的文档。                             |
| **$text**       | $text是对具有文本索引的字段执行文本搜索。                    |
| **$where**      | 匹配满足 JavaScript 表达式的文档，使用 `$where` 操作符将包含 JavaScript 表达式的字符串或完整的 JavaScript 函数传递给查询系统。 |

```js
// $expr: 两个字段比较，返回 sal 比 age 大的文档
db.t_01.find({ $expr: { $gt: ['age', 'sal'] } })

// $jsonSchema: 定义一个 users 集合模式验证
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'sex'],
      properties: {
        name: { bsonType: 'string', description: 'must be a string and is required' },
        age: { bsonType: 'int', description: 'must be a integer and is not required' },
        sex: {
          enum: ['male', 'female'],
          description: 'can only be one of the enum values and is required'
        }
      }
    }
  }
})

// $mod: 返回 age 字段值被3整除的文档
db.t_01.find({ age: { $mod: [3, 0] } })

// $regex: 查询 name 结尾是tor三个字符的文档
db.t_01.find({ name: { $regex: /tor$/ } })

// $text: 在t_01集合的 name 上创建text索引
db.t_01.createIndex({ name: 'text' })

// $text: 使用全本搜索
db.t_01.find({ $text: { $search: 'david' } })

// $where: 查询 name 字段为 david 的文档
db.t_01.find({ $where() { return (this.name === 'david') } })
```

## 按位操作符

| 操作符            | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| **$bitsAllClear** | 匹配数字或二进制值，其中查询给出的所有位位置在字段中是明确的（即0）。 |
| **$bitsAllSet**   | 匹配数字或二进制值，其中查询给出的所有位位置在字段中是明确的（即1）。 |
| **$bitsAnyClear** | 匹配数字或二进制值，返回其中一组位位置中的任何位具有0的文档  |
| **$bitsAnySet**   | 匹配数字或二进制值，返回其中一组位位置中的任何位具有1的文档  |

```js
// $bitsAllClear: 查询字段 age 是否在位置 1 和位置 5 有位清除
db.t_01.find({ age: { $bitsAllClear: [1, 5] } })

// $bitsAllSet: 查询字段 age 是否具有在位置 1 和位置 5 设置的位 1
db.t_01.find({ age: { $bitsAllSet: [1, 5] } })

// $bitsAnyClear: 查询字段 age 在位置 1 或位置 5 具有位清除的文档
db.t_01.find({ age: { $bitsAnyClear: [1, 5] } })

// $bitsAnySet: 查询字段 age 在位置 1 或位置 5 为 1 的文档。
db.t_01.find({ age: { $bitsAnySet: [1, 5] } })
```