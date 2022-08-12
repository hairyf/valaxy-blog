---
title: Rollup - JavaScript 常用插件
date: 2021-11-02
categories:
  - Notes
  - Client
  - bundler
tags: 
  - grunt
---

Rollup 具有丰富的插件生态，我们日常的开发也离不开这些插件，在这里整理了一些常用的 Rollup Plugin Packages。

<!-- more -->

## @rollup/plugin-node-resolve [#](https://github.com/rollup/plugins/tree/master/packages/node-resolve)

作用：使路径导入可以不是完整路径

```javascript
// 不配置 @rollup/plugin-node-resolve 插件引入方式
export foo from './foo/index.js'
import bar from './bar/index.js'
// 配置了 @rollup/plugin-node-resolve 插件引入方式
export foo from './foo'
import bar from './bar'
```

## @rollup/plugin-json [#](https://github.com/rollup/plugins/tree/master/packages/json)

作用：支持导入 JSON 模块

~~~js
import { name } from './package.json'
console.log(name)
~~~

## @rollup/commonjs [#](https://github.com/rollup/rollup-plugin-commonjs)

作用：将 CommonJS 模块转换为 ES6，以便它们可以包含在 Rollup 包中（Tree-shaking）

使用：

~~~js
import commonjs from '@rollup/commonjs'
export default {
  plugins: [
    commonjs({
      include: ['node_modules/**', 'node_modules/**/*', 'package/**', 'package/**/*']
    })
  ]
}
~~~

## @rollup/plugin-typescript [#](https://github.com/rollup/plugins/tree/master/packages/typescript)

作用：使用 babel 编译 typescript/tsx 模块，不支持生成 dts 文件

使用：

~~~js
import typescript from '@rollup/plugin-typescript'
const config = {}
export default {
  input: 'src/index.ts',
  plugins: [config()]
}
~~~

## rollup-plugin-typescript2 [#](https://github.com/ezolenko/rollup-plugin-typescript2)

作用：与上方大致相同，不同与该插件是带有编译器错误的打字稿汇总插件，是对上方插件的重写。

使用：与上方使用大致相同。

## rollup-plugin-esbuild [#](https://github.com/egoist/rollup-plugin-esbuild)

作用：使用 [esbuild](https://github.com/evanw/esbuild#readme) 编译 typescript/tsx 模块，不支持生成 dts 文件，这个编译速度是最快的。

使用：与上方使用大致相同，但配置不一样。

## rollup-plugin-dts [#](https://github.com/morlay/rollup-plugin-dts)

作用：单独 build typescript/tsx 的 .d.ts 文件到输出目录

使用：

~~~js
import dts from 'rollup-plugin-dts'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.d.ts',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.d.ts',
      format: 'es'
    }
  ],
  plugins: [dts()]
}
~~~

## rollup-plugin-terser [#](https://github.com/trysound/rollup-plugin-terser)

作用：代码压缩

## rollup-plugin-postcss [#](https://github.com/egoist/rollup-plugin-postcss)

作用：rollup 对 postcss 的支持（css 的各种转换），例如 postcss-import 和 tailwindcss 等。

## rollup-plugin-vue [#](https://github.com/vuejs/rollup-plugin-vue)

作用：利用 @vue/compiler-sfc 编译 .vue 文件

## rollup-plugin-vue-jsx-compat [#](https://github.com/vuejs/rollup-plugin-vue)

作用：与 rollup-plugin-esbuild 一起使用，编译 vue 的 .tsx 文件

使用：

~~~js
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'

export default {
  plugins: [
    vueJsx(),
    esbuild({
      jsxFactory: 'vueJsxCompat',
    }),
  ],
}
~~~
