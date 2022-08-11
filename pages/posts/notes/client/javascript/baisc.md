---
title: JavaScript 基础应用
categories:
  - Notes
  - Client
  - JavaScript
tags:
  - JavaScript
---

JavaScript（JS）是一种具有[函数优先](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)特性的轻量级、解释型或者说[即时编译型](https://zh.wikipedia.org/wiki/%E5%8D%B3%E6%99%82%E7%B7%A8%E8%AD%AF)的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多[非浏览器环境](https://en.wikipedia.org/wiki/JavaScript#Other_usage)中，例如 [Node.js](https://developer.mozilla.org/zh-CN/docs/Glossary/Node.js)、[Apache CouchDB](https://couchdb.apache.org/)、[Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) 等。进一步说，JavaScript 是一种[基于原型](https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming)、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

不要将 JavaScript 与 [Java 编程语言](https://en.wikipedia.org/wiki/Java_(programming_language))混淆。虽然“Java”和“JavaScript”都是 Oracle 公司在美国和其他国家注册（或未注册）的商标，但是这两门语言在语法、语义与用途方面有相当大的不同。

<!-- more -->

## 数据类型

- 基本数据类型

~~~js
// 字符串（String）
'你妈的'
// 数字(Number)
110
// 布尔(Boolean)
true; false
// 对空（Null）
null
// 未定义（Undefined）
undefined
// 独一无二的值(Symbol)
Symbol(66)
~~~

- 引用数据类型

```js
// 对象(Object) 通常对应着key与val值
{ day: 110 }
// 数组(Array) 通常放置元素值, 多个值与逗号分隔
[110, 110]
// 函数(Function) 通常用于特定场合执行大括号内的代码块
function fun_name() {}
```

## 变量赋值

定义数据的引用名称，不同关键字具有不同的作用域。

- 代码块作用域: 在花括号内的变量代表花括号内特有的变量

- 函数内作用域: 在函数内部的变量代表函数内特有的变量

~~~js
const num = 110 // 定义一个不可修改的常量 (代码块作用域)
const bool = false // 定义一个可修改的变量 (代码块作用域)
const str = '你妈的' // 定义一个可修改的变量 (函数内作用域)
~~~

## 条件判断

- if: 当条件为成功时, 执行特定代码块内代码
- ifElse: 当条件为失败时, 执行特定代码块内代码

~~~js
if (true) {
  // ....
}
else {
  // ....
}
~~~

- switch: 该值等于特定值时, 执行对应的caseBreak内的代码, 当都不满足条件时, 执行defaultBreak内的代码

```js
switch (key) {
  case '666':
    // ...
    break
  default:
    // ...
    break
}
```

## 函数(function)

定义函数：

~~~js
function fun_name() {
  // ...
}
// 当函数执行时, 会调用执行函数内部代码块
fun_name()
~~~

JavaScript 函数具有提升，在函数上方运行不会报错

~~~js
fun_name()
function fun_name() {
  // ...
}
~~~

通过括号包裹函数执行，可形成自调用函数

~~~js
(function () {
  document.write('wo hao')
})()
~~~

## 类型转换

JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值，类型的转换有两种，一种是隐式转换、一种是显式转换。

- 隐式转换，即 JavaScript 编译时，不同数值在相加、比较、处理时，自动转换为特定的类型值。

- 强制转换（显式转换）主要指各种手段，手动将各种类型的值，分布转换成数字、字符串或者布尔值。

### 转换(boolean)

~~~js
let a = 123 // true
a = -123 // true
a = 0 // false
a = Infinity // true
a = NaN // false
if (a) { /* .. */ }
~~~

### 转换(number)

- 使用 `Number(num)` 函数转换

```md
- 字符串 --> 数字
	如果是纯数字的字符串，则直接将其转换为数字
	如果字符串中有非数字的内容，则转换为NaN
	如果字符串是一个空串或者是一个全是空格的字符串，则转换为0
- 布尔值 --> 数字
	1 > true 转为 1
	2 > false 转为 0
- null --> 0
- undefined --> NaN
```

- 使用 `parseInt(num),parseFloat(num)` 函数转换

~~~md
- parseInt() 把一个字符串转换为一个整数
- parseFloat() 把一个字符串转换为一个浮点数
~~~

### 转换(string)

~~~js
const num = 10
num.toString() // 十进制(默认): "10"
num.toString(2) // 二进制: "1010"
num.toString(8) // 八进制: "12"
num.toString(16); // 十六进制: "a"

(1231421.1231412).toFixed(1) // "1231421.1"

const value1 = 10
const value2 = true
const value3 = null
let value4 // 只定义未初始化的变量，自动赋值为undefined
String(value1) // 10"
String(value2) // "true"
String(value3) // "null"
String(value4) // "undefined"
~~~

## 内置函数

~~~js
// 判断是否是有限大的数
console.log(isFinite(Infinity))
// 判断是否是NaN
console.log(isNaN(NaN))
// 将字符串转换为对应的数值
console.log(parseInt('60441sdad'))
~~~

## 内置关键字
~~~js
// 返回值的类型字符串(null不适用)
console.log(typeof '600') // 'string'

// 判断构造函数的prototype是否出现在某个实例对象的原型链上
console.log({} instanceof Object)
~~~


## 函数指针

面向对象语言中 this 表示当前对象的一个引用，但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

我们还可以通过函数原型的 `call`、`apply`、`bind` 函数显式的设定 this, 它们具有以下特点: 

- 都能指定函数中的 this
- call()/apply()是立即调用函数, 但参数传入的方式不一样
- bind()是将函数拷贝返回, 并不会执行

实际运用：

~~~js
// 需求：我想执行函数的this不是window,而是上方的obj
const obj = { username: '魏大勋' }
function fun(data) { console.log(this, data) }

// 执行该函数, 并将 this 指针指向 obj, 带参数时: 参数放在对象的后面
fun.call(obj, 60)
// 执行该函数, 并将 this 指针指向 obj, 带参数时: ,参数放在对象的后面的数组,或者伪数组
fun.apply(obj, [60])
// 将 this 指针指向 obj, 并作为新的函数返回(拷贝)
const bindFun = fun.bind(obj)

// bind 常用场景: 需要改变类似setInterval中的回调函数的this指向时
setInterval(function () { console.log(this) }.bind(obj), 1000)
~~~

## 正则表达式

则表达式，又称规则表达式,（Regular Expression，在代码中常简写为regex、regexp或RE），是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。

实际使用：

~~~js
// 从前面搜索字符串中的每个值，并返回它所在的位置。
String.prototype.search(/RegExp/)
// 用另一个值替换在字符串中指定的值
String.prototype.replace(/RegExp/, 'xxx')

// 判断串是否符合规则
;/RegExp/.test(str)
// 返回符合规则的字符串
;/RegExp/.exec(str)
~~~

语法表达：

```md
- 正则表达式修饰符
 > i 	执行对大小写不敏感的匹配
 > g 	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
 > m 	执行多行匹配。
 > s   匹配元字符.(除换行符意外的任意单个字符)
- 正则表达式模式
 > [abc]	查找方括号之间的任何字符。
 > [^xyz] 	不匹配这个集合中的任何一个字符 
 > [0-9]	查找任何从 0 至 9 的数字。
 > (x|y)	查找由 | 分隔的任何选项
 > (x) 	匹配x里面的内容
 > {n} 	精确匹配n次 
 > {n,} 	匹配n次以上 
 > {n,m} 	匹配n-m次 
- 元字符
 > \d	查找数字。
 > \D	查找非数字字符
 > \s	查找空白字符。
 > \S	查找非空白字符
 > \b	匹配单词边界。
 > \B	匹配非单词边界
 > \n	查找换行符
- 定义量词
 > n+	匹配任何包含至少一个 n 的字符串。
 > n*	匹配任何包含零个或多个 n 的字符串。
 > n?	匹配任何包含零个或一个 n 的字符串。
- 边界量词
 > ^	匹配开头，在多行检测中，会匹配一行的开头
 > $	匹配结尾，在多行检测中，会匹配一行的结尾
```

## 定义与定时器

定义：

~~~js
// setInterval, setTimeout: 定义定时器, 返回定时器编号
const id_of_settimeval = setInterval(code, millisec, lang)
const id_of_settimeout = setTimeout(code, millisec, lang)
// code		必需。要调用的函数或要执行的代码串。
// millisec	必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。
// lang		可作为code的参数传入,也可以作为另外一个定时器调用
~~~

销毁：

~~~js
clearInterval(id_of_settimeval)
// id_of_settimeval	由 setInterval() 返回的 ID 值。该值标识要取消的延迟执行代码块。
clearTimeout(id_of_settimeout)
// id_of_settimeout	由 setTimeout() 返回的 ID 值。该值标识要取消的延迟执行代码块。
~~~

## JSON 对象

JavaScript Object Notation JS对象表示法。JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别。并且可以传唤为任意语言中的对象，JSON在开发中主要用来数据的交互。JSON和对象格式一样，只不过JSON字符串中的属性名必须加双引号，其他和JS语法一样。JSON分类通常有对象与数组。

- JSON 转换为 JS 对象

~~~js
const JSON_obj = '{"name":"孙悟空","age":18,"gender":"男"}'
const JS_obj = JSON.parse(obj)
~~~

- JS 对象 转换为 JSON 对象

~~~js
const JS_obj = { name: '孙悟空', age: 18, gender: '男' }
const JSON_obj = JSON.stringify(JS_obj, null, '\t')
~~~
