---
title: TypeScript 扩展语法
date: 2020-11-01
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

TypeScript 提供了很多另类的语法与字段，可以用于定义和声明类型。

<!-- more -->


## 声明对象中某个属性

~~~ts
const obj = {
  age: <string | number>60, // 不推荐
  age: 60 as string | number
}
obj.age = '60'
~~~

## type 定义类型

~~~ts
// type 关键字可定义类型, 泛型, 等各种类型
type t1 = string
const str: t1 = '666'
~~~

## keyof 定义键值

~~~ts
// 用于定义指定字符串
type k1 = keyof {
  小明: string
  小红: string
  小芳: string
}
const str: k1 = '小白' // 报错

// 用于定义指定数组
type k2 = keyof {
  小明: string
  小红: string
  小芳: string
}
const arr: [k2] = ['小明']
// 继承某个泛型对象的属性
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
const arr: Array<k2> = ['小明']
~~~

## & 合并类型

~~~ts
const a = { name: '', phone: '' } as { name: string } & { phone: string }
a.name
a.phone
~~~

## typeof 转换类型

~~~ts
const state = {
  a: 123,
  b: 123
}
interface Store {
  state: typeof state
}
~~~

## 定义泛型中的 key 值

~~~ts
type Computed<S> = {
  [P in keyof S]: () => S[P];
}
~~~

## 三元判断

~~~ts
type A<T> = T extends null | undefined ? never : T
~~~

## 后缀 ! 代表值必有

~~~ts
dec(value!)
~~~

## 判断类型的返回值

~~~ts
const isRef = (v): v is Ref<any> => { /**/ }
const isString = (v): v is string => { /**/ }
~~~
