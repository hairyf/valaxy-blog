---
title: TypeScript 基础应用
date: 2020-11-01
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

TypeScript 是一种由微软开发的[开源](https://baike.baidu.com/item/开源/246339)、跨平台的编程语言。它是[JavaScript](https://baike.baidu.com/item/JavaScript)的超集，最终会被编译为 JavaScript 代码。TypeScript 添加了可选的静态类型系统、很多尚未正式发布的ECMAScript新特性（如装饰器 ）。2012年10月，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版 TypeScript。

<!-- more -->

```sh
# 安装
npm install -g typescript
# 校验
tsc -v
```

## VSCode 自动编译

- 运行 `tsc --init` 创建 `tsconfig.json` 文件
- 修改 `tsconfig.json`，设置 JS 文件夹 `"outDir": "./js/"`
- 终端运行任务 `tsconfig.json`

![](https://pic.imgdb.cn/item/62f4d79416f2c2beb1eec290.jpg)

## 变量声明

变量创建指定类型：

~~~typescript
// 创建变量时指定变量类型, 当指定特定类型时, 改变为别的类型将会编译错误
let user_name: string = 'dsdasda'
user_name = 0 // 报错
// 当一个变量需要储存多个值时, 需要用到联合类型语法
let somThing: string | number = '112132'
somThing = 0
// 如果变量的声明和初始化是在同一行, 可以省略掉变量类型的声明
let user_name_1 = 'uzi' // --> let user_name_1:string = 'uzi'
~~~

基本类型：

~~~typescript
let aName: string = '貂蝉'
let dAge: number = 18
let isSingLeDog: boolean = true
let undef: undefined = undefined
let nul: null = null
~~~

## 数组类型

~~~js
// JS 中数组可以放任意值, TS 数组需指定元素类型
const arrJS = [1, 'a', true, [], {}]
// 方式一：let 数组名:类型[] = [值1, 值2]
const arrHeros: string[] = ['安其拉', '亚索', '大乔']
// 方式二: let 数组名:Array<类型> = [值1, 值2] 该数组为泛型数组
const arrHeroAge: Array<number> = [17, 231, 23]
~~~

### 函数类型

~~~typescript
// TS中函数必须指定返回值类型, 如果不指定, 默认会自动指定类型
function fun_1(): string {
    return '讨厌~~'
}
let content_1: string = fun_1()

// TS中形参必须指定类型, 且与实参参数与数量必须一致
function fun_2(u_name: string, u_age: number): string {
    return `您的名称是:${u_name}, 年龄是:${u_age}`
}
let content_2: string = fun_2('毛先生', 15)
~~~

~~~typescript
// TS函数中指定可选类型, 可选参数可传, 也可不传
function fun_3(u_name?:string) { console.log(u_name) }
fun_3()
// 当指定了初始值, 也可不需要传入参数
function fun_4(u_name:string = '毛先生') { console.log(u_name) }
fun_4()
~~~

~~~js
// TS中剩余参数的写法
function fun_5(a: number, b: number, ...allNum: number[]) {
  let num = a + b
  num += allNum.reduce((total, item): number => total += item, 0)
  console.log(num)
}
fun_5(6, 8, 456, 4561, 123)
~~~

~~~typescript
// ts中, 方法的重载, 定义多个方法, 参数统一接受
function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any{
    if (typeof str === 'string')
        return `我叫：${str}`
    else
        return `我的年龄是：${str}`
}
~~~

## TypeScript 特殊指令

~~~typescript
// @ts-expect-error: 忽略类型错误
// @ts-ignore: 忽略所有错误
// @ts-nocheck: 忽略文件所有内容
// @ts-check: 让 js 文件拥有注释类型
~~~

