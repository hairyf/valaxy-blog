---
title: Vue 源码之 JavaScript 技术
categories:
  - Notes
  - Client
  - vueCore
tags: 
  - vue
  - core
date: 2021-07-24 16:00:00
---

学习期间记录一些 Vue 源码使用的相关 JavaScript 技术。

<!-- more -->

## 伪数组转换真数组

~~~html
<li>test1</li> <li>test2</li> <li>test3</li>
<script>
const lis = document.querySelectorAll('li') // 这是一个伪数组 {0:li, 1:li....}
// ES5 转换为真数组	[0:li, 1:li....]
const lisAll = Array.prototype.slice.call(lis)
// ES6 转换为真数组	[0:li, 1:li....]
const lisAll2 = Array.from(lis)
</script>
~~~

## 判断节点

~~~js
const el = document.getElementById('test') // 获取元素节点
const attrNode = el.getAttributeNode('id') // 获取标签节点
const textNode = el.firstChild // 获取文本节点

// 判断节点类型
console.log(el.nodeType, attrNode.nodeType, textNode.nodeType)
// 元素节点返回 1 标签节点返回 2 文本节点返回 3
~~~

## 属性描述符

字面量定义：

~~~js
// 创建对象方法的 get 和 set 语句
const obj = {
  firstName: 'A',
  lastName: 'B',
  get fullName() { // 定义数据描述符
    return `${this.firstName}-${this.lastName}`
  },
  set fullName(val) {
    const names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}
~~~

后续添加：

**Object.defineProperty**：自定义描述符达到数据绑定与数据同步。

~~~js
const obj = { firstName: 'A', lastName: 'B' }
// 给obj添加一个 fullName 其绑定firstName和lastName的数据
Object.defineProperty(obj, 'fullName', {
  get() {
    // 定义数据描述符
    return `${this.firstName}-${this.lastName}`
  },
  set(value) {
    // 定义存取描述符
    const names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[1]
  }
})
~~~

- **obj**： 要在其上定义属性的对象。
- **prop**：要定义或修改的属性的名称。
- **descriptor**：将被定义或修改的属性描述符。

其他属性：

~~~js
Object.defineProperty(obj, 'fullName2', {
  // 是否可改变定义特性
  configurable: true,
  // 是否可枚举
  enumerable: true,
  // 初始值 可以是任何有效的javascript值
  value: 'fullName2222',
  // 是否可修改
  writable: false
})
~~~

## 获取属性名

~~~js
const ObjNames = Object.keys(obj)
// ObjNames-->['firstName', 'lastName', 'fullName']
~~~

## 判断对象属性

~~~js
// 语法：obj.hasOwnProperty(prop)
console.log(obj.hasOwnProperty('firstName'))
~~~

## 元素容器(documentFragment)

`documentFragment` 用于储存节点的容器，并且容器是在内存隔离的，不与外界发生关系。

用 `documentFragment` 一次性修改所有 `li`：

~~~html
<ul>
	<li>test1</li>
	<li>test2</li>
	<li>test3</li>
</ul>

<script>
const ul = document.querySelector('ul')

// 1. 创建fragment
const fragment = document.createDocumentFragment()

// 2. 取出ul中所有子节点取出保存到fragment
let child // 当appendChild操作时，会把child清空
while (child = ul.firstChild) { fragment.appendChild(child) }

// 3. 更新fragment中的所有li文本
// 这里也可以直接获取所有的元素节点，这样就不用过滤了
[].slice.call(fragment.childNodes).forEach((node) => {
  // 过滤不是元素节点的节点
  if (node.nodeType === 1)
    node.innerText = 'WWWW'
})

// 4. 将fragment插入ul
ul.appendChild(fragment)
</script>
~~~
