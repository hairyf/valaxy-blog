---
title: JavaScript 概念
categories:
  - Notes
  - Client
  - JavaScript
tags:
  - JavaScript
---

## 基本(值)类型

- `Number` ----- 任意数值 -------- `typeof == Number `
- `String` ----- 任意字符串 ------ `typeof == String `
- `Boolean` ---- true/false ----- `typeof == Boolean`
- `undefined` -- undefined -----  `typeof == undefined`
- `null` ------- null ----------  `typeof == Object`

## 对象(引用)类型

- `Object` ----- `typeof/instanceof == Object/true`
- `Array` ------ `instanceof == true`
- `Function` --- `typeof == function`

## 数据|变量|内存

**数据**：在内存中可读的, 可传递的保存了特定信息的'东东'
- 一切皆数据, 函数也是数据
- 在内存中的所有操作的目标 --> 数据

**变量**：在程序运行过程中它的值是允许改变的量
- 一个变量对应一块小内存, 它的值保存在此内存中  

**内存**：内存条通电后产生的存储空间(临时的)
- 一块内存包含内部存储的数据，地址值数据

<!-- more -->
 
---

内存空间分类

**栈空间**：全局变量和局部变量

**堆空间**：对象 

## 对象的概念

对象是多个数据(属性)的集合，用来保存多个数据(属性)的容器。

**变量属性的组成**
- 属性名：字符串(标识)
- 属性值：任意类型

**属性的分类**
- 一般：属性值不是function  描述对象的状态
- 方法：属性值为function的属性  描述对象的行为

**特别的对象**
- 数组：属性名是0,1,2,3之类的索引
- 函数：可以执行的

**如何操作内部属性(方法)**
- 通过操作原型链添加和运行方法

## 函数的概念

用来实现特定功能的, n条语句的封装体，只有函数类型的数据是可以执行的, 其它的都不可以。

**为什么要用函数?**
- 提高复用性
- 便于阅读交流

**函数也是对象**
- `instanceof Object` 结果为 `true`
- 函数有属性：`prototype`
- 函数有方法：`call()/apply()`
- 可以对函数的原型进行操作和添加方法

**函数在JS中不同的角色**
- 一般函数：直接调用
- 构造函数：通过new调用
- 对象：通过.调用内部的属性/方法

**函数中的指针(this)**
- 显式指定谁：`obj.xxx()`
- 通过call/apply指定谁调用：` xxx.call(obj)`
- 不指定谁调用：`xxx() `：`window`
- 回调函数：看背后是通过谁来调用的通常有`window`或者其它

**回调函数的理解**
- 你定义的，你没有调用，但它最终执行了(在一定条件下或某个时刻)

**常见的回调函数**：
- dom 事件回调函数
- 定时器回调函数
- ajax 请求回调函数
- 生命周期回调函数

## 执行上下文栈

**执行上下文**：由 JavaScript 引擎自动创建的对象, 包含对应作用域中的所有变量属性。

**上下文栈**：用来管理产生的多个执行上下文。

## 变量函数提升

**变量提升**：在变量定义语句之前, 就可以访问到这个变量(undefined)

**函数提升**：在函数定义语句之前, 就执行该函数。

一般是先有变量提升, 再有函数提升。

> 注意：ES6 中 let|const 定义属性不在具有提升。

## 作用域链

作用域的产生通常在全局、或局部函数中，并具有以下特点：

**全局域生命周期**：执行全局代码前产生, 刷新|关闭页面时死亡。

**全局的属性**：定义的变量(全局)、使用 `function` 声明的函数、`this` 等

---

**函数域生命周期**：调用函数时产生, 函数执行完时死亡。

**函数的属性**：定义的变量(局部)、`function`内声明函数、`this`、`arguments`


实际的运行：

~~~js
var a = 10 // 1.进入全局上下文环境
var fn
var bar = function (x) {
  var b = 20
  fn(x + b) // 3.进入 fn 上下文环境
}
fn = function (y) {
  var c = 20
  console.log(y + c)
}
bar(5) // 2.进入 bar 上下文环境
~~~

## 函数闭包

当嵌套的内部函数引用了外部函数的变量时就产生了闭包，通过chrome工具可以得知，闭包本质是内部函数中的一个对象, 这个对象中包含引用的变量属性。

- **作用**：延长局部变量的生命周期，并且让函数外部能操作内部的局部变量
- **闭包可以**：封装一些数据以及操作数据的函数, 向外暴露一些行为
- **闭包可以**：循环遍历加监听，保存循环索引的值
- `JS框架(jQuery)`大量使用了闭包
- **缺点**：变量占用内存的时间可能会过长，可能导致内存泄露
- **解决**：及时释放 ： f = null; //让内部函数对象成为垃圾对象

实际的运行：

~~~js
function fn1() {
  var a = 2 // a并没有销毁
  function fn2() {
    a++
    console.log(a)
  }
  return fn2
}
const f = fn1()
f(); f()
~~~

## 内存溢出|泄露

**内存溢出**：一种程序运行出现的错误，当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误

**内存泄露**：占用的内存没有及时释放，内存泄露积累多了就容易导致内存溢出

**常见的内存泄露**：
- 意外的全局变量
- 没有及时清理的计时器或回调函数
- 闭包

## IIFE 匿名函数

匿名函数专业术语为： `IIFE (Immediately Invoked Function Expression) `立即调用函数表达式，匿名函数通常用来封装一些方法然后向外暴露全局对象。

```js
(function (window) {
  function a() { /* ... */ }
  window.a = a
})(window)
```

## 原型与原型链

所有函数都有一个特别的属性：`prototype`，即显式原型属性。

所有实例对象都有一个特别的属性：`__proto__`，即隐式原型属性。

**显式原型与隐式原型的关系**

- 函数的`prototype`： 定义函数时被自动赋值, 值默认为{}, 即用为原型对象
- 实例对象的`proto`： 在创建实例对象时被自动添加, 并赋值为构造函数的prototype值
- 原型对象即为当前实例对象的父对象

**原型链**

* 所有的实例对象都有`proto`属性, 它指向的就是原型对象
* 这样通过`proto`属性就形成了一个链的结构---->原型链
* 当查找对象内部的属性/方法时, js引擎自动沿着这个原型链查找
* 当给对象属性赋值时不会使用原型链, 而只是在当前对象中进行操作

<HairyImage class="rounded" src="https://tva1.sinaimg.cn/large/006C2ocely8h4uwo1sq7rj30zk0p2mz6.jpg" />

## 对象创建模式

**对象字面量模式**

```js
var obj = {
  name: 'Tom',
  setName(name) { this.name = name }
}
```

**构造函数模式**

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.setName = function (name) { this.name = name }
}
const person = new Person('tom', 12)
```

**构造函数 + 原型的组合模式**

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.setName = function (name) { this.name = name }
const person = new Person('tom', 12)
```

**new 一个对象背后做了些什么?**

- 创建一个空对象
- 给对象设置__proto__, 值为构造函数对象的prototype属性值 `this.__proto__ = Fn.prototype`
- 执行构造函数体(给对象添加属性/方法)

## 构造函数继承(属性)

- **关键**：在子类型构造函数中通用`super()`调用父类型构造函数
- **目标**：让子函数使用父函数的属性

```js
function Parent(xxx) { this.xxx = xxx }
Parent.prototype.test = function () {}
function Child(xxx, yyy) {
  // 借用构造函数   this.Parent(xxx)
  Parent.call(this, xxx)
}
const child = new Child('a', 'b') // child.xxx为'a', 但child没有test()
```

### 原型链继承(得到方法)

- **关键**：子类型的原型为父类型的一个实例对象
- **目标**：使用子函数能调用父函数的方法
- **实例**：让子函数的原型对象指向父元素的实例，在让子函数原型的 `constructor` 指向自己

```js
function Parent() {}
function Child() {}
Parent.prototype.test = function () {}
Child.prototype.constructor = Child
Child.prototype = new Parent() // 子类型的原型指向父类型实例
const child = new Child() // 有test()
```

## 组合继承

1. 利用原型链实现对父类型对象的方法继承
2. 利用call()借用父类型构建函数初始化相同属性

- **目标**：让子函数的原型对象指向父元素，并且子函数使用父函数的属性

```js
function Parent(xxx) { this.xxx = xxx }
Parent.prototype.test = function () {}
function Child(xxx, yyy) {
  Parent.call(this, xxx)// 借用构造函数   this.Parent(xxx)
}
Child.prototype = new Parent() // 为了能看到父类型的方法
Child.prototype.constructor = Child // 修正constructor属性
const child = new Child() // child.xxx为'a', 也有test()
```

## 事件循环模型

​	在`Javascript`执行引擎之外，有一个任务队列，当在代码中调用`setTimeout()`方法时，注册的延时方法会交由浏览器内核其他模块（以`webkit`为例，是`webcore`模块）处理，当延时方法到达触发条件，即到达设置的延时时间时，这一延时方法被添加至任务队列里。这一过程由浏览器内核其他模块处理，与执行引擎主线程独立，执行引擎在主线程方法执行完毕，到达空闲状态时，会从任务队列中顺序获取任务来执行，这一过程是一个不断循环的过程，称为事件循环模型。

<HairyImageGroup row="48%">
  <HairyImage src="https://pic.imgdb.cn/item/62ec7d7e8c61dc3b8e1f6546.png" />
  <HairyImage src="https://pic.imgdb.cn/item/62ec7d898c61dc3b8e1f853b.png" />
</HairyImageGroup>

以图中代码为例，执行引擎开始执行上述代码时，相当于先讲一个main()方法加入执行栈。继续往下开始`console.log('Hi')`时，log('Hi')方法入栈，`console.log`方法是一个`webkit`内核支持的普通方法，而不是前面图中`WebAPIs`涉及的方法，所以这里log('Hi')方法立即出栈被引擎执行。

<HairyImageGroup row="48%">
  <HairyImage src="https://pic.imgdb.cn/item/62ec7d938c61dc3b8e1fac63.png" />
  <HairyImage src="https://pic.imgdb.cn/item/62ec7d9d8c61dc3b8e1fd405.png" />
</HairyImageGroup>

执行引擎将`setTimeout`出栈执行时，将延时处理方法交由了`webkit timer`模块处理，然后立即继续往下处理后面代码，于是将`log('SJS')`加入执行栈，接下来`log('SJS')`出栈执行，输出`SJS`。而执行引擎在执行完`console.log('SJS')`后，程序处理完毕，`main()`方法也出栈。

<HairyImageGroup row="30%">
  <HairyImage src="https://pic.imgdb.cn/item/62ec7da58c61dc3b8e1feb3f.png" />
  <HairyImage src="https://pic.imgdb.cn/item/62ec7dad8c61dc3b8e2007d6.png" />
  <HairyImage src="https://pic.imgdb.cn/item/62ec7db48c61dc3b8e201db4.png" />
</HairyImageGroup>

这时在在setTimeout方法执行5秒后，timer模块检测到延时处理方法到达触发条件，于是将延时处理方法加入任务队列。而此时执行引擎的执行栈为空，所以引擎开始轮询检查任务队列是否有任务需要被执行，就检查到已经到达执行条件的延时方法，于是将延时方法加入执行栈。引擎发现延时方法调用了log()方法，于是又将log()方法入栈。然后对执行栈依次出栈执行，输出there，清空执行栈。

清空执行栈后，执行引擎会继续去轮询任务队列，检查是否还有任务可执行。

因为是这种执行模式，所以一旦有计算量大的代码就会阻塞定时器的执行。

~~~js
var arr = []
for (let i = 0; i < 100000; i++) arr.push(i)
setTimeout(() => { console.log('我执行了') }, 1000) // 远不止 1 秒
~~~
