---
title: Vue 面向路由编程
date: 2020-11-01
categories:
  - notes
  - client
  - vue
tags: 
  - vue
---

Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌！！！

路由组件装载着需要的内容，通常这类组件放在 `src/views` 文件夹内(About.vue、Home.vue)

<!-- more -->

定义路由器：

~~~js
// src/rouder/index.js：
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/a.vue'
import Home from '../views/b.vue'
// 对路由插件进行解析
Vue.use(VueRouter)
// 这里定义一个路由
export default new VueRouter({
  linkActiveClass: 'active', // 定义默认路由类名
  routes: [
    // 配置路由组件地址
    {
      path: '/about',
      component: About,
      children: [
      // { path:'note', component: aboutl } //其他子路由
      ],
      meta: {} // $route元数据 router.meta
    },
    { path: '/home', component: Home },
    // 配置默认显示路由
    { path: '/', redirect: '/about' }
  ]
})
~~~

安装路由：

~~~js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
const app = new Vue({
  components: { App },
  template: '<App/>',
  // 将设置好的路由器传入组件
  router
}).$mount('#app')
~~~

组件中使用：

~~~html
<div class="App">
	<router-link to="/about">Go to about</router-link>
	<router-link to="/home">Go to home</router-link>
	<router-view> </router-view>
</div>
~~~

![](https://pic.imgdb.cn/item/62f2174216f2c2beb1637557.jpg)

> 当在路由器引入路由，则代表所有组件都已经有了路由器，所以其他静态组件也能使用路由。

## 路由缓存

可让显示路由保存值和自身，在刷新页面时或重新启动浏览器不会消失。

~~~html
<keep-alive include="test-keep-alive"> <!-- 利用keep-alive标签包裹显示路由 -->
	<router-view class="w"></router-view>
</keep-alive>
~~~

## 传递参数

vue-router 有两种种参数的传递，基本特点都在于参数与地址栏显示上。

### params

传递 path 参数、通过路径占位符实现，状态保留在 url 中。

定义路由：
```js
// 定义路由时, 定义占位符为id
routes: [{ path: '/home/:id', component: Home }]
```
传递参数：
~~~html
<!-- 定义标签内跳转, 传入id为6 -->
<router-link to="/home/6">User</router-link>
<!-- 或让 vue router 处理参数 -->
<router-link :to="{ path: '/home', params: { id: 6 } }">User</router-link>
~~~

### query

传递 urlencoded 编码字符串，状态保留在 url 中，`vue-router` 提供了实际的解析，在组件中可以直接访问。

定义传递参数：
```html
<!-- 定义标签内跳转, 传入id为6 -->
<router-link :to="{ path: '/home', query: { id: 60 } }">User</router-link>
```
~~~js
/* 定义命令跳转, 传入id为6 */
this.$router.push({ path: '/home', query: { id: 60 } })
~~~

## 属性方法

~~~js
export default {
  mounted() {
    // 当前显示路由
    console.log(this.$route)
    // 路由器
    console.log(this.$router)
    // 跳转方法
    this.$router.push('路由链接')
    this.$router.replace('路由链接')
    // or
    this.$router.push({
      path: '...',
      params: {},
      query: {}
    })
  }
}
~~~

## 监听路由

~~~js
/* 定义路由组件接受变化 */
export default {
  watch: {
    // 全局监听
    $route(to, form) {},
    // 单独监听
    '$route.params.id': function (to, form) {}
  }
}
~~~

## 路由守卫

正如其名，vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。

### 全局后置钩子

可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
})
```

### 路由独享守卫

在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

### 组件内的守卫

可以在路由组件内直接定义以下路由导航守卫：

~~~js
const Foo = {
  template: '...',
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
~~~
