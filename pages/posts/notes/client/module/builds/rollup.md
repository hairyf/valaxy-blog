---
title: Rollup - JavaScript 模块打包器
date: 2021-10-02
categories:
  - Notes
  - Client
  - bundler
tags:
  - grunt
---

Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

> 官方简述：Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。

可以看出 rollup 是以 ES6 模块化为基调的打包工具，rollup 可以支持 ES6 模块转换为 iife、cjs、umd 模块，支持打包后 浏览器、Node 环境运行，使用 [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs) 还可以导入 commonjs 模块。

<!-- more -->

## Rollup vs Webpack

`Webpack`对于代码分割和静态资源导入有着“先天优势”，并且支持热模块替换(HMR)，而`Rollup`并不支持，所以当项目需要用到以上，则可以考虑选择`Webpack`。

`Rollup` 对于代码的 `Tree-shaking` 和 `ES6` 模块有着算法优势上的支持，若你项目只需要打包出一个简单的 `bundle` 包，并是基于 `ES6` 模块开发的，可以考虑使用 `Rollup`

其实`Webpack`从`2.0`开始已经支持`Tree-shaking`，并在使用`babel-loader`的情况支持了`es6 module`的打包

但是`Rollup`并没有被抛弃，反而因其简单的API、使用方式被许多库开发者青睐，如`React`、`Vue`等，都是使用`Rollup`作为构建工具的。

## 基本使用

使用 `npm install --global rollup` 进行安装。Rollup 可以通过[命令行接口(command line interface)](https://github.com/rollup/rollup/wiki/Command-Line-Interface)配合可选配置文件(optional configuration file)来调用，或者可以通过 [JavaScript API](https://github.com/rollup/rollup/wiki/JavaScript-API)来调用。运行 `rollup --help` 可以查看可用的选项和参数。

假设应用程序入口起点的名称为 main.js，并且你想要所有 import 的依赖(all imports)都编译到一个名为 bundle.js 的单个文件中。

对于浏览器：

```bash
# 编译为包含自执行函数的 <script> ('iife')
$ rollup main.js --file bundle.js --format iife
```

对于 Node.js:

```bash
# 编译为 CommonJS 模块 ('cjs')
$ rollup main.js --file bundle.js --format cjs
```

对于浏览器和 Node.js:

```bash
# UMD 格式需要一个包名
$ rollup main.js --file bundle.js --format umd --name "myBundle"
```

除此之外，`Rollup` 上面的打包 `--format` 还支持这些选项 `amd`、`cjs`、`system`、`es`、`iife`、`umd`

## Config API

上面的命令行方式还不错，但是如果添加更多的选项，这种命令行的方式就显得麻烦了。

为此，我们可以创建配置文件来囊括所需的选项。配置文件由 JavaScript 写成，比 CLI 更加灵活。

文档：[https://www.rollupjs.com/guide/tutorial](https://www.rollupjs.com/guide/tutorial#%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6using-config-files)

### 输入(input *`-i`/`--input`*)

`String` 这个包的入口点 (例如：你的 `main.js` 或者 `app.js` 或者 `index.js`)

### 文件(file *`-o`/`--output.file`*)

`String` 要写入的文件。也可用于生成 sourcemaps，如果适用

### 格式(format *`-f`/`--output.format`*)

`String` 生成包的格式。 下列之一:

- `amd` – 异步模块定义，用于像RequireJS这样的模块加载器
- `cjs` – CommonJS，适用于 Node 和 Browserify/Webpack
- `esm` – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 `<script type=module>` 标签引入
- `iife` – 一个自动执行的功能，适合作为`<script>`标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- `umd` – 通用模块定义，以`amd`，`cjs` 和 `iife` 为一体
- `system` - SystemJS 加载器格式

### 生成包名称(name *`-n`/`--name`*)

`String` 变量名，代表你的 `iife`/`umd` 包，同一页上的其他脚本可以访问它。

```js
// rollup.config.jsexport default {  ...,  output: {    file: 'bundle.js',    format: 'iife',    name: 'MyBundle'  }};
// -> var MyBundle = (function () {...
```

### 插件(plugins)[#](https://www.rollupjs.com/guide/tutorial#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6using-plugins)

插件对象 `数组 Array` (或一个插件对象) – 有关详细信息请参阅 [插件入门](https://www.rollupjs.com/guide/big-list-of-options#getting-started-with-plugins)。记住要调用导入的插件函数(即 `commonjs()`, 而不是 `commonjs`).

```js
// rollup.config.jsimport resolve from 'rollup-plugin-node-resolve';import commonjs from 'rollup-plugin-commonjs';
export default { entry: 'main.js', plugins: [resolve(), commonjs()] }
```

### 外链(external *`-e`/`--external`*)

两者任一 `Function` 需要一个 `id` 并返回 `true`（外部引用）或 `false`（不是外部的引用）， 或者 `Array` 应该保留在bundle的外部引用的模块ID。ID应该是：

1. 外部依赖的名称
2. 一个已被找到路径的ID（像文件的绝对路径）

```js
// rollup.config.jsimport path from 'path';
export default { external: ['some-externally-required-library', path.resolve('./src/some-local-file-that-should-not-be-bundled.js')] }
```

当作为命令行参数给出时，它应该是以逗号分隔的ID列表：

```bash
rollup -i src/main.js ... -e foo,bar,baz
```

### 全局模块(globals *`-g`/`--globals`*)

`Object` 形式的 `id: name` 键值对，用于`umd`/`iife`包。例如：在这样的情况下...

```js
import $ from 'jquery'
```

告诉 Rollup `jquery` 模块的id等同于 `$` 变量:

```js
// rollup.config.js
export default {
  format: 'iife',
  name: 'MyBundle',
  globals: {
    jquery: '$'
  }
}

/*
var MyBundle = (function ($) {
  // 代码到这里
}(window.jQuery));
*/
```

或者，提供将外部模块ID转换为全局模块的功能。

当作为命令行参数给出时，它应该是一个逗号分隔的“id：name”键值对列表：

```bash
rollup -i src/main.js ... -g jquery:$,lodash:_
```

## JavaScript API

Rollup 提供 JavaScript 接口那样可以通过 Node.js 来使用。你可以很少使用，而且很可能使用命令行接口，除非你想扩展 Rollup 本身，或者用于一些难懂的任务，例如用代码把文件束生成出来，主要有两个 API （rollup.rollup，rollup.watch）。

文档：https://www.rollupjs.com/guide/javascript-api

## Custom Plugin

~~~js
plugins: [
  babel(),
  uglify(),
  {
    name: 'replace',
    transformBundle(code) {
      return code
        .replace('关键词', '替换内容')
        .replace(/正则/, '替换内容')
    },
  },
]
~~~

> 有意思的是，rollup 同样支持 Virtual Modules （虚拟模块）也就是在 rollup 中可以跟 esbuild 一样实施一个虚拟模块。
