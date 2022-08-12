---
title: Promise 具体实现
date: 2022-03-10 14:00:00
categories:
  - Notes
  - Client
  - Promise
tags: 
  - Promise
---

promise有三种状态 pending（进行中） fulfilled（已成功） rejected（已失败），只有异步操作的结果，才可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

一旦从等待状态变成为其他状态就永远不能更改状态了。

只有两种状态改变：

- pending（进行中）–> fulfilled（已成功）
- pending（进行中）–> rejected（已失败）

<!-- more -->

实际流程：

![](https://pic.imgdb.cn/item/62f5f61316f2c2beb1ab984b.jpg)

## 函数状态

状态定义：

```js
// 未获取, 代表当前promise的resolve是异步完成的
const PENDING = 'pending'
// 已获取, 代表当前promise是同步执行的
const RESOLVED = 'resolved'
// 失败, 代表当前promise的执行结果为失败
const REJECTED = 'rejected'
```

初始数据：

```js
class Promise {
  // Promise 构造函数定义初始化状态为等待状态
  status = PENDING
  // Promise 构造函数定义初始化数据为 undefined
  data = undefined
  // Promise 构造函数定义初始化成功容器为 undefined
  onResolved = undefined
  // Promise 构造函数定义初始化失败容器为 undefined
  onRejected = undefined
}
```

## constructor

`new Promise(executor)` 会接受一个执行器，内部有两个方法需要实现：

`executor` 如果调用 `resolve` 则

- `this.status` 更改状态为已获取
- `this.data` 保存获取数据

`executor` 如果调用 `reject` 则

- `this.status` 更改状态为已失败
- `this.data` 保存获取数据

具体在 `new Promise` 的 `constructor` 中实现：

```ts
class Promise {
  // ...
  constructor(executor) {
    const resolve = (value) => {
      // 如果状态不是 pending, 则直接返回
      if (this.status !== PENDING)
        return

      // 将状态更改为获取成功
      this.status = RESOLVED
      // 将数据保存
      this.data = value
      // 如果成功函数已经定义, 代表需要异步执行成功回调 onResolved 并传入数据
      if (this.onResolved)
        setTimeout(() => this.onResolved(value))

    }
    // 获取失败函数
    const reject = (reason) => {
      // 如果状态不是pending, 则直接返回
      if (this.status !== PENDING)
        return

      // 将状态更改为获取失败
      this.status = REJECTED
      // 将数据保存
      this.data = reason
      // 如果失败函数已经定义, 代表需要异步执行失败回调 onResolved 并传入数据
      if (this.onRejected)
        setTimeout(() => this.onRejected(reason))
    }

    try {
      executor(resolve, reject)
    }
    catch (error) {
      // 如果捕获到错误 则代表 then promise.then 的结果为失败
      // 那么直接调用 promise.then 的失败函数, 向下传递失败
      reject(error)
    }
  }
}
```

## promise.then

定义 `promise.then`，该函数用于接收成功|失败函数的值，基本上 `promise` 的执行结果由 `then` 中的 `onResolved`、`onRejected` 决定和返回，而两个方法由使用者决定。

1. 定义 `DealWithThenReturnPromise`（状态处理函数）

`DealWithThenReturnPromise` 用于接收 `then` 的参数（`onResolved`、`onRejected`）有三种情况会改变 `promise.then` 的返回的 `promise` 状态。

- 执行结果是异常抛出，执行 `promise.then` 的失败函数，并传入异常数据。
- 执行结果是 `promise` 实例，再次执行 `promise`，由执行结果的 `promise` 的结果决定。
- 执行结果不是 `promise` 实例, 执行 `promise.then` 的成功函数, 并传入执行结果。

> 这里可能会比较难理解，实际上 `promise.then` 无论如何，都会返回一个新的 `promise`，这也代表执行结果一直都是由 `executor` 决定的，只不过我们在执行 `promise.then` 会产生一个不可见的 `executor`，并且如果仔细观察，就会发现无论如何都会变为一个异步的操作过程。

```js
class Promise {
  // ...
  then(resolve, reject) {
    return new Promise((resolve, reject) => {
      function DealWithThenReturnPromise(callback) {
        try {
          // 将返回值保存
          const result = callback(this.data)
          if (result instanceof Promise) {
          // 执行结果是 promise 实例, 由执行结果 promise 实例决定 promise.then 的执行结果
          // 易懂写法 result.then(value=> resolve(value), reason=> reject(reason))

            // 简便写法
            result.then(resolve, reject)
          // 这里将 return promise 的成功|失败回调传入执行结果新实例的 then 中再次执行
          }
          else {
          // 执行结果不是 promise 实例, 执行 promise.then 成功函数, 传入执行结果
            resolve(result)
          }
        }
        catch (error) {
        // 执行结果是异常抛出, 捕获异常并执行 promise.then 失败函数, 传入异常
          reject(error)
        }
      }
    })
  }
}
```

现在状态处理函数定义了，可是 `promise.then` 还没有做任何的操作，接下来我们处理实际的状态。

数据获取有三种情况会发生，并且每一种状态都得是异步执行的：

- 数据已经获取成功，代表可以直接执行并获取到 `onResolved` 返回值；
- 数据获取失败，代表可以直接执行并获取到 `onRejected` 返回值。
- 数据并没有获取，代表 `onRejected`, `onResolved` 并不能马上执行，要存入实例当中由执行器的回调函数执行。

```js
class Promise {
  // ...
  then(resolve, reject) {
    return new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        // 数据获取成功, 执行 promise.then 状态处理函数, 并传入成功回调
        setTimeout(() => DealWithThenReturnPromise(onResolved))
      }
      else if (this.status === REJECTED) {
        // 数据获取失败, 执行 promise.then 状态处理函数, 并传入失败回调
        setTimeout(() => DealWithThenReturnPromise(onRejected))
      }
      else {
        // 数据暂未获取, 封装成功/失败函数, 在封装函数内执行 promise.then 状态处理函数, 并传入 then 成功|失败回调
        // 这个封装函数最终由当前 promise 实例的 executor 决定调用。
        // 当获取数据的时候, 会在 DealWithThenReturnPromise 函数中获取。
        this.onResolved = value => DealWithThenReturnPromise(onResolved)
        this.onRejected = reason => DealWithThenReturnPromise(onRejected)
      }
    })
  }
}
```

## Promise.resolve

`Promise.resolve` 接收三类参数，并返回一个新的 `promise` 实例：

- 成功的 Promise 实例
- 失败的 Promise 实例
- 不是 Promise 实例的任意值

具体实现：

- 判断传参是不是 Promise 实例，如果是，调用 `then` 方法并传入新的 `promise resolve` 方法。
- 参数不是 Promise 实例，直接调用新的 `new Promise` 成功函数，并传入参数。

```js
class Promise {
  // ...
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        // 如果 value 是 Promise 的实例
        value.then(resolve, reject)
      }
      else {
        // 如果不是
        resolve(value)
      }
    })
  }
}
```

## Promise.all

`Promise.all` 接收一个 Promise 或其他值数组，并返回一个 `promise` 实例，结果是所有值组成的数组。

- 如果传入的 `promise` 全部成功，则执行 Promise 成功的结果。
- 只要有一个失败，则执行失败的 Promise 传入失败值。

具体实现：

- 定义一个数组容器、计数器。
- 遍历数组，每次进入循环计数器 +1。
- 执行每个 `promise.then`，如果成功，在将值根据下标存入数组容器。

- 根据计数器判断是否已经执行完毕，执行完毕后调用新的 `Promise.resolve`，并传入所有结果数组。
- 如果 then 执行的是失败，则直接调用 `Promise.reject` 并传入 then 失败值。

```js
class Promise {
  // ...
  static all(promises) {
    // 创建一个计数器
    let resolveCount = 0
    // 创建数组指定长度
    const values = new Array(promises.length)
    return new Promise((resolve, reject) => {
      promises.forEach((item, index) => {
        Promise.resolve(item).then(
          (value) => {
            // 当获取成功时, 计数器+1
            resolveCount++
            // promise实例成功, 将结果保存在数组
            values[index] = value
            // 当执行到最后一个, 执行all return promise成功函数, 传入成功值的数组
            promises.length === resolveCount ? resolve(values) : []
          },
          // 只要有一个失败, 那么就all返回的promise就是失败
          error => reject(error)
        )
      })
    })
  }
}
```

## Promise.rule

`Promise.rule` 与 `Promise.all` 类似，不过只要得到一个值（无论成功失败）都直接返回结果。

```js
class Promise {
  // ...
  static rule(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((item) => {
        Promise.resolve(item).then(resolve, reject)
      })
    })
  }
}
```