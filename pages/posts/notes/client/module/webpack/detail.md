---
title: Webpack 详细配置
categories:
  - Notes
  - Client
  - webpack
tags:
  - webpack
date: 2019-10-10 16:00:00
---

## 主入口(entry)

`entry: './src/index.js'`

打包形成一个`chunk`，输出一个`bundle`文件。此时 chunk 的名称默认是 `main`。

`entry: ['./src/index.js', './src/add.js']`

所有接口文件最终只会形成一个`chunk`, 输出一个`bundle`文件。在用 `HMR` 热加载的时候，让 `html` 生效的时候加上`html` 文件的路径，此时 `chunk` 的名称是`main`。

`entry: { key: value, key: value }`

有几个入口文件就形成几个`chunk`，输出几个`bundle`文件， 此时`chunk`的名称是 `key`

<!-- more -->

组合使用：
~~~json
{
  "entry": {
    "index": [".src/index.js", "/src/count.js"],
    "add": "./src/add.js"
  }
}
~~~

## 输出配置(output)

- filename：文件名称（指定名称+目录）
 `filename: 'js/[name].js'`

- path：输出文件目录（将来所有资源输出的公共目录）
`path: resolve(__dirname, 'build')`

- publicPath：所有资源引入公共路径前缀
 `publicPath: '/'`

- chunkFilename：chunk 文件的名称
 `chunkFilename: 'js/[name]_chunk.js'`

- library：输出库向外暴露的变量名
 `library: '[name]'`

- libraryTarget：库暴露变量目标
  - `libraryTarget: 'window'  （browser）
  - `libraryTarget: 'global'  （node）
  - `libraryTarget: 'commonjs'（common）

## 加载器(loader)

`module: { rules: [loader...] }`

~~~javascript
// 多个 loader
{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
// 单个 loader
{ test: /\.css$/, use: 'eslint-loader' },
// 排除文件
{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader' },
// 包含文件(仅作用于)
{ test: /\.js$/, include: resolve(__dirname, 'src'), loader: 'eslint-loader' },
// 执行顺序：pre 优先执行，post 延后执行
{ test: /\.js$/, enforce: 'pre', loader: 'eslint-loader' },
// 配置项(默认传入 loader 处理, 统一是 options)
{ test: /\.js$/, options:{/* ... */} }
~~~

仅生效一个 loader：`{oneOf:[loader...]}`

## 解析器(resolve)

`resolve:{....}`

提供简写前缀路径。

~~~javascript
// webpack.config.ts -> resolve: { alias:{...} }
// index.js
import '$css/index.css'
alias: { $css: resolve(__dirname, 'src/css') }
~~~

省略文件后缀。

~~~javascript
// webpack.config.ts -> resolve: { extensions:[...] }
// index.js
import '$css/index'
extensions: ['.js', '.json', '.jsx', '.css']
~~~

配置多个模块目录（慎用）

~~~javascript
// webpack.config.ts -> resolve{ modules:[...] }
modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
~~~

## 开发服务(devServer)

- contentBase：运行代码的目录
`contentBase: resolve(__dirname, 'build')`

- compress：启动gzip压缩
`compress: true`

- port：端口号
`port: 5000`

- open：自动打开浏览器
`open: true`

- hot：开启热加载(hot)
`hot: true`

- clientLogLevel：不要显示启动服务器日志信息
`clientLogLevel: 'none'`

- overlay：如果出错了，不要全屏提示~
`overlay: false`

- quiet：除了一些基本启动信息以外，其他内容都不要显示
`quiet: true`

- watchContentBase：是否监视 contentBase 目录，一旦文件变化就会 reload
`watchContentBase: true`

- watchOptions：忽略监视文件
`watchOptions: { ignored:'/node_modules' }`

服务器代理（解决开发环境跨域）

~~~javascript
proxy: { // 一旦devServer(5000)服务器接受到 /api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
  '/api': {
    // 发送请求时，请求路径重写：将 /api/xxx --> /xxx （去掉/api）
    target: 'http://localhost:3000',
    pathRewrite: { '^/api': '' }
  }
}
~~~

## 分割代码(splitChunks)

`optimization: { splitChunks: {....} }`

用于分析多入口 chunk 中，有没有公共的文件。如果有会打包成单独一个 chunk

- chunks：选择哪些块进行优化
`chunks:''`

> 这表明将选择哪些块进行优化。当提供一个字符串，有效值为 `all`，`async` 和 `initial`。提供 `all` 可能会特别大，因为它意味着即使在异步和非异步块之间也可以共享块。

- minSize：分割chunk最小值
`minSize: 30 * 1024`

- maxSiza：分割chunk最大值
`maxSiza: 0` // 0表示最大没有限制

- minChunks：提取chunk最少被引入多少次
`minChunks: 1`

- maxAsyncRequests：按需加载时并行加载的文件的最大数量
`maxAsyncRequests: 5`

- maxInitialRequests：入口 js 文件最大并行请求数量
`maxInitialRequests: 3`

- automaticNameDelimiter：名称连接符
`automaticNameDelimiter: '~'`

- name：可以使用命名规则
`name: true`

## 划分分割组(cacheGroups)

`optimization: { splitChunks: { cacheGroups:{....} } }`

`node_modules`文件会被打包到 `vendors` 组的`chunk`中。`--> vendors~xxx.js`，并且需要满足公共规则，如：大小超过30kb，至少被引用一次。

~~~javascript
cacheGroups: { // 分割chunk的组
  // test：正则，priority：优先级
	vendors: { test: /[\\/]node_modules[\\/]/, priority: -10 },
  // minChunks：要提取的chunk最少被引用次数，priority：优先级
  // euseExistingChunk：如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
	default: { minChunks: 2,priority: -20, euseExistingChunk: true }
}
~~~

## 解决ChunkHash变化(runtimeChunk)

optimization.runtimeChunk 将当前模块的记录其他模块的 hash 单独打包为一个文件，可以解决修改 a 文件导致 b 文件的 `contenthash` 变化。

~~~javascript
runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` }
~~~

## 压缩器(minimizer)

配置生产环境的压缩方案 `optimization: {minimizer:[.....]}`

~~~javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 配置生产环境的压缩方案：js 和 css
new TerserWebpackPlugin({
  // 开启缓存
  cache: true,
  // 开启多进程打包
  parallel: true,
  // 启动 source-map
  sourceMap: true
})
~~~
