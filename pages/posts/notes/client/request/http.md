---
title: HTTP 协议概述
categories:
  - Notes
  - Client
  - request
tags:
  - http
---

HTTP是一种用于获取诸如 HTML 文档之类的资源的协议。它是 Web 上任何数据交换的基础，它是一个客户端-服务器协议，这意味着请求由接收者发起，通常是 Web 浏览器。从提取的不同子文档（例如，文本、布局描述、图像、视频、脚本等）中重建完整的文档。

<!-- more -->

<HairyImage src="https://pic.imgdb.cn/item/62ecb0588c61dc3b8ed8edaf.jpg" />

1. 前后应用从浏览器端向服务器发送 HTTP 请求(请求报文)
2. 后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回 HTTP 响应(响应报文)
3. 浏览器端接收到响应, 解析显示响应体/调用监视回调

## 请求报文

**请求行**
- `method url`
- `GET /product_detail?id=2`
- `POST /login`

**请求头**
- `Host: www.baidu.com`
- `Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;`
- `Content-Type: application/x-www-form-urlencoded 或者 application/json`

**请求体** 
- `username=tom&pwd=123`
- `{"username": "tom", "pwd": 123}`

## 响应报文

**状态行**
- `status statusText`

**响应头** 
- `Content-Type: text/html;charset=utf-8` 
- `Set-Cookie: BD_CK_SAM=1;path=/`

**响应体**
- `html 文本/json 文本/js/css/图片...`

## 参数格式

- `Content-Type: application/x-www-form-urlencoded;charset=utf-8`
用于键值对参数：
```
name=xxx&age=12
```

- `Content-Type: application/json;charset=utf-8`
用于 json 字符串：
```
{"name": "xxx", "age": 12}
```

- `Content-Type: multipart/form-data`
文件上传请求，使用 from-data：
```js
const fromData = new FromData()
```

## 常见响应状态码

状态码一般由服务层决定，但不同服务之间有着不同约定，基本如下：

| 响应码 | 状态                  | 状态详情                            |
| ------ | --------------------- | ----------------------------------- |
| 200    | OK                    | 请求成功。一般用于 GET 与 POST 请求 |
| 201    | Created               | 已创建。成功请求并创建了新的资源    |
| 401    | Unauthorized          | 未授权/请求要求用户的身份认证       |
| 404    | Not Found             | 服务器无法根据客户端的请求找到资源  |
| 500    | Internal Server Error | 服务器内部错误，无法完成请求        |

## 请求类型

类型代表该请求的职责，但实际上依旧可以只使用 POST、GET，这由服务开发人员决定。

- GET:    从服务器端读取数据
- POST:   向服务器端添加新数据
- PUT:    更新服务器端已经数据
- DELETE: 删除服务器端数据

## REST API

REST API 是一个约定俗成的规则，它由实际服务开发人员决定，所以在实现上具有较大差异，基本共同点是：

- 发送请求进行 CRUD 哪个操作由请求方式来决定
- 同一个请求路径可以进行多个操作
- 请求方式会用到 GET|POST|PUT|DELETE

## Json Server

JSON-Server 是一个 Node 模块，运行 Express 服务器，可以指定一个 JSON 文件作为 API 的数据源。

```sh
npm install -g json-server
npm i cors express --save
```

`json-server` 可以直接把一个`json` 文件托管成一个具备全`RESTful`风格的`API`,并支持跨域、`jsonp`、路由订制、数据快照保存等功能的 web 服务器。

## 具体使用

1. 创建 `db.json` 数据源:

```json
{
  "course": [
    {
      "id": 1000,
      "course_name": "马连白米且",
      "autor": "袁明",
      "college": "金并即总变史",
      "category_Id": 2
    },
    {
      "id": 1001,
      "course_name": "公拉农题队始果动",
      "autor": "高丽",
      "college": "先了队叫及便",
      "category_Id": 2
    }
  ]
}
```
2. 托管 `db.json` 服务:

```sh
json-server --watch --port 53000 db.json
```

输出类似以下内容，说明启动成功。

```
/{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:53000/course

Home
http://localhost:53000

Type s + enter at any time to create a snapshot of the database
Watching...
```

此时，你可以打开你的浏览器，然后输入：http://localhost:53000/course


## 访问数据

~~~sh
http://localhost:53000/course/1000
~~~
