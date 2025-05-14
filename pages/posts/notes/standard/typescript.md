---
title: TypeScript 编写规范
date: 2022-03-05
categories:
  - Notes
  - Standard
tags:
  - TypeScript
---

自以为是的 TypeScript 标准。

### 类型定义

- 类型丢失率减少至百分之35%以下，减少使用any定义类型。
- 尽量使用 TypeScript 的类型推测，减少多余类型的定义，除非是复合类型。

~~~typescript
// 正确
const count = 123
const count:number|string = 123
methods: {
	onClick(){/*...*/},
	onMove(){/*...*/},
}
// 不正确
const count:number = 123
methods: {
	onClick():any{/*...*/},
	onMove():any{/*...*/},
}
~~~

<!-- more -->

### 第三方库

- 优先使用第三方库提供的类型，尽量不要覆盖第三方库类型。

~~~js
import dayjs from 'dayjs'
// 正确
const date = dayjs()
// 不正确
const date: any = dayjs()
~~~

### 全局类型

全局数据类型，使用 declare 关键字定义在 `.d.ts` 中复用。

~~~typescript
// src/types/custom.d.ts
/** 全局接口: 用户数据 */
declare interface UserInfo {
  // ....
}
~~~

### 请求参数

请求参数，类型定义是必须的。

~~~ts
// 错误
function getUserInfo(data: any) {
  return http.post('/login', data)
}
// 正确
function getUserInfo(phone: number, code: number) {
  return http.post('/login', { phone, code })
}

// 错误
function getUserInfo(params: any) {
  return http.get('/list', { params })
}
// 正确
// src/types/custom.d.ts
interface ListOpts {
  page: number
  limit: number
}
// api/index.ts
function getList(params: ListOpts) {
  return http.get('/list', { params })
}
~~~

### 响应参数

当响应参数过于杂乱，可不进行定义类型。

~~~typescript
// 正确
function getUserInfo() {
  return http.post<UserInfo>('/login')
}
// 正确
function getDetails() {
  return http.post('/details')
}
~~~
