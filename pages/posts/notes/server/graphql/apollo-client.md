---
title: Apollo Client GraphQl 客户端方案
date: 2021-08-30
categories:
  - Server
  - GraphQL
tags: 
  - Apollo Client
---

Apollo Client 是一个全功能的 GraphQL 客户端解决方案，用于任何现代前端开发框架的交互。它允许你轻松通过 GraphQL 获取数据并构建 UI 组件。并支持与 VSCode 配合，支持从 GraphQL 服务器中读取信息从而实现代码提示。

<!-- more -->

## 基本使用

进行安装：

```sh
pnpm add @apollo/client graphql-tag
```

创建入口：

```ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// 创建 apollo 客户端
export const client = new ApolloClient({
  // 与 API 的 HTTP 连接
  link: createHttpLink({ uri: 'https://...' }),
  // 缓存实现
  cache: new InMemoryCache()
})
```

基本使用：

```ts
import gql from 'graphql-tag'
import { client } from '@/graphql/client'
const GET_TARGET_ORACLES = gql`
  query get_target_oracles($target: String) {
    oracles(first: 2, where: { target: $target }, orderBy: timeStamp, orderDirection: desc) {
      id
      price
      timeStamp
    }
  }
`
function getTargetOracles(target: string) {
  const { data } = await client.query({
    query: GET_TARGET_ORACLES,
    variables: { target }
  })
  return data
}
```


## 与 VSCode 配合

`Apollo GraphQL` 可以实现前端的代码提示。

![](https://pic.imgdb.cn/item/62f60b8a16f2c2beb1f2347b.jpg)

1. 安装 VSCode 扩展 `Apollo GraphQL`。

2. 配置 `apollo.config.js` 文件。

```js
module.exports = {
  service: {
    // 你的 app 名称
    name: 'my-app',
    // 你的 GraphQL 服务地址
    url: 'https://...',
    // 适用于项目目录的什么文件
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts']
  },
}
```


