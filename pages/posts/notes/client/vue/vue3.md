---
title: Vue3 新特性与更改
categories:
  - Notes
  - Client
  - vue
tags: 
  - vue
---

Vue3 在 2020年9月18日，官方正式将其取名为 Vue3 One Piece。新版本的Vue提供了更好的性能，更小的打包体积，更好的TypeScript支持，还有一些新的API。

<!-- more -->

> Vue3进行了两年以上的开发，99 位程序员成为贡献者，2600 次提交，628 次 PR。

> 网站地址: https://staging-cn.vuejs.org/

![Vue3新特性](https://newimg.jspang.com/Vue3_new01.png)

- 向下兼容，Vue3 支持大多数 Vue2 的特性。
- 性能的提升，官方网站给出的数据是：打包大小减少 41%，初次渲染快 55%，更新快 133%，内存使用减少 54%。
- 新推出的`Composition API` ，解决在 Vue2 中遇到的问题就是复杂组件的代码变的非常麻烦，甚至不可维护。
- 其他新特性：Teleport(瞬移组件)、Suspense(解决异步加载组件问题)和全局 API 的修改和优化。
- 更好 `TypeScript` 支持。

> Vue3 发布会：https://www.bilibili.com/video/BV1iA411J7cA?from=search&seid=2979047174353974296

<!-- more -->

## API 的更改

Vue 2.x 有许多全局 API 和配置，这些 API 和配置可以全局改变 Vue 的行为。例如，Vue.use，Vue.component，Vue.directive 等等。虽然这种声明方式很方便，但它也会导致一些问题。

> 引用官方的一段话：从技术上讲，Vue 2 没有“app”的概念，我们定义的应用只是通过 `new Vue()` 创建的根 Vue 实例。测试期间，全局配置很容易意外地污染其他测试用例。有些 API 像 `Vue.use` 以及 `Vue.mixin` 甚至连恢复效果的方法都没有，这使得涉及插件的测试特别棘手。实际上，vue-test-utils 必须实现一个特殊的 API `createLocalVue` 来处理此问题，了避免这些问题，在 Vue 3 中我们引入`createApp`的一个全新 API。

应用实例暴露当前全局 API 的子集，经验法则是，任何全局改变 Vue 行为的 API 现在都会移动到应用实例上，以下是当前全局 API 及其相应实例 API 的表：

| 2.x 全局 API               | 3.x 实例 API (`app`)                                         |
| -------------------------- | ------------------------------------------------------------ |
| Vue.config                 | app.config                                                   |
| Vue.config.productionTip   | *removed* ([见下方](https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-removed)) |
| Vue.config.ignoredElements | app.config.isCustomElement ([见下方](https://v3.cn.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement)) |
| Vue.component              | app.component                                                |
| Vue.directive              | app.directive                                                |
| Vue.mixin                  | app.mixin                                                    |
| Vue.use                    | app.use ([见下方](https://v3.cn.vuejs.org/guide/migration/global-api.html#a-note-for-plugin-authors)) |

由于 `use` 全局 API 在 Vue 3 中不再使用，此方法将停止工作并停止调用 `Vue.use()` 现在将触发警告，于是，开发者必须在应用程序实例上显式指定使用此插件：

~~~js
const app = createApp(MyApp)
app.use(VueRouter)
~~~

在 Vue 3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，全局 API 现在只能作为 ES 模块构建的命名导出进行访问。例如之前的片段现在应该如下所示：

~~~js
import { nextTick } from 'vue'

nextTick(() => {
  // 一些和DOM有关的东西
})
~~~

## model 的更改

在 3.x 中，自定义组件上的 `v-model` 相当于传递了 `modelValue` prop 并接收抛出的 `update:modelValue` 事件：

~~~html
<ChildComponent v-model="pageTitle" />
<!-- 简写: -->
<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
~~~

若需要更改 `model` 名称，而不是更改组件内的 `model` 选项，那么现在我们可以将一个 *argument* 传递给 `model`：

~~~html
<ChildComponent v-model:title="pageTitle" />
<!-- 简写: -->
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
~~~

![](https://v3-migration.vuejs.org/images/v-bind-instead-of-sync.png)

这也可以作为 `.sync` 修饰符的替代，而且允许我们在自定义组件上使用多个 `v-model`。

## template 的更改

在 Vue 2.x 中 `<template>` 标签不能拥有 `key`。不过你可以为其每个子节点分别设置 `key`。

```html
<!-- Vue 2.x -->
<template v-for="item in list">
  <div :key="item.id">...</div>
  <span :key="item.id">...</span>
</template>
```

在 Vue 3.x 中 `key` 则应该被设置在 `<template>` 标签上。

```html
<!-- Vue 3.x -->
<template v-for="item in list" :key="item.id">
  <div>...</div>
  <span>...</span>
</template>
```

类似地，当使用 `<template v-for>` 时存在使用 `v-if` 的子节点，`key` 应改为设置在 `<template>` 标签上。

```html
<!-- Vue 2.x -->
<template v-for="item in list">
  <div v-if="item.isVisible" :key="item.id">...</div>
  <span v-else :key="item.id">...</span>
</template>

<!-- Vue 3.x -->
<template v-for="item in list" :key="item.id">
  <div v-if="item.isVisible">...</div>
  <span v-else>...</span>
</template>
```

## v-for 的更改

在 Vue 2 中，在 `v-for` 里使用的 `ref` attribute 会用 ref 数组填充相应的 `$refs` property。当存在嵌套的 `v-for` 时，这种行为会变得不明确且效率低下。

在 Vue 3 中，这样的用法将不再在 `$ref` 中自动创建数组。要从单个绑定获取多个 ref，需要将 `ref` 绑定到一个更灵活的函数上 (这是一个新特性)：

```html
<template>
  <div v-for="item in list" :key="item" :ref="setItemRef"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const itemRefs: Element[] = [];
    const setItemRef = (el: Element) => itemRefs.push(el);
    return {
      setItemRef
    };
  }
});
</script>

<style lang="scss"></style>
```

## 异步组件

以前，异步组件是通过将组件定义为返回 Promise 的函数来创建的，例如：

~~~js
const asyncPage = () => import('./NextPage.vue')
~~~

或者，对于带有选项的更高阶的组件语法：

~~~js
const asyncPage = {
  component: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
}
~~~

现在，在 Vue 3 中，由于函数式组件被定义为纯函数，因此异步组件的定义需要通过将其包装在新的 `defineAsyncComponent` 助手方法中来显式地定义：

```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 不带选项的异步组件
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))

// 带选项的异步组件
const asyncPageWithOptions = defineAsyncComponent({
  loader: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```


## 组合式 API
