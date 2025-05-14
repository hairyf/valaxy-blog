---
title: Vue3 内置组件 Suspense
categories:
  - Notes
  - Client
  - vue
tags:
  - vue
date: 2021-03-25 16:00:00
---

Suspense 组件用于在等待某个异步组件解析时显示后备内容。

以下是异步组件有用的一些实例：

- 在页面加载之前显示加载动画
- 显示占位符内容
- 处理延迟加载的图像

以前，在 Vue2 中，我们必须使用条件(例如 `v-if` 或 `v-else`)来检查我们的数据是否已加载并显示后备内容。

但是现在，Suspense 随 Vue3 内置了，因此我们不必担心跟踪何时加载数据并呈现相应的内容。

<!-- more -->

## 实现异步组件处理

在这个例子中，我们有一个异步的 ArticleInfo.vue 组件。

setup 方法可以像其他方法一样被设置为异步，对于我们的示例，组件将具有异步 setup 方法，该方法将在返回之前加载用户数据。

~~~js
async function getArticleInfo() {
  // 一些异步API调用
  return { article }
}
export default {
  async setup() {
    var { article } = await getArticleInfo()
    return {
      article
    }
  }
}
~~~

然后，假设我们有一个 ArticlePost.vue 组件，其中包含我们的ArticleInfo组件。

如果我们要在等待组件获取数据并解析时显示“正在拼了命的加载…”之类的内容，则只需三个步骤即可实现Suspense。

- 将异步组件包装在`<template #default>`标记中
- 在我们的Async组件的旁边添加一个兄弟姐妹，标签为`<template #fallback>`。
- 将两个组件都包装在`<suspense>`组件中

使用插槽，Suspense将渲染后备内容，直到默认内容准备就绪。然后，它将自动切换以显示我们的异步组件。

所以，看起来会像这样。

~~~html
<Suspense>
  <template #default>
    <article-info/>
  </template>
  <template #fallback>
    <div>正在拼了命的加载…</div>
  </template>
</Suspense>
~~~

## 捕获异步组件错误

当我们开始使用异步组件时，可以捕获错误并向用户显示一些错误消息。

即使在Vue2中，也可以使用 errorCaptured 钩子函数实现，但是在Vue3中，它已重命名为 onErrorCaptured。

无论调用什么，此钩子函数都会在捕获到任何后代组件的错误时运行。如果出现问题，我们可以将其与Suspense一起使用以渲染错误。

如果我们处理了一个错误以显示错误消息，则上面的组件将是这样。

~~~html
<template>
  <div v-if="errMsg"> {{ errMsg }} </div>
  <Suspense v-else>
    <template #default>
      <article-info />
    </template>
    <template #fallback>
      <div>正在拼了命的加载…</div>
    </template>
  </Suspense>
</template>
<script>
import { onErrorCaptured } from 'vue'
setup () {
  const errMsg = ref(null)
  onErrorCaptured(e => {
    errMsg.value = '呃，出了点问题！'
    return true
  })}
  return { error }
</script>
~~~
