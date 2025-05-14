---
title: Apollo Server GraphQL Web 开发框架
date: 2021-08-29
categories:
  - Notes
  - Server
  - GraphQL
tags:
  - Apollo Server
---

apollo-server 来自于 Apollo 的一套 GraphQL server 包，可用于多种 Node.js HTTP 框架（Express，Connect，Hapi，Koa 等）。

以及拥有客户端中的实现，如：[Apollo Client](http://apollographql.com/client/) ([github](https://github.com/apollographql/apollo-client))

<!-- more -->

~~~ts
import type { Config } from 'apollo-server'
import { ApolloServer, gql } from 'apollo-server'

// 在 apollo-server 中定义 schema 使用 gql``
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`

const books = [
  { title: 'The Awakening', author: 'Kate Chopin' },
  { title: 'City of Glass', author: 'Paul Auster' }
]

// 在 apollo-server 中定义 resolvers, 及查询与更改的实现
// 这里需要注意, apollo-server 与官方的 gql 定义是有区别的
// 原生: 不需要 Query 包多一层对象
// apollo-server: 需要 Query 包多一层对象
const resolvers: Config['resolvers'] = {
  Query: {
    books: () => books
  }
}

// 创建一个 ApolloServer 服务器, 传入 typeDefs, resolvers
const server = new ApolloServer({ typeDefs, resolvers })

// 开启一个服务端, 监听端口号和 url
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
~~~

## web 开发框架（apollo-server）

~~~ts
import express from 'express'
import type { Config } from 'apollo-server-express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`

const books = [
  { title: 'The Awakening', author: 'Kate Chopin' },
  { title: 'City of Glass', author: 'Paul Auster' }
]

const resolvers: Config['resolvers'] = {
  Query: {
    books: () => books
  }
}

async function createServer() {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers })
  // 在调用 server.applyMiddleware 前必须得调用 start
  await server.start()
  server.applyMiddleware({ app })
  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  return { app, server }
}

createServer()
~~~

## resolvers 中的参数

~~~ts
const resolvers: Config['resolvers'] = {
  Query: {
    // parent: 上层链的返回结果
    // args: 客户端的查询参数
    // context: ApolloServer 的全局上下文
    // info: ???
    user(parent, args, context, info) {
      return users.find(user => user.id === args.id)
    }
  }
}
~~~

## resolvers 的解析链

参考文章：https://www.apollographql.com/docs/apollo-server/data/resolvers/#example

~~~ts
import type { Config } from 'apollo-server-express'
import { gql } from 'apollo-server-express'
import { createApolloServer } from './_utils'

const typeDefs = gql`
  # A library has a branch and books
  type Library {
    branch: String!
    books: [Book!]
  }

  # A book has a title and author
  type Book {
    title: String!
    author: Author!
  }

  # An author has a name
  type Author {
    name: String!
  }

  type Query {
    libraries: [Library]
  }
`

const libraries = [
  {
    branch: 'downtown'
  },
  {
    branch: 'riverside'
  }
]

// The branch field of a book indicates which library has it in stock
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    branch: 'riverside'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    branch: 'downtown'
  }
]

const resolvers: Config['resolvers'] = {
  Query: {
    libraries() {
      // Return our hardcoded array of libraries
      return libraries
    }
  },
  Library: {
    books(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return books.filter(book => book.branch === parent.branch)
    }
  },
  Book: {
    // The parent resolver (Library.books) returns an object with the
    // author's name in the "author" field. Return a JSON object containing
    // the name, because this field expects an object.
    author(parent) {
      return { name: parent.author }
    }
  }

  // Because Book.author returns an object with a "name" field,
  // Apollo Server's default resolver for Author.name will work.
  // We don't need to define one.
}

createApolloServer({ typeDefs, resolvers })
~~~

## resolvers context

~~~ts
import type { Config } from 'apollo-server-express'
import { gql } from 'apollo-server-express'
import { createApolloServer } from './_utils'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`

const books = [
  { title: 'The Awakening', author: 'Kate Chopin' },
  { title: 'City of Glass', author: 'Paul Auster' }
]

const resolvers: Config['resolvers'] = {
  Query: {
    books: (parent, args, context) => {
      console.log(context) // { foo: 123 }
      return books
    }
  }
}

createApolloServer({
  typeDefs,
  resolvers,
  context: (req) => {
    return { foo: 123 }
  }
})
~~~

## custom directives

~~~ts
import { ApolloServer, gql } from 'apollo-server-express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { MapperKind, SchemaMapper, getDirective, mapSchema } from '@graphql-tools/utils'
import type { GraphQLSchema } from 'graphql'
import { defaultFieldResolver } from 'graphql'
import { createApolloServer } from './_utils'

// Our GraphQL schema
const typeDefs = gql`
  directive @upper on FIELD_DEFINITION

  type Query {
    hello: String @upper
  }
`

// Our resolvers (notice the hard-coded string is *not* all-caps)
const resolvers = {
  Query: {
    hello() {
      return 'Hello World!'
    }
  }
}

// 添加自定义指令'转换字段为大写'
// 到具有指令的对象字段的每个解析器
// 指定指令名称 `upper`
function upperDirectiveTransformer(schema: GraphQLSchema, directiveName: string) {
  return mapSchema(schema, {
    // 对 schema 中的每个对象字段都会执行
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      // 检查这个字段是否有指定的指令
      if (!getDirective(schema, fieldConfig, directiveName)?.[0]) {
        console.warn(`warn: this directive '${directiveName}' already exists.`)
        return fieldConfig
      }

      // 获取该字段的原始解析器
      const { resolve = defaultFieldResolver } = fieldConfig

      // 自定义调用函数替换原始解析器
      // 调用原始解析器, 然后将其结果转换为大写
      fieldConfig.resolve = async function (source, args, context, info) {
        const result = await resolve(source, args, context, info)
        if (typeof result === 'string')
          return result.toUpperCase()

        return result
      }
    }
  })
}

// Create the base executable schema
let schema = makeExecutableSchema({ typeDefs, resolvers })

// Transform the schema by applying directive logic
schema = upperDirectiveTransformer(schema, 'upper')
createApolloServer({ schema })
~~~
