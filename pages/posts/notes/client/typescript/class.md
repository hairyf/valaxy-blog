---
title: TypeScript 类(Class)
date: 2020-11-01
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

TypeScript 是面向对象的 JavaScript。类描述了所创建的对象共同的属性和方法。TypeScript 支持面向对象的所有特性，比如 类、接口等。

<!-- more -->

TypeScript 类定义方式如下：

~~~ts
class City {
  // 成员属性
  cName = ''
  cLevel: number
  constructor(cName: string, cLevel: number) {
    // 初始化构造器
    this.cName = cName
    this.cLevel = cLevel
  }

  about(): void {
    console.log(`您要跳${this.cName}, 难度系数为${this.cLevel}`)
  }

  static count = 50 // 静态属性
  static fun() { /* ... */ } // 静态方法
}
// 创建构造对象, 参数未设置默认值或可为空, 默认必传
const citv = new City('p城', 5)
console.log(citv.cName) // 'p城'
console.log(citv.cLevel) // 5
citv.about() // ....
~~~

## 修饰符

~~~ts
class City {
  // 成员属性
  private cName = '' // 私有属性, 类外部不可访问
  cLevel!: number // 属性值!:number 代表值可以为空(undefined)

  constructor(cName: string, cLevel: number) {
    this.cName = cName
  }

  // 私有方法, 类外部不可访问
  private about(): void { console.log(`您要跳${this.cName}, 难度系数为${this.cLevel}`) }
  // 共有方法, 类外部可访问
  public about_2(): void { /* ... */ }
  // protected, 派生类公共方法, 类外部不可访问, 但继承类可访问
  protected about_3(): void { /* ... */ }
}
const citv = new City('p城', 5)

console.log(citv.cName) // 属性“cName”为私有属性，只能在类“City”中访问。
console.log(citv.cLevel) // 5
citv.about() // 属性“about”为私有属性，只能在类“City”中访问。
~~~

## 继承（Extends）

~~~ts
class Animal {
  protected name: string // 类与子类私有属性, 外部不可访问
  constructor(theName: string) {
    this.name = theName
  }

  about() { console.log(this.name) }
}
class Rhino extends Animal { // extends关键字继承父类所有方法
  constructor() {
    super('Rhino') // 调用父类的构造器函数, 获取父类的属性与属性值
  }

  getName() {
    console.log(this.name) // 此处的name就是Animal类中的name
    this.about()
  }
}
~~~

## 多态（Polymorphism）

~~~ts
class Animal {
  eat() { /* ... */ }
}
class Rhino extends Animal { // extends关键字继承父类所有方法
  // 类的多态, 每个类都有一样的方法, 不一样的行为
  // 如果子类没有方法, 则使用当前继承类的方法
  eat() { /* ... */ }
}
~~~

## 抽象（Abstract）

~~~ts
// 抽象类不能直接实例化, 抽象类是给予子类的一个基类
abstract class Animal {
  // 定义一个抽象方法, 继承该类时该方法必须定义
  abstract eat(): any
}
// new Animal() // 报错
class Rhino extends Animal {
  // 抽象类的子类必须实现抽象类里面的抽象方法
  eat() { /* ... */ }
}
~~~

