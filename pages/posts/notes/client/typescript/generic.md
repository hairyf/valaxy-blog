---
title: TypeScript 泛型(Generic)
date: 2020-08-04 15:00:00
categories:
  - Notes
  - Client
  - TypeScript
tags: 
  - TypeScript
---

泛型，软件工程中，我们不仅要创建一致定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的语言。这样用户就可以以自己的数据类型来使用组件。

通俗理解就是，泛型就是解决类、接口、方法的重用性、以及对不特定数据类型的支持。

<!-- more -->

### 泛型函数

~~~ts
// 泛型支持不特定的数据类型, 要求传入的参数和返回的参数一致
function getData4<T>(value: T): T {
  return value
}
getData4<number>(123456)
~~~

### 泛型类

~~~ts
// 泛型类
class MinClass<Type> { // 接收一个泛型类型
  public list: Type[] = [] // 创建一个泛型数组, 元素类型为泛型中的类型
  add(num: Type): void { // 创建一个函数, num类型为泛型中的类型
    this.list.push(num)
  }

  min(): Type { // 返回一个属性, 返回类型为泛型中的类型
    return this.list.reduce(
      (total, item) => (total > item ? item : total),
      this.list[0]
    )
  }
}
const m = new MinClass<number | string>()
m.add(34214); m.add(312); m.add(33)
console.log(m.min)
~~~

### 泛型接口

~~~ts 
// 第一种定义泛型的方法
interface ConfigFn {
    <Type>(value: Type): Type
}
const getData: ConfigFn = function<Type>(value: Type): Type {
  return value
}
getData<string>('number')
// 第二种定义泛型的方法
interface ConfigFn<Type> {
    <Type>(value: Type): Type
}
const getData = function<Type>(value: Type): Type {
  return value
}
const myGetData: ConfigFn<string> = getData
~~~

### 泛型类

~~~ts
// 将类作为参数的类型约束
class User {
  username: string | indefined
  password: string | indefined
}
class MysqlDb {
  // 定义该方法只能传入User的实例
  add(user: User): boolean {
    console.log(user)
    return true
  }
}
const u = new User()
u.username = '张山'; u.password = '123456'
const Db = new MysqlDb()
Db.add(u)

// -----------------↓↓↓--------------

// 将类作为参数的泛型类
class User {
  username: string | indefined
  password: string | indefined
}
class MysqlDb<T> {
  // 定义该方法只能传入User的实例
  add(user: T): boolean {
    console.log(user)
    return true
  }
}
const u = new User()
u.username = '张山'; u.password = '123456'
const Db = new MysqlDb<User>() // 将泛型类传入MysqlDb中
Db.add(u)
~~~
