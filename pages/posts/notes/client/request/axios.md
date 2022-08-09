---
title: Axios 接口请求工具库
categories:
  - notes
  - client
  - request
tags:
  - http
---

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## Axios 特性

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

<!-- more -->

## 浏览器支持

|          |          |          |          |          |      |
| :------- | :------- | :------- | :------- | :------- | :--- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

## Axios API

~~~sh
axios(config): 通用/最本质的发任意类型请求的方式
axios(url[, config]): 可以只指定 url 发 get 请求
axios.request(config): 等同于 axios(config)
axios.get(url[, config]): 发 get 请求
axios.delete(url[, config]): 发 delete 请求
axios.post(url[, data, config]): 发 post 请求
axios.put(url[, data, config]): 发 put 请求

axios.defaults.xxx: 请求的默认全局配置
axios.interceptors.request.use(): 添加请求拦截器
axios.interceptors.response.use(): 添加响应拦截器

axios.create([config]): 创建一个新的 axios(它没有下面的功能)

axios.Cancel(): 用于创建取消请求的错误对象
axios.CancelToken(): 用于创建取消请求的 token 对象
axios.isCancel(): 是否是一个取消请求的错误
axios.all(promises): 用于批量执行多个异步请求
axios.spread(): 用来指定接收所有成功数据的回调函数的方法
~~~


axios 函数可传入配置：

~~~javascript
axios({
  url: '',			// 请求地址
  method: 'GET',	// 请求方式 GET/POST/PUT/DELETE
  data: {}, 		// 定义请求体 用来进行REST API CRUD操作
  params: {},		// 定义链接请求头 用于获取数据操作
  timeout: 1000,	// 定义请求超时时间，如果超过，则终止请求
  auth: { username: '', password: '' },	// 定义HTTP 基础验证，并提供凭据
  responseType: 'json',	// 定义响应数据类型
  maxContentLength: 2000	// 定义响应内容最大尺寸
})
  .then((response) => {}, (error) => {})	// 接收请求并处理
~~~

## 创建实例(create)

axios 本身可以直接使用，也可以根据指定配置创建一个新的 axios, 每个新 axios 都有自己的配置，新 axios 只是没有取消请求和批量发请求的方法, 其它所有语法都是一致的。

instance 与 axios 的区别

相同点：
- 都是一个能发任意请求的函数: `request(config)`
- 都有发特定请求的各种方法: `get()|post()|put()|delete()`
- 都有默认配置和拦截器的属性: `defaults|interceptors`

不同点：
- instance 没有 axios 后面添加的一些方法: create()/CancelToken()/all()

~~~js
const instance = axios.create({
  baseURL: 'http://localhost:4000'
})
// 使用instance发请求
instance({
  url: '/xxx' // 请求4000
})
instance.get('/xxx')
~~~

## 拦截器(interceptors)

调用 axios 并不是立即发送 ajax 请求, 而是需要经历一个较长的流程，这段期间会穿梭于拦截器当中，此外，拦截器还允许决定返回的请求成功与否。

Axios 运作流程：请求拦截器 => 发ajax请求 => 响应拦截器 => 请求的回调

> 此流程是通过 promise 串连起来的, 请求拦截器传递的是 config, 响应 拦截器传递的是 response

请求拦截：

~~~js
axios.interceptors.request.use(
  (config) => {
    console.log('request interceptor1 onResolved()')
    return config
  },
  (error) => {
    console.log('request interceptor1 onRejected()')
    return Promise.reject(error)
  }
)
~~~

响应拦截：

~~~js
axios.interceptors.response.use(
  (response) => {
    console.log('response interceptor1 onResolved()')
    return response
  },
  (error) => {
    console.log('response interceptor1 onRejected()')
    return Promise.reject(error)
  }
)
~~~

## 拦截器运作流程

根据上述拦截器代码，可以得出以下流程：

![](https://pic.imgdb.cn/item/62f229a016f2c2beb1b3dde8.jpg)

根据流程可以解析为以下伪代码：

~~~js
/*
	假设我们有了两个请求/响应拦截器
	requestInterceptors: [{fulfilled1(){}, rejected1(){}}, {fulfilled2(){}, rejected2(){}}]
  responseInterceptors: [{fulfilled11(){}, rejected11(){}}, {fulfilled22(){}, rejected22(){}}]
  chain: [
    fulfilled2, rejected2, fulfilled1, rejected1,
    dispatchReqeust, undefined,
    fulfilled11, rejected11, fulfilled22, rejected22
  ]
  promise 链回调: config
                => (fulfilled2, rejected2) => (fulfilled1, rejected1)   // 请求拦截器处理
                => (dispatchReqeust, undefined) // 发请求
                => (fulfilled11, rejected11) => (fulfilled22, rejected22) // 响应拦截器处理
                => (onResolved, onRejected) // axios发请求回调处理
*/
~~~

## 取消请求

~~~js
let cancel // 用于保存取消请求的函数
function getProducts1() {
  // 如果是函数，
  if (typeof cancal === 'function')
    cancel('强制取消请求')
  axios({
    url: 'http://localhost:4000/products1',
    cancelToken: new axios.CancelToken((c) => { // c是用于取消当前请求的函数
      // 保存取消函数, 用于之后可能需要取消当前请求
      cancel = c
    })
  }).then(
    (response) => {
      cancel = null; console.log('请求1成功了', response.data)
    },
    (error) => {
      cancel = null; console.log('请求1失败了', error.message, error)
    }
  )
}
// 调用取消请求函数 可传入提示文本
function cancelReq() {
  if (typeof cancal === 'function')
    cancel('强制取消请求')
}
~~~

## 取消上一次请求

~~~js
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在准备发请求前, 取消未完成的请求
  if (typeof cancel === 'function')
    cancel('取消请求')

  // 添加一个cancelToken的配置
  config.cancelToken = new axios.CancelToken((c) => { // c是用于取消当前请求的函数
    // 保存取消函数, 用于之后可能需要取消当前请求
    cancel = c
  })
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    cancel = null
    return response
  },
  (error) => {
    if (axios.isCancel(error)) { // 取消请求的错误
      // cancel = null
      console.log('请求取消的错误', error.message) // 做相应处理
      // 中断promise链接
      return new Promise(() => {})
    }
    else { // 请求出错了
      cancel = null
      // 将错误向下传递
      // throw error
      return Promise.reject(error)
    }
  }
)
~~~

## Axios 源码分析

~~~
├── /dist/ ## 项目输出目录
├── /lib/ ## 项目源码目录
│ ├── /adapters/ ## 定义请求的适配器 xhr、http
│ │ ├── http.js ## 实现 http 适配器(包装 http 包)
│ │ └── xhr.js ## 实现 xhr 适配器(包装 xhr 对象)
│ ├── /cancel/ ## 定义取消功能
│ ├── /core/ ## 一些核心功能
│ │ ├── Axios.js ## axios 的核心主类
│ │ ├── dispatchRequest.js ## 用来调用 http 请求适配器方法发送请求的函数
│ │ ├── InterceptorManager.js ## 拦截器的管理器
│ │ └── settle.js ## 根据 http 响应状态，改变 Promise 的状态
│ ├── /helpers/ ## 一些辅助方法
│ ├── axios.js ## 对外暴露接口
│ ├── defaults.js ## axios 的默认配置
│ └── utils.js ## 公用工具
├── package.json ## 项目信息
├── index.d.ts ## 配置 TypeScript 的声明文件
└── index.js ## 入口文件
~~~

axios 与 Axios 的关系：

- 从语法上来说: axios 不是 Axios 的实例
- 从功能上来说: axios 是 Axios 的实例
- axios 是 Axios.prototype.request 函数 bind()返回的函数
- axios 作为对象有 Axios 原型对象上的所有方法, 有 Axios 对象上所有属性

### 运作整体流程

![](https://pic.imgdb.cn/item/62f2290b16f2c2beb1b13e8b.jpg)

整体流程：`request(config) ==> dispatchRequest(config) ==> xhrAdapter(config)`

- `request(config)`

将请求拦截器 | `dispatchRequest()` | 响应拦截器 通过 `promise` 链串连起来, 返回 `promise`

- `dispatchRequest(config)`

转换请求数据 ==> 调用 `xhrAdapter()` 发请求 ==> 请求返回后转换响应数据返回 `promise`

- `xhrAdapter(config)`

XHR 适配器，用于创建 XHR 对象, 根据 `config` 进行相应设置, 发送特定请求, 并接收响应数据, 返回 `promise`

### 取消未完成的请求

**当配置了 cancelToken 对象时, 保存 cancel 函数**

1. 创建一个用于将来中断请求的 cancelPromise
2. 并定义了一个用于取消请求的 cancel 函数
3. 将 cancel 函数传递出来

**xhr调用 cancel() 取消请求**

1. 执行 `cancel` 函数, 传入错误信息 `message`
2. 内部会让 `cancelPromise` 变为成功, 且成功的值为一个 Cancel 对象
3. 在 `cancelPromise` 的成功回调中中断请求, 并让发请求的 `promise` 失败, 失败的 `reason` 为 Cancel 对象