---
title: TypeScript 数据类型
date: 2020-11-01
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

javascript 中有 7 种数据类型，分别是：boolean，number，string，null，undefined和object，以及在 ES6 中新增的一种类型 symbol。而typescript又在此基础上增加了一些类型。

<!-- more -->

## 元组(tuple)

tuple元组就是一个规定了元素数量和每个元素类型的数组，而每个元素的类型, 可以不相同

~~~typescript
const tup1: [string, number, boolean] = ['讨厌', 18, true]
console.log(tup1[0])
console.log(tup1.length)
~~~

## 枚举(enum)

~~~typescript
enum GunType_1 {
  M416 = 1,
  AK47 = 2,
  Goza = 3
}
// 枚举值不指定默认赋值枚举值
enum GunType_2 {
  M416, // --> 1
  AK47, // --> 2
  Goza // --> 3
}
~~~

**使用场景：判断性别类型男, 女, 未知**

~~~typescript
enum Gender {
    Boy, // 男孩 --> 1
    Girl, // 女孩 --> 2
    Unknow // 未知 --> 3
}
// 创建用户性别变量
// let usrSex: Gender = Gender.Boy
let usrSex = Gender.Boy
// 判断变量中的性别是否为 Boy
if(usrSex == Gender.Boy){
    console.log(usrSex) // 1
}else {
    console.log(usrSex) // 2 or 3
}
~~~

[^注意]:枚举项 一般用英文和数字, 而枚举值 用整型数字

## 任意类型(any)

any 代表任意类型, 一般在获取dom时使用

~~~typescript
// 在接收用户输入 或 第三方代码库时, 还不能确定会返回什么类型的指, 此时也可以使用any类型
const txtName: any = document.getElementById('txtN')
~~~

## 无类型(void)

因为TS 函数中必须指定返回值，但有些函数是不需要返回值的，所以无返回值的函数中使用void代表无返回值的函数。

~~~typescript
// TS 函数中必须指定返回值
function say_hi1(): string { return 'hi, 你好呀~' }
const say_hi2 = (): string => 'hi, 你好呀~'
const re1 = say_hi1()
const re2 = say_hi2()
// TS 函数中不需要返回值时需指定void
function say_hi3(): void { console.log('hi啥, 讨厌, 死鬼~~~~') }
const say_hi4 = (): void => console.log('hi啥, 讨厌, 死鬼~~~~')
~~~

## 不存在值(never)

never 代表不存在的值的类型, 常用作为抛出异常或无限循环的 函数返回类型

~~~typescript
function test_1(): never {
  while (true) { }
}
function test_2(): never {
  throw new Error('讨厌, 死鬼~')
}
// never类型可以赋值给任意类型的变量
const x: never = test_1()
const y: string = test_2()
~~~

> never 类型是 ts 中的底部类型, 所有类型都是 never 类型的父类，所以 never 类型可以赋值给任意类型的变量

## 对象记载(Record)

Record 用于定义对象中key值与val值的类型，使用泛型定义，由 `,` 区别key与val的关系

~~~typescript
const obj:Record<string , number> = {dwd: 60};
~~~
