---
title: TypeScript 接口(Interface)
date: 2020-11-01
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

<!-- more -->

接口定义如下：

```ts
interface interface_name {
}
```

## 函数参数

~~~js
// TS 函数中对对象传参中的约束
function printLabel(labelInfo: { label: string }): void {
  console.log('')
}
printLabel({ label: 'hahaha' }) // 必须传入对象, 对象中存在label参数, 并且是字符串
~~~

利用接口定义对象参数的约束规范：

~~~ts
// 利用接口定义对象参数的约束规范
interface FullName {
  firstName: string // 定义必须接口
  secondName: string // 定义必须接口
  age?: number // 定义可选接口
}
function printName(name: FullName) {
  console.log(`${name.firstName}---${name.secondName}`)
}
function printInfo(name: FullName) {
  console.log(`${name.firstName}---${name.secondName}`)
}
printInfo({
  firstName: '张',
  secondName: '三'
})
printName({
  age: 20,
  firstName: '张',
  secondName: '三'
})
~~~

## 函数接口

对方法传入的参数以及返回值进行批量约束

~~~ts
interface Encyst {
  (key: string, value: string): string
}
const md5: Encyst = function (key, value): string {
  return `${key} ${value}` // 模拟加密操作
}
console.log(md5('李', '二狗'))
const sha1: Encyst = function (key, value): string {
  return `${key}--${value}`
}
console.log(sha1('dog', 'zi'))
~~~

## 索引类型

~~~ts
// 可索引接口对数组的约束
interface UserArr {
  [index: number]: string // 定义索引值必须得是number, 元素值必须得是string
}
const arr: UserArr = ['123213213213', '12312321321']
// 可索引接口对对象的约束
interface UserObj {
  [index: string]: string // 定义索引值必须得是number, 元素值必须得是string
}
const obj: UserObj = { key: 'value', name: 123 } // 报错
~~~

## 类接口

~~~typescript
// 类类型接口, 与抽象类类似, 但抽象类不可以规范属性, 类接口可以
interface Animal_ {
    myName: string;
    eat(str:number): any;
}
class Dow implements Animal_ {
    myName:string
    constructor(myName:string) {
        this.myName = myName
    }
    eat(str:number) { }
}
~~~

## 继承

~~~ts
interface Animal_gf {
  eat(): void
}
interface Person extends Animal_gf {
  work(): void
}
class Web implements Person {
  eat() {}
  work() {}
}
class Prog extends Web implements Person {

}
~~~

## 类型寻址

~~~ts
interface Person {
  addr: {
    city: string
    street: string
    num: number
  }
}
const Addr: Person['addr'] = {
  city: 'city',
  street: 'street',
  num: 0
}
~~~