---
title: MongoDB 查询操作符
date: 2020-05-02 15:00:00
categories:
  - Notes
  - Server
  - MongoDB
tags: 
  - MongoDB
---

默认情况下 update 会使用新文档覆盖旧文档 如果不想覆盖而是仅仅想更新其中的某些字段 那么我们就需要使用 update 的更新操作符。

<!-- more -->

| 操作符           | 描述                                 |
| ---------------- | ------------------------------------ |
| **$currentDate** | 将属性的值设置为当前日期             |
| **$inc**         | 将指定属性的值加上指定的值           |
| **$min**         | 更新文档中某个字段值小于特点值的字段 |
| **$max**         | 更新文档中某个字段值大于特点值的字段 |
| **$set**         | 将字段的值替换为指定的值             |
| **$unset**       | 删除表中特定的字段                   |
| **$rename**      | 更新某一字段的名字                   |

## $currentDate

可以是 `Date` 或 `timestamp`，默认类型是 `Date`。如果设置的字段不存在，`$currentDate` 会在文档中添加该字段。格式如：`{$currentDate:{字段名:时间类型,...}}`。

- 布尔值 `true` 表示将字段值设置为当前日期作为 `Date`
- `{$type:"timestamp"}`或`{$type:"date"}`，它明确指定了类型。操作符区分大小写，仅接受小写的`"timestamp"`或者小写的 `"date"` 。

例如，将下面 `products` 表中 `_id` 字段为 `1` 的文档中的 `lastModified` 字段更新成当前的日期。

~~~js
db.products.update(
  { _id: 1 }, { $currentDate: { lastModified: true } }
)
~~~

## $inc

格式如下：`{$inc:{字段1:数量1,...}}`。数量既可以是正数，也可以是负数。如果要增加的字段不存在，那么`$inc`会生成一个字段，并且将该值设置为特定的值。但是如果你上传了一个空值，那么就会出现错误。对于单个文档，`$inc`是原子操作。

例如，将 `products` 表中 `_id` 字段为 `1` 的文档中的 `num` 字段值增加 `10`，脚本如下：

~~~js
db.products.update(
  { _id: 1 }, { $inc: { num: 10 } }
)
~~~

## $min

格式如下：`{$min:{字段1:值1,...}}`。如果字段不存在，`$min` 操作符会设置字段为特定的值。
例如，判断 `products` 表中 `_id` 字段为 `1` 的文档中的 `num` 字段值，如果大于 `10`，那么值会变为 `10`，如果小于 `10`，则不会有变化。

~~~js
db.products.update(
  { _id: 1 }, { $min: { num: 10 } }
)
~~~

## $max

`$max` 操作符和 `$min` 正好相反，它会更新文档中某个字段值大于特定值的字段。用法和 `$min` 相同。


## $set

它具有以下形式：`{$set:{字段1:值1,...}}`。如果字段不存在，`$set` 将会创建新字段(前提是该字段不能和类型限制相冲突)，将指定的值赋上。如果指定多个字段-值对，`$set`将更新或创建每个字段。

例如，将 `products` 表中 `_id` 字段为 `1` 的文档中的 `quantity` 字段值变为 `500`，将字段 `details` 字段中的 `model` 字段值变为 `14Q3`，`tag` 字段的值也同时更新。

~~~js
db.products.update(
  { _id: 1 },
  {
    $set: {
      quantity: 500,
      details: { model: '14Q3', make: 'xyz' },
      tags: ['coats', 'outerwear', 'clothing']
    }
  }
)
~~~

## $unset

语法如下：`{$unset:{字段1:"",...}}`，如果要删除的字段不存在，那么`$unset`不会做任何操作。

例如：使用`$unset`操作符来移除`products`表中，`_id`字段值为`1`的文档中的`quantity`字段。

~~~js
db.products.update(
  { _id: 1 },
  { $unset: { quantity: '' } }
)
~~~

## $rename

语法如下：`{$rename:{字段名1:新的字段名1,...}}`。新的字段名必须和现有的字段名不相同，如果文档中不存在要重命名的字段，那么 `$rename` 将不会做任何操作。其逻辑是在就的字段名上执行`$unset`操作，然后使用新的名称执行 `$set` 操作。

例如：使用 `$rename` 重命名 `products` 表中 `_id` 字段值为 `1` 的文档中的 `username` 字段名为 `userName`。

~~~js
db.products.update(
  { _id: 1 },
  { $rename: { username: 'userName' } }
)
~~~
