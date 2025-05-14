---
title: MongoDB 数据查询
date: 2020-05-01 16:00:00
categories:
  - Notes
  - Server
  - MongoDB
tags:
  - MongoDB
---

在关系型数据库中，可以实现基于表的各种各样的查询，以及通过投影来返回指定的列，相应的查询功能也可以在 MongoDB 中实现。同时由于 MongoDB 支持嵌套文档和数组，MongoDB 也可以实现基于嵌套文档和数组的查询。

<!-- more -->

MongoDB 中查询文档使用 `find()` 方法。`find()` 方法以非结构化的方式来显示所要查询的文档， 查询数据的语法格式如下：

```js
db.collection.find(query, projection)
```

## 投影（限制字段）

在查询时，可以在第二个参数的位置来设置查询结果的 投影，`1` 表示显示该属性，`_id` 默认会显示，把 `_id` 设成 `0` 就不会显示了，MongoDB 会根据具体使用的投影来映射返回内容：

- 当投影只出现 0 时，将不必要的字段隐藏
- 当投影只出现 1 时，只显示必要字段，但 _id 还会显示
- 当投影出现 0 1 时，隐藏必显示字段（_id）

~~~js
db.emp.find({}, { name: 1, _id: 0, sal: 1 })
~~~

## 排序

`sort()` 可以原来指定文档的排序的规则 `1` 表示为升序 `-1` 表示降序。

~~~js
db.emp.find({}).sort(
  { sal: 1 }, // sal 升序排序
  { empno: -1 } // sal 值一样时 empno 按照降序排序
)
~~~

## 数值

~~~js
// 查询工资小于 2000 的员工
db.emp.find({ sal: { $lt: 2000 } })
// 查询工资在 1000-2000 之间的员工
db.emp.find({ sal: { $gte: 1000, $lte: 2000 } })
// 查询工资小于 1000 或大于 2500 的员工
db.emp.find({
  $or: [
    { sal: { $lt: 1000 } },
    { sal: { $gt: 2000 } }
  ]
})
~~~

## 限制长度（翻页）

- `skip()`  可以指定跳过多少条数据
- `limit()` 可以限定查询数据长度

~~~js
// 查看numbers集合中的前10条数据
db.numbers.find().limit(10)

// 查看 numbers 集合中的第 11 条到 20 条数据
db.numbers.find().skip(10).limit(10)
// 查看 numbers 集合中的第 21 条到 30 条数据
db.numbers.find().skip(20).limit(10)
~~~

实现翻页：

```js
/* skip((页码-1) * 每页显示的条数).limit(每页的条数) */
const page = 1
const size = 10
dp.numbers.find().skip((page - 1) * size).limit(size)
```

## 一对多

~~~js
const arr = []
for (let i = 0; i < 50; i++) arr.push({ username: `swk${i}` })
// 查找swk6的订单
db.users.insert(arr)
db.order.insert({
  list: ['苹果', '香蕉', '大鸭梨'],
  user_name: 'swk6'
})
// 获取 swk6 的用户名
const user_name = db.users.findOne({ username: 'swk6' }).username
// 查找用户名对应的订单
db.order.find({ user_name })
~~~

## 跨集合

~~~js
// 查询财务部的所有员工
db.dept.find()
// 获取财务部编号
const deptno = db.dept.findOne({ dname: '财务部' }).deptno
// 查询员工表编号为财务部的员工
db.emp.find({ depno: deptno })
~~~

## 聚合

`db.collection.aggregate([{ $group: { _id: null, $聚合函数: '$字段名' } }])`

~~~js
db.products.aggregate([{
  $group: { _id: null, alias: { $max: '$index' } }
}])
~~~

- `$sum` 分组求和
- `$avg` 分组平均值
- `$min` 分组最小值
- `$max` 分组最大值
- `$first` 分组第一条记录
- `$last`  分组最后一条记录
