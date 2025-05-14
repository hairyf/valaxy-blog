---
title: Webpack 开发环境
categories:
  - Notes
  - Client
  - webpack
tags:
  - webpack
date: 2019-10-09 15:00:00
---

用于在 dev 模式中的配置（loader、plugin）提供开发服务器、HOT 热更新、编译捆绑 less、css、javascript 或其他资源。

<!-- more -->

## 样式处理(style)

```sh
npm i css-loader style-loader less-loader less -D
```

源文件：

~~~javascript
import './index.css'
import './index.less'
~~~

配置 `config` 接口文件(webpack.config.js)

~~~js
// resolve用来拼接绝对路径的方法
const { resolve } = require('node:path')
module.exports = {
  entry: './src/index.js', // 接口js
  output: {}, // 输出配置
  mode: 'development', // 开发模式
  // module{rules}插件配置的集合
  module: {
    rules: [ // rules是loader配置
      {
        test: /.css$/,
        // 配置所需的 loader 插件进行处理
        // 执行顺序：从右到左，从下到上依次执行
        use: ['style-loader', 'css-loader'],
        // css-loader: 将css文件变成commonjs模块加载js中，里面内容是样式字符串
        // style-loader: 创建style标签,将js中的样式字符串资源插入行,添加到head中生成
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // less-loader: 将less编译为css,然后在通过 css-loader,style-loader创建的style标签插入head中
      }
    ]
  }
}
~~~

**运行指令**： `webpack`

## 标签处理(html)

```sh
npm i html-webpack-plugin -D
```

特征：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）

配置 `config` 接口文件(webpack.config.js)

~~~js
// resolve用来拼接绝对路径的方法
const { resolve } = require('node:path')
// 引入webpack html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {/* ... */},
  mode: 'development',
  module: { rules: [/* ... */] },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
    })
  ],
}
~~~

**运行指令**： `webpack`

## 资源处理(img)

```sh
npm install html-loader url-loader file-loader --save-dev
```

- **html-loader**：将HTML导出为字符串
- **url-loader**： 将HTML中的url链接文件调用`file-loader`进行预处理
- **file-loader**：将文件进行预处理

配置 `config` 接口文件(webpack.config.js)

~~~js
const { resolve } = require('node:path')
module.exports = {
  entry: './src/index.js',
  output: {/* ... */},
  mode: 'development',
  module: {
    rules: [
      { test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 解析 html 为字符串，这样操作 html 标签的方法才能拿到数据
      {	test: /.html$/, loader: 'html-loader' },
      // 处理 html 字符串中 url 链接的 jpg|png|gif 文件
      {
        test: /.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
        // 当文件小于多少时转换为 base64-uri
          limit: 8 * 1024,
          // html-loader 的数据是用 commonjs 定义的，但是 url-loader 是用 ES6 解析的，
          // 所以要将 url-loader 的解析模式设置，为 commonjs 模块解析，这样 url-loader 才能拿到数据
          // esModule: false 关闭 ES6 模块解析，开启commonjs模块解析
          esModule: false,
          // 给处理过的文件重新命名，哈希值前10位.文件后缀
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  // 复制处理后的html到指定位置,并自动引入打包输出
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}
~~~

**运行指令**： `webpack`

## 其他资源(other)

~~~js
const { resolve } = require('node:path')
module.exports = {
  entry: './src/index.js',
  output: {/* ... */},
  mode: 'development',
  module: {
    rules: [
    // 处理css
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
      {
        exclude: /.(css|js|html|less|jpg|png|gif)$/, // 排除资源
        loader: 'file-loader',
        options: { name: '[hash:10].[ext]' } // 资源重命名
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}
~~~

## 开发服务(server)

```sh
npm i webpack webpack-dev-server --save-dev
```

特征：

- 自动编译，自动打开浏览器，自动刷新浏览器
- 编译时只会在内存中编译打包，不会有任何输出

配置 `config` 接口文件(webpack.config.js)

~~~js
const { resolve } = require('node:path')
module.exports = {
  entry: './src/index.js',
  output: {/* ... */},
  mode: 'development',
  module: {
    rules: [
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
      { exclude: /.(css|js|html|less)$/, loader: 'file-loader', options: { name: '[hash:10].[ext]' } }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩,可以提升运行速度
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}
~~~

> hot 模块只在本地的 webpack 的目录下查找，找不到就报错，全局安装 webpack 也不行，所以必须得在局部安装。

## 完整配置

devDependencies

- webpack
- webpack-cli
- webpack-dev-server
- html-loader
- url-loader
- file-loader
- css-loader
- style-loader
- less-loader
- less
- html-webpack-plugin

~~~js
// 内置核心模块, 用于拼接绝对路径与相对路径
const { resolve } = require('node:path')
// 打包html方法
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口文件
  entry: './src/js/index.js',
  // 输出文件
  output: { filename: './built.js', path: resolve(__dirname, 'build') },
  // 开发模式
  mode: 'development',
  module: {
    rules: [
      { // 打包 css
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      { // 编译 less
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      { // 解析 html 为字符串
        test: /.html$/,
        loader: 'html-loader'
      },
      { // 处理 html 字符串的图片 url,并打包图片
        test: /.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: { limit: 8 * 1024, esModule: false, name: '[hash:10].[ext]' }
      },
      { // 处理打包其他资源
        exclude: /.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: { name: '[hash:10].[ext]' }
      }
    ]
  },
  // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  // 开发服务器(devServer)配置
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
}
~~~

**打包输出到文件夹**：`webpack`
**内存编译运行项目**：`webpack-dev-server [--host 0.0.0.0]`
