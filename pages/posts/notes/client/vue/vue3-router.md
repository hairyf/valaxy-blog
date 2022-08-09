---
title: Vue3 路由的变化
categories:
  - notes
  - client
  - vue
tags: 
  - vue
---

Vue Router 4.0 提供了 Vue 3 支持， 虽然 vue-router 4 大多数 API 保持不变，但是在 vue3 中以插件形式存在，所以在使用时有一定的变化。


路由组件装载着需要的内容，通常这类组件放在 `src/pages` 文件夹内`(about.vue、home.vue)`

<!-- more -->

定义路由器：

~~~js
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/about.vue'

const routes: Array<RouteRecordRaw> = [
  { // 配置路由地址
    path: '/about',
    component: About,
    children: [ // 其他子路由
      // { path:'note', component: aboutl }
    ],
    meta: {} // $route元数据 router.meta
  },
  { // 配置异步路由组件
    path: '/home',
    component: () =>
      // 中间可添加打包后名称
      import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
]

const router = createRouter({
  // 路由路径模式,
  // createWebHashHistory对应hash模式,
  // createWebHistory对应history模式
  history: createWebHashHistory(),
  routes
})

export default router
~~~

安装路由：

~~~js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
  .mount('#app')
~~~

## 属性方法

如果在 setup 中访问路由，则需要通过 `vue-router` 提供的钩子。

~~~vue
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
// 当前显示路由
const $route = useRoute()
// 路由管理器
const $router = useRouter()

// 页面跳转(推入)
$router.push('/home')
// 页面跳转(替换)
$router.replace('/about')
// 页面回退(前提是前进页面)
$router.back()
// 页面前进(前提是返回页面)
$router.go(1)
</script>
~~~

## 组件内的守卫

可以在路由组件内直接定义以下路由导航守卫：

~~~js
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
// 对路线变化做出反应, 不要忘记调用 next()
onBeforeRouteUpdate((to, from, next) => { })
// 导航离开该组件的对应路由时调用
onBeforeRouteLeave((to, from, next) => { })
~~~

## 动态路由

addRoutes 被 addRoute 替代，添加一条新的[路由记录](https://next.router.vuejs.org/zh/api/#routerecordraw)作为现有路由的子路由。如果路由有一个 `name`，并且已经有一个与之名字相同的路由，它会先删除之前的路由。

~~~javascript
// currentRoutes
[
    { path: '/login',component: /*....*/ }
]
// addRoute
routes.addRoute({ path: '/user', component: /*....*/ })
// currentRoutes
[
    { path: '/login' component: /*....*/ },
    { path: '/user', component: /*....*/ }
]
~~~

## props 传递

在你的组件中使用 `$route` 会与路由紧密耦合，这限制了组件的灵活性，因为它只能用于特定的 URL。虽然这不一定是件坏事，但我们可以通过 `props` 配置来解除这种行为：

我们可以将下面的代码

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const routes = [{ path: '/user/:id', component: User }]
```

替换成

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```

这允许你在任何地方使用该组件，使得该组件更容易重用和测试。