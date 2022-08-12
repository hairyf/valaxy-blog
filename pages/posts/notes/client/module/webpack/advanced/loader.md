---
title: 自定义 webpack loader
categories:
  - Notes
  - Client
  - webpack
tags: 
  - webpack
date: 2019-11-10 14:00:00
---

webpack作为前端项目的打包工具，具有很好的学习价值。Loader 可以帮助 webpack 将不同类型的文件转换为 webpack 可识别的模块。

<!-- more -->

~~~js
// webpack.config.ts
import path from 'path'
import type { Configuration } from 'webpack'
import { LoaderDefinition } from 'webpack'
const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'loader-1'
      }
    ]
  },
  entry: './src/index.js',
  // 配置 loader 的解析规则
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  }
}

export default config
~~~

定义 loading：

~~~js
// loaders/loader-1.js
module.exports = function (content, map, meta) {
  // content 打印编译文件内容
  return content
}
~~~

## 执行的顺序

~~~js
// loaders 的执行顺序默认是从下往上执行
module.exports = async function (content) {
}
// loaders pitch 则从上往下执行
module.exports.pitch = function () {
}
~~~

## 配置与校验

- webpack loader 参数通过 loader-utils 获取
- webpack loader 参数通过 schema-utils 校验

定义 loader：

~~~js
const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: '名称~'
    },
    // 是否允许追加属性
    additionalProperties: true
  }
}

module.exports = async function (content) {
  // 获取配置
  const options = getOptions(this)
  // 校验配置
  validate(schema, options, {
    name: '我是 loader-3 的 name 字段'
  })
}
~~~

配置 loader：

~~~js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'loader-3',
            options: { name: '' }
          }
        ]
      }
    ]
  }
}
~~~

## 与 babel-loader 配合

使用 babel 写一个 webpack loader，将配置传递到 babel transform 配置中，转换并返回 code。

定义 loader：

~~~js
// loaders/babel-loader.js
const { promisify } = require('util')
const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const babel = require('@babel/core')

// node async callback to promise function
const transform = promisify(babel.transform)

// options validate schema
const schema = {
  type: 'object',
  properties: {
    presets: { type: 'array' }
  },
  addtionalProperties: true
}

module.exports = async function (content, _map, _meta) {
  // 获取 loader 的 options 配置
  const options = getOptions(this) || {}
  // 校验 loader 的 options 配置
  validate(schema, options, { name: 'Babel Loader' })

  // transform content
  const { code, map } = await transform(content, options)

  // call return code
  this.callback(null, code, map, _meta)
}
~~~

~~~js
// webpack.config.ts
import path from 'path'
import type { Configuration } from 'webpack'
import { LoaderDefinition } from 'webpack'

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  mode: 'production',
  entry: './src/index.js',
  // 配置 loader 的解析规则
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  }
}
export default config
~~~