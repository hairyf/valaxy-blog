---
title: Vue3 组合式 API
categories:
  - notes
  - client
  - vue
tags: 
  - vue
---

Vue3 组合式 API（Composition API） 主要用于在大型组件中提高代码逻辑的可复用性。传统的组件随着业务复杂度越来越高，代码量会不断的加大，整个代码逻辑都不易阅读和理解。Vue3 使用组合式 API 的地方为 setup，在 setup 中，我们可以按逻辑关注点对部分代码进行分组，然后提取逻辑片段并与其他组件共享代码。因此，组合式 API（Composition API） 允许我们编写更有条理的代码。

<!-- more -->

## 声明响应式对象

要为 JavaScript 对象创建响应式状态，可以使用 `reactive` 方法：

~~~js
import { reactive } from 'vue'

// 响应式状态
const state = reactive({
  count: 0
})
~~~

## 声明响应式值

想象一下，我们有一个独立的原始值 (例如，一个字符串)，我们想让它变成响应式的。当然，我们可以创建一个拥有相同字符串 property 的对象，并将其传递给 `reactive`。Vue 为我们提供了一个可以做相同事情的方法 ——`ref`：

~~~js
import { ref } from 'vue'

const count = ref(0)
~~~

`ref` 会返回一个可变的响应式对象，该对象作为它的内部值——一个**响应式的引用**，这就是名称的来源。此对象只包含一个名为 `value` 的 property ：

~~~js
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
~~~

## 响应式状态解构

当我们想使用大型响应式对象的一些 property 时，可能很想使用 [ES6 解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)来获取我们想要的 property：

~~~js
import { reactive } from 'vue'

const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: 'You are reading this book right now ;)',
  price: 'free'
})

const { author, title } = book
~~~

遗憾的是，使用解构的两个 property 的响应性都会丢失。对于这种情况，我们需要将我们的响应式对象转换为一组 ref。这些 ref 将保留与源对象的响应式关联：

```js
import { reactive, toRefs } from 'vue'

const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: 'You are reading this book right now ;)',
  price: 'free'
})

const { author, title } = toRefs(book)

title.value = 'Vue 3 Detailed Guide' // 我们需要使用 .value 作为标题，现在是 ref
console.log(book.title) // 'Vue 3 Detailed Guide'
```

## 数据解包

传入响应式数据假如存在 ref | reactive | computed 会自动解包，并具有响应式

~~~js
const name = ref('Mr.Mao')
const book = ref({
  name
})
/* Ref<{
  name: string;
}> */
const composition = reactive({
  name
})
/* {
  name: string;
} */
~~~

## 依赖注入

用 `provide` 和 `inject` 的 Vue 依赖注入对于构建 Vue 插件或避免钻取 prop（在层次结构中一路传递 prop，即使许多组件之间不需要 prop）。

在 Vue3 中，使用 provide 和 inject 的依赖项注入将更加常见。这主要是因为插件将不得不切换到使用这种模式，因为 Composition API 改变了这种引用（它不再让我们访问组件本身）。

### 声明依赖(provide)

为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。

使用 `MyMap` 组件，我们的代码可以更新如下：

~~~html
<!-- src/components/MyMap.vue -->
<template>
  <MyMarker />
</template>

<script>
import { provide, reactive, ref, readonly } from 'vue'
import MyMarker from './MyMarker.vue

export default {
  components: {
    MyMarker
  },
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
	// 确保通过 provide 传递的数据不会被 inject 的组件更改, 使用 readonly
    provide('location', readonly(location))
    provide('geolocation', readonly(geolocation))
    // 有时我们需要在注入数据的组件内部更新 inject 的数据。在这种情况下，建议 provide 一个方法来负责改变响应式 property。
    const updateLocation = () => {
      location.value = 'South Pole'
    }
    provide('updateLocation', updateLocation)
  }
}
</script>
~~~

### 声明注入(inject)

~~~html
<!-- src/components/MyMarker.vue -->
<script>
import { inject } from 'vue'

export default {
  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const updateUserLocation = inject('updateLocation')

    return {
      userLocation,
      userGeolocation,
      updateUserLocation
    }
  }
}
</script>
~~~

## 标记与还原

- toRaw
  - 返回由 `reactive` 或 `readonly` 方法转换成响应式代理的普通对象。
  - 这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
- markRaw
  - 标记一个对象，使其永远不会转换为代理。返回对象本身
  - 应用场景:
    - 有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
    - 当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。


## 响应式判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

## 自定义 Ref

创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。

~~~js
let value = ''
const vref = customRef((track, trigger) => {
  return {
    get() {
      // 初次调用 > 追踪依赖
      track()
    },
    set(_value) {
      // 修改完毕后, 通知 dep 更新
      value = _value
      trigger()
    }
  }
})
~~~

## 其他 API

~~~typescript
// 将 ref 转换为 .value
unref
// 浅响应式 ref
shallowRef
// 浅响应式 reactive
shallowReactive
// 将对象转换为只读对象
readonly
// 浅只读
shallowReadonly
~~~

## 内置类型

~~~typescript
// 所有 style 内容
CSSProperties
// 计算属性
ComputedRef<T>
// 监视源
WatchSource<T = any>
// 是或不是Ref
MaybeRef<T>
~~~

