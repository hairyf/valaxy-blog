---
title: Gsap 上下文系统
categories:
  - Notes
  - Client
  - Gsap
tags:
  - Gsap
date: 2022-08-22 16:36:10
---

`gsap.context()` 可以收集在提供的函数内部创建的所有 GSAP 动画和 ScrollTrigger，从而使用 `revert()` 或 `kill()` 来统一处理状态。无需跟踪一堆变量、数组等，这在一些响应式框架中通过将元素恢复（清理）到原始状态特别有用。

<!-- more -->

```javascript
let ctx = gsap.context(() => {
 gsap.to(...);
 gsap.from(...);
 gsap.timeline().to(...).to(...);
 ...
});

// 然后...
ctx.revert(); // 轰隆隆！在该函数中创建的每个 GSAP 动画都会被还原！
```

## 范围选择器

还可以选择传入一个 Element 或 [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) | [Angular Ref](https://angular.io/api/core/ElementRef) | [Vue Ref](https://staging-cn.vuejs.org/api/reactivity-core.html#ref) 然后提供的函数中所有选择器文本都将作用于特定的 Element|Ref，这可以很大程度的简化代码。从而不在需要制作动画的每个元素都创建 Ref！

```javascript
const ctx = gsap.context(() => {

  gsap.to('.box', {...}) // <- normal selector text, automatically scoped to myRefOrElement
  gsap.from('.circle', {...})

}, myRefOrElement) // <- scope!!!
```

## 事件处理

如果需要时间处理（如 `onclick`）来创建新的动画，这些动画也应该收集在 Context 中，Context 可以将自己的方法添加到 Context 对象中，以便在它们运行时，可以添加在任何触发器中。

```javascript
const ctx = gsap.context((self) => {

  // 使用任意字符串作为名称，它将被添加到 Context 对象中，因此在这种情况，后续可以通过 ctx.onClick 来执行内部逻辑
  self.add('onClick', (e) => {
    gsap.to(...) // <-- gets added to the Context!
  })

}, myRefOrElement)

myButton.addEventListener('click', e => ctx.onClick(e))
```

## 清理处理

还可以在处理函数中添加一个 `return function` ，如果执行恢复时存在该函数，则会调用，这里可以包含自定义的清理代码：

```js
const ctx = gsap.context(() => {
  // ...
  return () => {
    // my custom cleanup code. Called when ctx.revert() is triggered.
  }
})
```
