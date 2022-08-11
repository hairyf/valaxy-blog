---
title: Vue 面向组件编程
date: 2020-11-01
categories:
  - Notes
  - Client
  - vue
tags: 
  - vue
---

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

组件化编程又有两种写法，分别是非单文件组件和单文件组件，而非单文件组件在真正开发中几乎不用，所以在这里就主要写单文件组件的写法。

<!-- more -->

```vue
<!-- 组件逻辑 -->
<script>
export default {
  // 组件注册使用的组件
  components: {},
  // 约束 props 字段
  props: {},
  // 组件状态
  data() {
    return {}
  },
  // 组件计算属性
  computed: {},
  // 组件数据监测
  watch: {},

  // 组件其中的生命周期
  mounted() {},
  // 组件方法存放
  methods: {}
}
</script>

<!-- 组件视图 -->
<template>
  <div>--</div>
</template>

<!-- 组件样式 -->
<style>
  div {
    color: red
  }
</style>
```

## 组件参数(props)

于外部接收参数的容器，通常在渲染组件时定义在标签中，一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute。

props 需要使用 props 选项来定义：

```js
export default {
  props: ['foo'],
  created() {
    // props 会暴露到 `this` 上
    console.log(this.foo)
  }
}
```

除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

```js
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 number 类型，则可使用 Number 构造函数作为其声明的值。

对象形式的 props 声明不仅可以一定程度上作为组件的文档，而且如果其他开发者在使用你的组件时传递了错误的类型，也会在浏览器控制台中抛出警告。

## 组件通信(props)

利用标签名从父组件传输数据到子组件：

~~~html
<!-- 父组件标签(App.js)传输数据(任意JS属性或方法) -->
<TdoHead  :addTask='addTask' /> 
~~~

~~~js
// 子组件(components/...js)props接收数据
export default {
  props: { addTask: Function }
}
~~~

利用自定义事件传输父组件方法到子组件：

~~~html
<!-- 父组件标签(App.js)传输对应方法 -->
<template>
  <TdoHead  @addTask='addTask' />
</template>

<script>
export default {
  mounted() {
    // 定义自定义方法
    this.$refs.header.$on('addTask', this.addTask)
  }
}
</script>
~~~

~~~js
// 子组件(components/...js)利用$emit方法接收父组件方法
export default {
  methods: {
    sumTask() {
      // 使用自定义事件,this.$emit('事件名', [,传入的形参])
      this.$emit('addTask', '666')
    }
  }
}
~~~

## 组件插槽(slots)

子组件利用 slot 插槽传递任意属性 / 事件

~~~html
<!-- 输出父组件标签, 传入参数 -->
<template>
  <slot name="xxx" :toggle="addCount" :count="count" />
</template>

<script setup lang="ts">
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>
~~~

父组件从插槽中获取属性 / 事件

~~~html
<!-- 传入子组件需要的标签, 接收参数 -->
<template>
  <!-- slot-scope接收参数(废弃) -->
  <div slot="xxx" slot-scope="{ count, toggle }" @click="toggle">
    {{ count }}
  </div>
  <!-- v-slot接收参数 -->
  <div #xxx="{ count, toggle }" @click="toggle">
    {{ count }}
  </div>
</template>
~~~

## 脚手架搭建

Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

~~~makefile
cnpm i @vue/cli -g

vue create  '项目名'  / vue ui

#↓↓↓↓↓↓↓#

Vue CLI v4.3.1
? Please pick a preset: (Use arrow keys)	## 选择你的配置, 如果之前保存有配置, 会在此显示
  default (babel, eslint)		## 默认配置
> Manually select features	## 手动配置

#↓↓↓↓↓↓↓#

? Check the features needed for your project: ## 选择配置项, <空格>表示选择, <a>表示全选, <i>表示反转
>(*) Babel	## ES6转为ES5的解析器
 ( ) TypeScript		## .ts的解析器
 ( ) Progressive Web App (PWA) Support		## 渐进式Web应用程序
 (*) Router		## vue路由
 (*) Vuex		## vue状态数据管理
 (*) CSS Pre-processors		## css预编译器
 (*) Linter / Formatter		## 代码风格检查和格式化
 (*) Unit Testing		## 单元测试(unit tests)
 ( ) E2E Testing		## e2e测试(end to end)
 
#↓↓↓↓↓↓↓#
 
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Y/n) 	## router是否使用history模式, 否则使用hash默认(建议n)

#↓↓↓↓↓↓↓#

? Pick a CSS pre-processor (选择css 预处理器):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
> Less
  Stylus
  
#↓↓↓↓↓↓↓#

? Pick a linter / formatter config: ## 选择Eslint 代码验证规则 (通常Prettier用的比较多)
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier

#↓↓↓↓↓↓↓#

? Pick additional lint features: ## 选择什么时候检测
>(*) Lint on save		## 保存就检测
 ( ) Lint and fix on commit		## fix或commit的时候检测
 
#↓↓↓↓↓↓↓#

? Pick a unit testing solution: ## 选择单元测试方案
> Mocha + Chai		## Mocha测试库+Chai断言库
  Jest		## Jest测试库

#↓↓↓↓↓↓↓#

? Where do you prefer placing config for Babel, ESLint, etc.? ## 项目配置文件存放处
  In dedicated config files		## 独立文件存放
> In package.json		## 统统放在package.json中

#↓↓↓↓↓↓↓#

? Save this as a preset for future projects? (y/N) ## 是否保存该配置到本地文件, 如果选择Y, 选择需要输入名称

#↓↓↓↓↓↓↓#

Vue CLI v4.3.1		## 安装相应包, 等待创建项目中
✨  Creating project in D:/......
⚙️  Installing CLI plugins. This might take a while...

#↓↓↓↓↓↓↓#

npm run serve --open	## 内存中打包并开启服务

## 配置run serve自动打开浏览器
package.json --> scripts:{serve: "vue-cli-service serve --open"}
~~~

目录分析：

~~~markdown
## 项目总文件
  - node_modules		用node安装的依赖包
  - src				资源文件夹以后我们就在这个目录写代码
  - public			静态资源html(图片之类)json数据之类
  - tests				单元测试,代码测试
  - .gitignore		上传需要忽略的文件格式
  - babel.config.js		babel相关log信息
  - package.json		项目基本信息(项目开发所需模块,项目名称,版本, es配置)
  - README.md			项目说明(如何使用,有哪些方法等等)
## src目录文件 > 项目资源
  - assets		    静态资源(js,css之类可以放在这下面)
  - components	    公用组件编写的地方
  - router/index.js		路由配置文件
  - store/index.js		vuex状态数据管理配置文件
  - views			路由组件存放地(视图组件)
  - App.vue		    项目的主组件,所有页面都是在app.vue下切换的.一个标准的vue文件,分为三部分。
  - main.js	    	页面程序入口文件,加载各种公共组件
~~~


开发运行项目：

```sh
npm run start
```

生成打包项目：

```sh
npm run build
```

运行打包项目：

~~~md
## 使用 serve 模拟后台服务
安装：npm install serve -g
运行dist包文件夹：serve dist
访问: http://localhost:5000

## 使用 web 服务器启动项目
将打包文件拷贝到运行的tomcat（后端服务） 的运行目录下
访问: http://localost:8080/xxx
~~~