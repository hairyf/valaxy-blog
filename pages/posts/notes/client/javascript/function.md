---
title: JavaScript 类型原型与方法
categories:
  - Notes
  - Client
  - JavaScript
tags:
  - JavaScript
date: 2018-07-31
---

JavaScript 每个类型类提供了大量可用方法，在程序开发中是必须掌握的技巧。

<!-- more -->

## 数值原型与方法

- `Number.isInteger`

判断是否是整数

~~~js
console.log(Number.isInteger(60.30))
console.log(Number.isInteger(60.0))
~~~

## 数组原型与方法

~~~js
// ? 查找一个值在不在数组里,若是存在则返回true,不存在返回false
Array.prototype.includes()
// ? 向数组末尾添加一个或多个元素，并返回数组的新的长度
Array.prototype.push()
// ? 删除数组最后一个元素，并将被删除的元素作为返回值返回
Array.prototype.pop()
// ? 开头添加一个或更多元素，并返回新的长度。
Array.prototype.unshift()
// ? 删除并返回数组的第一个元素
Array.prototype.shift()

// ! 截取返回指定长度的数组(不会改变原数组)
Array.prototype.slice(start, [,End])
// ! 方法向/从数组中添加/删除项目(改变原数组)，然后返回被删除的项目。
// ! 第一个参数是项的索引, 第二个参数是删除的个数(0表示不删), 第三个参数是插入的元素(可不选)
Array.prototype.splice(index, howmany, item1, /* ... */)
// ! 将数组反转
;['1', '2', '3'].reverse() // '3', '2', '1'

// ? 从前面搜索数组中的元素，并返回它所在的位置。
Array.prototype.indexOf('xxx')
// ? 从后面搜索数组中的元素，并返回它所在的位置。
Array.prototype.lastIndexOf('xxx')
// ? 遍历所有元素的值和下标
Array.prototype.forEach((item, index) => {})
// ? 遍历所有元素的值和下标，并返回处理后的数组。
Array.prototype.map((item, index) => { return item })
// ! 遍历所有元素的值和下标, 返回符合规则的元素组成的数组
Array.prototype.filter((item, index) => { return Boolen })
// ! 遍历所有元素的值和下标, 返回符合规则的一个数组元素。
Array.prototype.find()
// ! 遍历所有元素的值和下标, 返回符合规则的元素的下标
Array.prototype.findIndex()
// ! 将数组合并为一个任意值, 函数传参为 (total 计算后的值, item 当前数组元素), 第二个参数为初始值, 返回累加的值
Array.prototype.reduce((total, item) => total + item, 1)
// ! 数据进行排序, a->b为从小到大, b->a为从大到小(该方法对字母, 单词也有效)
// 默认不传参数则为字典排序 a->b
Array.prototype.sort((a, b) => a - b)
// ! 将数组进行字符串拼接参数可传拼接的字符串
Array.prototype.join('')

// ! 连接两个或更多的数组，并返回结果。
Array.prototype.concat()
// ?* 返回数组的可迭代对象。
Array.prototype.entries()

// 判断数组中是否包含指定value
Array.prototype.includes(value)
// 判断value是否是数组
Array.isArray(value)

// 返回当前数组项中是否通过函数, 通过则返回true, 不然则false
Array.prototype.some(item => item)
~~~

## 字符原型与方法

~~~js
// 删除字符串两端的空白符
String.prototype.trim()
// 将字符串以','分隔为数组, 可接收正则
String.prototype.split(',')
// 从前面搜索字符串中的每个值，并返回它所在的位置。
String.prototype.indexOf('str')
// 从后面搜索字符串中的每个值，并返回它所在的位置。
String.prototype.lastIndexOf('str')
// 搜索指定字符串 返回匹配的位置
String.prototype.search('str')

// ? 替换字符串, a为替换的RegExp格式, b是替换的字符串
String.prototype.replace(a, b)
// ? 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
String.prototype.slice(a, [,b])
// ? 截取并返回字符串, 范围是从下标为a的字符开始，截取长度为b, 如果省略第二个参数 将裁剪a开始的剩余部分。
String.prototype.substring(a, [,b])

// 把字符串转换为大写
String.prototype.toUpperCase()
// 把字符串转换为小写
String.prototype.toLowerCase()
// 获取字符串的长度
String.prototype.length
// 连接两个或多个字符串
String.prototype.concat()
// 判断是否有对应字符
String.prototype.match('www')
// 获取字符串第*位字符串值(字符串数组查询操作)
String.prototype.charAt(0)

// 判断是否包含指定的字符串
String.prototype.includes('str')
// 判断是否以指定字符串开头
String.prototype.startsWith('str')
// 判断是否以指定字符串结尾
String.prototype.endsWith('str')
// 重复指定次数字符串并返回
String.prototype.repeat(3)
~~~

## 对象原型与方法

~~~js
const obj1 = { name: 66, age: 77 }
const obj2 = { name: 66, age: 77 }
const fakeArr = { 0: 66, 1: 77, length: 2 }
// 将对象的key转换为数组
Object.keys(obj1) // ['name','age']
// 将对象的val转换为数组
Object.values(obj1) // [66, 77]
// 合并返回新对象
Object.assign(obj1, obj2)

// 直接操作 __proto__ 隐式原型属性
const obj3 = {}
const obj4 = { qian: 5000000000 }
obj3.__proto__ = obj4
console.log(obj3.qian)

// ES5 转换为真数组 [0:li, 1:li....]
const lisAll = Array.prototype.slice.call(fakeArr)
// ES6 转换为真数组 [0:li, 1:li....]
const lisAll2 = Array.from(fakeArr)
~~~
