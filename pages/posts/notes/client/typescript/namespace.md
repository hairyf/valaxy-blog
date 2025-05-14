---
title: TypeScript 命名空间(Namespace)
date: 2020-08-04 16:00:00
categories:
  - Notes
  - Client
  - TypeScript
tags:
  - TypeScript
---

在代码量较大的情况下，为了避免各种变量命名产生冲突，可将相似功能的函数、类、接口等放置到命名空间内。

同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包括起来，支队外暴露需要在外部访问的对象。命名空间内对象或者属性需要通过export暴露出去，才能在外部访问。

<!-- more -->

## 定义私有命名空间

~~~typescript
namespace A {
  export const Animal = 70
}
// 两个命名空间不会产生冲突
namespace B {
  export const Animal = 60
}
console.log(A.Animal) // 70
console.log(B.Animal) // 60
~~~

## 引入外部文件命名空间

~~~typescript
// 旧版引入命名空间
/// <reference path="./javascript-utils.ts"/>

// 新版引入命名空间
export namespace A {
    export const Animal = 70
}
// -----------↓-----------
const {A} from './modules'
~~~
