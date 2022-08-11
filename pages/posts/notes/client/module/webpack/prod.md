---
title: Webpack 生产环境
categories:
  - Notes
  - Client
  - webpack
tags: 
  - webpack
---

## 提取样式文件(CSS)

```sh
npm i mini-css-extract-plugin -D
```

~~~js
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入CSS提取文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: { filename: 'js/built.js', path: resolve(__dirname, 'build') },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 提取 webpack 中的 css 成单独文件
          MiniCssExtractPlugin.loader,
          // 合并 css 存入 webpack
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 自动解析打包内容并复制解析创建 html
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // 设置 css 文件结构与名字
    new MiniCssExtractPlugin({ filename: 'css/built.css' })
    // 当 html 创建时会自动引入 css 独立文件
  ]
}
~~~

<!-- more -->

## 兼容性处理(CSS)

```sh
npm i postcss-loader postcss-preset-env -D
```

postcss-preset-env 可以帮 `postcss` 找到`package.json`中`browserslist`里面的配置，通过配置加载指定兼容的浏览器，详细配置：[environment-variables](https://github.com/browserslist/browserslist#environment-variables)，

~~~json
{
  "browserslist": {
    // 开发环境
    "development": [
      // 兼容开发常用浏览器最近的一个版本
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    // 生产环境
    "production": [
      // 兼容覆盖率大于0.2%的人使用的浏览器
      ">0.2%",
      // 兼容没有死掉的浏览器
      "not dead",
      // 兼容除了OperaMini的浏览器
      "not op_mini all"
    ]
  }
}
~~~

配置 `config` 接口文件(webpack.config.js)

~~~js
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置是否是开发环境兼容，如果没有设置，默认是生产环境
// process .env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  output: { filename: 'js/built.js', path: resolve(__dirname, 'build') },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { // 设置使用postcss-preset-env插件过滤兼容
              ident: 'postcss',
              plugins: () => [require('postcss-preset-env')()]
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'css/built.css' })
  ],
}
~~~

## 压缩样式(CSS)

```sh
npm i optimize-css-assets-webpack-plugin -D
```

配置 `config` 接口文件(webpack.config.js)

```js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    // ...
    // 进行CSS压缩
    new OptimizeCssAssetsWebpackPlugin()
  ]
}
```

## 语法检测(JavaScript)

```sh
npm i eslint eslint-loader eslint-config-airbnb-base  eslint-plugin-import -D
```

~~~javascript
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {filename: 'js/built.js',path: resolve(__dirname, 'build')},
  mode: 'development',
  module: {rules: [
      {	test: /\.js$/,
        exclude: /node_modules/,
       	enforce: 'pre', // 优先处理
        loader: 'eslint-loader',
        options: {fix: true}// 自动修复eslint的错误
      }
  ]},
  plugins: [ new HtmlWebpackPlugin({template: './src/index.html'})]
};
~~~

设置 eslint 编码风格(package.json)

~~~json
{
  "eslintConfig": {
    "extends": "airbnb-base",
    "env": { "browser": true }
  }
}
~~~

## 兼容性处理(JavaScript)

```sh
npm i babel-loader @babel/preset-env @babel/core -D
```

- @babel/preset-env

包含基本 js 兼容性转换、但不支持 promise 等高级语法的转换

- @babel/polyfill

将所有兼容性代码全部引入，但体积太大了，所以这里不采用。

- @babel/core

提供设置 `core-js` 兼容版本导出配置。

---

配置 `config` 接口文件(webpack.config.js)

~~~js
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: { filename: 'js/built.js', path: resolve(__dirname, 'build') },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel-loader',
      options: {
        presets: [[
          '@babel/preset-env',
          {
            useBuiltIns: 'usage', // 按需加载
            corejs: { version: 3 }, // 指定core-js版本
            // 指定从哪个浏览器版本开始做兼容性处理
            targets: {	chrome: '60', firefox: '60', ie: '9', safari: '10', edge: '17' }
          }
        ]]
      },
    }]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}
~~~

## 代码压缩(JavaScript)

生产环境下会自动压缩 js 代码，所以只要将 mode 设置为 `production` 即可。

~~~js
module.exports = {
  mode: 'production'
}
~~~

## 代码压缩(HTML)

~~~js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
}
~~~

## 完整配置

devDependencies

- webpack
- webpack-cli
- css-loader
- less-loader
- less
- html-webpack-plugin
- mini-css-extract-plugin
- postcss-loader
- postcss-preset-env
- optimize-css-assets-webpack-plugin
- eslint
- eslint-loader
- eslint-config-airbnb-base
- eslint-plugin-import
- babel-loader
- @babel/preset-env
- @babel/core
- core-js
- html-loader
- url-loader
- file-loader

~~~js
// 绝对路径拼接相对路径方法
const { resolve } = require('path')
// 引入webpack打包HTML文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入webpack提取CSS为文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入webpack压缩CSS文件的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 共用处理css数组
const cssLoaders = [
  // 提取css字符串为单独css文件
  MiniCssExtractPlugin.loader,
  // 合并css存入webpackjs为字符串
  'css-loader',
  // css兼容处理
  {
    loader: 'postcss-loader',
    options: { ident: 'postcss', plugins: [require('postcss-preset-env')] }
  }
]
module.exports = {
  // 接口js文件相对路径
  entry: './src/js/index.js',
  // 输出文件设置
  output: { filename: 'js/built.js', path: resolve(__dirname, 'build') },
  // 生产模式 自动压缩js
  mode: 'production',
  // 插件设置
  module: {
    rules: [
      // 处理css
      { test: /\.css$/, use: [...cssLoaders] },
      // 处理less
      { test: /\.less$/, use: [...cssLoaders, 'less-loader'] },
      // js语法检测
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre', // 优先处理
        loader: 'eslint-loader',
        options: { fix: true } // 自动修复js语法错误
      },
      // JS兼容性处理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            '@babel/preset-env',
            // 设置按需加载兼容性处理
            {
              useBuiltIns: 'usage',
              corejs: { version: 3 },
              targets: { // 指定从哪个浏览器版本开始做兼容性处理
                chrome: '60',
                firefox: '60',
                ie: '9',
                safari: '10',
                edge: '17'
              }
            }
          ]]
        }
      },
      // 处理 htmlSrcImg 资源
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: { limit: 8 * 1024, esModule: false, name: '[hash:10].[ext]' }
      },
      // 处理其他资源
      {
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: { name: '[hash:10].[ext]' }
      }
    ]
  },
  plugins: [
    // 自动解析打包内容并复制解析创建html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { // 压缩html代码
        collapseWhitespace: true, // 移除空格
        removeComments: true // 移除注释
      }
    }),
    // 设置CSS文件结构与名字
    new MiniCssExtractPlugin({ filename: 'built.css' }),
    // 进行CSS文件压缩
    new OptimizeCssAssetsWebpackPlugin()
  ]
}
~~~

