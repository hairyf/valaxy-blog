---
title: Promise 异步解决方案
date: 2022-03-08 14:00:00
  - Notes
  - Client
  - Promise
tags: 
  - Promise
---

同步编程通常来说易于调试和维护，然而，异步编程通常能获得更好的性能和更大的灵活性。异步的最大特点是无需等待。 Promise 渐渐成为 JavaScript 里最重要的一部分，大量的新 API 都开始 Promise 原理实现。

<!-- more -->


- **抽象表达**：Promise 是 JS 中进行异步编程的新的解决方案。
- **具体表达**：从语法上来说 Promise 是一个构造函数。

> 从功能上来说 Promise 对象用来封装一个异步操作并可以获取其结果。

## 三种状态

Promise 有三种状态（pending、resolved、rejected），他们之间会产生以下的变化。

- pending 变为 resolved
- pending 变为 rejected

> 只有这 2 种, 且一个 promise 对象只能改变一次无论变为成功还是失败, 都会有一个结果数据成功的结果数据一般称为 value 失败的结果数据一般称为 reason。


## 基本使用

~~~javascript
// ! 1. 创建一个新的promise对象
const p = new Promise((resolve, reject) => {
  // ! 2. 执行异步任务
  setTimeout(() => {
    const time = Date.now() // 如果当前时间是偶数代表成功，否则失败
    if (time % 2 === 0) {
      // ? 如果成功，调用resolve(value)
      resolve(`成功${time}`)
    }
    else {
      // ? 如果失败，调用reject(reason)
      reject(`失败${time}`)
    }
  }, 1000)
})
package.then(
  (value) => { // onResolved
    // ! 接受得到成功的value数据
    console.log(value)
  },
  (reason) => { // onRejected
    // ! 接受得到失败的reason数据
    console.log(reason)
  }
)
~~~

## 为什么要用？

指定回调函数的方式更加灵活：

- 以前：须在启动异步任务前指定回调。
- 现在：启动异步任务 -> 返回 `promise` 对象 -> 绑定回调函数（甚至可以在异步任务结束后指定）

支持链式调用，可以解决回调地狱：

什么是回调地狱? 回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调函数执行的条件。回调地狱不便于阅读和异常处理。

- 解决方法：Promise 链式。
- 终极解决：`async` | `await`

我们根据实际案例来分析：

```js
// 成功的回调函数
function successCallback(result) {
  console.log(`声音文件创建成功: ${result}`)
}
// 失败的回调函数
function failureCallback(error) {
  console.log(`声音文件创建失败: ${error}`)
}
```

具体使用：

```js
/* 1.1 使用纯回调函数 */
createAudioFileAsync(audioSettings, successCallback, failureCallback)

/* 1.2. 使用Promise */
const promise = createAudioFileAsync(audioSettings) // 2
setTimeout(() => {
  promise.then(successCallback, failureCallback)
}, 3000)

/* 2.1. 回调地狱 */
doSomething((result) => {
  doSomethingElse(result, (newResult) => {
    doThirdThing(newResult, (finalResult) => {
      console.log(`Got the final result: ${finalResult}`)
    }, failureCallback)
  }, failureCallback)
}, failureCallback)

/* 2.2. 使用promise的链式调用解决回调地狱 */
doSomething()
  .then((result) => {
    return doSomethingElse(result)
  })
  .then((newResult) => {
    return doThirdThing(newResult)
  })
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`)
  })
  .catch(failureCallback)

/* 2.3. async/await: 回调地狱的终极解决方案 */
async function request() {
  try {
    const result = await doSomething()
    const newResult = await doSomethingElse(result)
    const finalResult = await doThirdThing(newResult)
    console.log(`Got the final result: ${finalResult}`)
  }
  catch (error) {
    failureCallback(error)
  }
}
```

## Promise 方法

Promise 除了 `new` 创建实例，本身内部还提供了大量方法。

### Promise.resolve

~~~js
// 产生一个成功值为1的promise对象(基本写法)
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})
// Promise.resolve
const p2 = Promise.resolve(2)
~~~

### Promise.reject

~~~javascript
// 产生一个一个失败值为 3 的 promise 对象
const p3 = Promise.reject(3)
~~~

### Promise.all

~~~js
const pAll = Promise.all([p1, p2])
pAll.then(
  // 当传入的所有 promise 实例对象成功时, 返回一个结果数组
  (values) => {},
  // 当有一个 promise 失败时
  (reason) => {}
)
~~~

### Promise.race

~~~js
const pAll = Promise.race([p1, p2])
pAll.then(
  // 当传入的所有 promise 实例对象成功时,返回第一个获取到的结果
  (value) => {},
  // 当有一个 promise 失败时
  (reason) => {}
)
~~~

### Promise.reject

~~~javascript
const p = new Promise((resolve, reject) => {
  // resolve(1) // promise变为resolved成功状态
  // reject(2) // promise变为rejected失败状态
  // throw new Error('出错了') // 抛出异常, promse变为rejected失败状态, reason为 抛出的error
  throw 3 // 抛出异常, promse变为rejected失败状态, reason为 抛出的3
})
~~~

### promise.then

`promise.then` 还可以指定多个成功 / 失败回调。

~~~js
p.then(
  (value) => {},
  (reason) => { console.log('reason1', reason) }
)
p.then(
  (value) => {},
  (reason) => { console.log('reason2', reason) }
)
~~~

## async

`async` 函数的返回值是一个 `promise` 对象，`async` 函数返回的 `promise` 的结果由函数执行的结果决定。

~~~js
async function fn1() {
  // return 1
  // throw 2
  return new Promise(resolve => setTimeout(() => resolve(6), 1000))
}
const result = fn1()
// console.log(result)
result.then(
  value => console.log(value),
  reason => console.log(reason)
)
~~~

## await

`await` 右侧的表达式一般为 `promise` 对象, 但也可以是其它的值。

- 如果表达式是 `promise` 对象, `await` 返回的是 `promise` 成功的值
- 如果表达式是其它值, 直接将此值作为 `await` 的返回值

~~~js
function fn2() {
  return new Promise(resolve => setTimeout(() => resolve(100), 1000))
}
async function fn3() {
  const value = await fn2()
  console.log(value)
}
fn3()
~~~

## catch

`await` 不能得到 `promise` 失败值，得用异常捕获语法得到。

~~~javascript
function fn2() {
  return new Promise((resolve, reject) => setTimeout(() => reject(100), 1000))
}
async function fn3() {
  try {
    const value = await fn2()
  }
  catch (error) {
    console.log(error)
  }
}
fn3()
~~~

## 宏与微任务

![](https://pic.imgdb.cn/item/62f5f61b16f2c2beb1abb177.jpg)

JS 中用来存储待执行回调函数的队列包含 2 个不同特定的列队：

- **宏列队**：用来保存待执行的宏任务(回调), 比如 定时器回调 | DOM 事件回调 | ajax 回调。
- **微列队**：用来保存待执行的微任务(回调), 比如 promise 的回调 | MutationObserver 的回调。

JS 执行时会区别对待这 2 个队列：

- 首先必须先执行所有的初始化同步任务代码。
- 每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行。