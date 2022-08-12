---
title: TypeScript 高级类型
date: 2021-04-05
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

当了解到 typescript 的基础类型外，在开发过程中，为了应对多变的复杂场景，我们需要了解一下 typescript 的高级类型。所谓高级类型，是 typescript 为了保证语言的灵活性，所使用的一下语言特性。这些特性有助于我们应对复杂多变的开发场景。

<!-- more -->

### Partial 代表接口属性可选

~~~ts
interface Person {
  name: string
  age?: number
}
type OptionalPerson = Partial<Person>
~~~

### Required 代表接口属性必有

~~~ts
interface Person {
  name: string
  age?: number
}
type RequiredPerson = Required<Person>
~~~

### Readonly 代表接口属性不可修改

~~~ts
interface Person {
  name: string
  age?: number
}
type ReadPerson = Readonly<Person>
~~~

### Extract 定义 value 值

~~~ts
interface Obj {
  name: string
}
const obj = {
  name: '毛先生'
}
function a(): Obj[Extract<keyof Obj, string>] {
  return obj[name]
}
~~~

### ReturnType 获取函数返回值

~~~ts
const getUserInfo = () => {}
type returnType = ReturnType<typeof getUserInfo>
~~~

### Parameters 获取函数参数

~~~ts
const fuc = () => (a: number, b: number) => {}
type FucParams = Parameters<typeof fuc>
~~~

### InstanceType 获取类返回值

~~~ts
class DrawPoster {/* ... */}
type DrawPosterType = InstanceType<typeof DrawPoster>
~~~

### NonNullable 监测内容不为空

~~~ts
NonNullable<T>
~~~

### Omit 剔除不需要的对象属性

~~~js
interface TState {
  name: string
  age: number
  like: string[]
}
interface TSingleState extends Omit<TState, 'name' | 'age'> {}
~~~

### Pick 保留需要的对象属性

~~~ts
interface TState {
  name: string
  age: number
  like: string[]
}
interface TSingleState extends Pick<TState, 'name' | 'age'> {}
~~~

### Exclude 排除可分配的类型

~~~ts
type Keys = 'Mr.Mao' | 'Sb.Long'
type Name = Exclude<key, 'Sb.Long'>
// Name > 'Mr.Mao'
~~~
