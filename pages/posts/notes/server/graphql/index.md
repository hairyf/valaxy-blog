---
title: GraphQL 数据库查询语言
date: 2021-08-28
categories:
  - Server
  - GraphQL
tags: 
  - GraphQL
---

GraphQL 是一种针对 Graph（图状数据）进行查询特别有优势的 Query Language（查询语言），所以叫做 GraphQL。它跟 SQL 的关系是共用 QL 后缀，就好像「汉语」和「英语」共用后缀一样，但他们本质上是不同的语言。GraphQL 跟用作存储的 NoSQL 没有必然联系，虽然 GraphQL 背后的实际存储可以选择 NoSQL 类型的数据库，但也可以用 SQL 类型的数据库，或者任意其它存储方式（例如文本文件、存内存里等等）。

<!-- more -->

## 标量类型（Scalar Types）

一个对象类型有自己的名字和字段，而某些时候，这些字段必然会解析到具体数据。这就是标量类型的来源：它们表示对应 GraphQL 查询的叶子节点。

GraphQL 自带一组默认标量类型：

- Int：有符号 32 位整数。
- Float：有符号双精度浮点值。
- String：UTF‐8 字符序列。
- Boolean：true 或者 false。
- ID：ID 标量类型表示一个唯一标识符，通常用以重新获取对象或者作为缓存中的键。ID 类型使用和 String 一样的方式序列化；然而将其定义为 ID 意味着并不需要人类可读型。
大部分的 GraphQL 服务实现中，都有自定义标量类型的方式。例如，我们可以定义一个 Date 类型：

~~~graphql
scalar Date
~~~

然后就取决于我们的实现中如何定义将其序列化、反序列化和验证。例如，你可以指定 Date 类型应该总是被序列化成整型时间戳，而客户端应该知道去要求任何 date 字段都是这个格式。

## web 开发框架（express-graphql）

graphql 可以和流行的 nodejs 开发框架结合使用，当然也不局限于 express 的实现，例如 koa，nest 等。

~~~js
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

// 1. 使用 GraphQL schema 语法构建一个 schema
const schema = buildSchema(`
  type Query {
    foo: String
    count: Int
  }
`)

// 2. 定义 schema 的 resolver
const root = {
  foo: () => 'bar',
  count: () => 123
}

// 3. 挂载 GraphQL 中间件
app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }))

// 4. 启动服务器
app.listen(3203, () => console.log('Now browse to localhost:3203/graphql'))
~~~

## 定义服务端 schema 与类型

客户端的 schema 用于定义查询类型的映射，需要相应的实现。

这里只做一个基本的语法，更多语法与功能可参考官方文档的 [Schema 和类型](https://graphql.cn/learn/schema/)。

### Query language

~~~graphql
type Article {
  id: ID!
  title: String!
  body: String!
  tags: [String!]
}
# 查询的入口
type Query {
  # [type] 代表这个的数组
  # [type!] 代表数组元素不能为空(null)
  articles: [Article!]
  # 传入参数, 以及传入多个参数
  # 查询语句为 article(id: "1", ...) { title }
  article(id: ID!, title: String): Article
}
~~~

### Mutation language

~~~graphql
# 参数对象必须使用 Input 定义
input CreateArticleInput {
  title: String!
  body: String!
}
input UpdateArticleInput {
  title: String!
  body: String!
}
type DeletionStatus {
  success: Boolean!
}
# 添加|修改|删除的入口
type Mutation {
  createArticle(article: CreateArticleInput): Article
  updateArticle(id: ID!, article: UpdateArticleInput): Article
  deleteArticle(id: ID!): DeletionStatus
}
~~~

## 定义客户端查询与更改

服务端定义 schema 用于增删改查的实现，调用后端对应的实现，这里需要注意的是，客户端中 GraphQL 请求方法必须是 POST。

这里只做一个基本的语法，更多语法与功能可参考官方文档的 [查询和变更](https://graphql.cn/learn/queries/)。

### 简单数据查询

~~~js
// post data: 查询数据
{
  query: `
	{
        foo
        count
	}
  `
}
~~~

### 查询数据参数

~~~js
// post data: 查询传参, 与定义别名
{
  query: `
    query getArticles {
      article(id: ${1}) {
        id
        title
      }
    }
  `
}
~~~

### 标识符传参

~~~javascript
// post data: 查询传参(标识符传参)
{
  query: `
    query getArticles($id: ID!) {
      article(id: $id) {
        id
        title
      }
    }
  `,
  variables: { id: 1 }
}
~~~

### 增删改查

~~~javascript
// post data: 创建传参
{
  query: `
    mutation updateArticle($id: ID!, $article: UpdateArticleInput) {
      article(id:$id, article: $article) {
        id
        title
      }
    }
  `,
  variables: {
    id: 1,
    article: { title: 'aaa', body: 'bbb' }
  }
}
// post data: 修改传参, 与创建时传参一致的语法
// post data: 删除传参, 与创建时传参一致的语法
~~~

