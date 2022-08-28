---
title: NodeJS 路径系统（path|url）
date: 2020-05-03 16:00:00
categories:
  - Notes
  - Server
  - NodeJS
tags: 
  - NodeJS
---

path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性,用来满足用户对路径的处理需求。

<!-- more -->

主要方法：

- 提取文件扩展名
	- `path.extname(path)`
- 拼接路径字符串
	- `path.join([...paths])`
	- `path.resolve([...paths])`
- 解析路径信息
	- `path.parse(path)`
	- `path.normalize(path)`

## 规范化路径（normalize）

路径解析，得到规范化的路径格式

```js
// 对window系统，目录分隔为'', 对于UNIX系统，分隔符为'/'，针对'..'返回上一级；/与\都被统一转换
// path.normalize(p);

var myPath = path.normalize(`${__dirname}/test/a//b//../c/utilyou.mp3`)
console.log(myPath) // windows: E:workspace/NodeJS/app/fs/test/ac/utilyou.mp3
```

## 路径合并（join）

路径结合、合并，路径最后不会带目录分隔符
```js
var path1 = 'path1'
var path2 = 'path2//pp'
var path3 = '../path3'
var myPath = path.join(path1, path2, path3)
console.log(myPath) // path1/path2/path3
```

## 绝对路径解析（resolve）

以应用程序为起点，根据参数字符串解析出一个绝对路径

```js
/**
 * path 必须至少一个路径字符串值
 * [pathn] 可选路径字符串
 */

var myPath = path.resolve('path1', 'path2', 'a/b\c/')
console.log(myPath)// E:workspace/NodeJS/path1/path2/abc
```

## 相对路径解析（relative）

```js
/**
 * from 当前路径，并且方法返回值是基于 from 指定到 to 的相对路径
 * to  到哪路径，
 */
var from = 'c:/from/a/'
var to = 'c:/test/b'
var _path = path.relative(from, to)
console.log(_path) // ....testb; 表示从from到to的相对路径
```

## 目录名称（dirname）

获取路径中目录名

```js
var myPath = path.dirname(`${__dirname}/test/util/you.mp3`)
console.log(myPath) // util
```

## 文件名称（basename）

获取路径中文件名,后缀是可选的，可以使用'.ext'方式来匹配，则返回值中不包括后缀名；

```js
var myPath = path.basename(`${__dirname}/test/util you.mp3`, '.mp3')
console.log(myPath)
```

## 其他方法

- 扩展名称：`path.extname(path)`
- 系统文件分隔符：`path.sep`
- 系统目录分隔符：`path.delimiter`

## 地址解析（url）

NodeJS 除此之外还预留了 url 模块，但已弃用状态，目前使用全局的 `URL` 替代：

~~~javascript
const URL_Info = new URL('https://translate.google.cn/?search=6#view=home');
console.log(URL_Info)
// ===>
URL {
  href: 'https://translate.google.cn/?#view=home/search=6', 	// 地址
  origin: 'https://translate.google.cn', 	// 根路径地址
  protocol: 'https:',		// 请求协议
  username: '',		// 邮箱用户名部分
  password: '',		// 邮箱密码部分
  host: 'translate.google.cn',	// URL主机部分(包含端口)
  hostname: 'translate.google.cn',		// URL主机部分(不包含端口)
  port: '',		// URL端口部分
  pathname: '/',	// URL路径部分
  search: '?search=6',	// URL查询字符串部分
  searchParams: URLSearchParams { 'search' => '6' },	// // URL查询字符串组成的对象
  hash: '#view=home'	// 田子码符串部分
}
~~~

~~~javascript
const url = require('url')
url.parse('/search?title=helloWord')
// ===>
/search?title=helloWord Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?title=helloWord',
  query: 'title=helloWord',
  pathname: '/search',
  path: '/search?title=helloWord',
  href: '/search?title=helloWord'
}
~~~