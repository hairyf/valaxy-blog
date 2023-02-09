---
title: JavaScript 编写规范
date: 2022-03-02
categories:
  - Standard
tags: 
  - Client
---

自以为是的 JavaScript 标准。

## 变量/函数命名

- 数据对应命名描述（命名统一）

~~~ts
// 列表类型命名(商品列表, 购物车列表, 表格列表等)
const goodList = [] // 对应子项 -> goodItem
const cartList = [] // 对应子项 -> cartItem
const tableList = [] // 对应子项 -> tableItem
// 详情类型命名(店铺详情, 商品详情, 订单详情等)
const shopDetail = {}
const goodDetail = {}
const orderDetail = {}
// 信息类型命名(用户信息, 页面信息, 财务信息等)
const userInfo = {}
const pageInfo = {}
const financeInfo = {}
// 描述类型命名(当前项, 当前索引, 当前类型等)
const currentItem = {}
const currentIndex = {}
const currentType = {}
// 配置类型命名(图像配置, 用户配置等)
const ghlOption = {}
const userOption = {}
// 元素类型命名(DOM节点, Ref节点)
const htmlRef = document.querySelector('html')
const bodyRef = ref<HTMLBodyElement>()
~~~

<!-- more -->

- 变量命名方法为小驼峰命名法，前缀应为名词（userInfo，shopList，naviList.....）

~~~js
// 错误
const user_info = {/* ... */}
const ShopList = {/* ... */}
const naViList = {/* ... */}
// 正确
const userInfo = {/* ... */}
const shopList = {/* ... */}
const navList = {/* ... */}
~~~

- 函数命名方法为小驼峰命名法，前缀应为动词（getUserInfo，setShopList，initNavList.....）

~~~js
// 错误
const GetUserInfo = () => { /* ... */ }
const set_shopList = () => { /* ... */ }
const initnavilist = () => { /* ... */ }
// 正确
const getUserInfo = () => { /* ... */ }
const setShopList = () => { /* ... */ }
const initNavList = () => { /* ... */ }
~~~

- 常量（不会再次进行修改）命名则采用大写加下划线命名（RECEIVE_USER_INFO）

~~~js
const RECEIVE_USER_INFO = 'receive_user_info'
~~~

## 变量引用

- 对所有引用都使用 const，不要使用 var
~~~js
// 错误
var a = 1
var b = 2

// 正确
const a = 1
const b = 2
~~~
- 如果引用是可变动的，则使用 let
~~~js
// 错误
var count = 1
if (count < 10)
  count += 1

// 正确
let count = 1
if (count < 10)
  count += 1

~~~

## 模块化开发

采用模块化进行开发，使用标准的 ES6 模块语法 import 和 export

~~~ts
// 错误
// ...
import { paramsAnaly } from '@/utils'
const util = require('./util')
module.exports = util

// 正确
export const paramsAnaly = (url: string) => { /* ... */ }
~~~

## Promise
使用async/await代替.then
~~~js
// 错误
const makeRequest = () => {
  return promise1()
    .then((value1) => {
      return promise2(value1)
        .then((value2) => {
          return promise3(value1, value2)
        })
    })
}

// 正确
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
~~~

## if ... else
尽量减少代码嵌套
~~~javascript
// 错误
() => {
  if (isLogin) {
    if (isDelete) {
      // 代码....
    }
  }
}

// 正确
() => {
  if (!isLogin)
    return

  if (!isDelete) {

  }
  // 代码...
}
~~~
