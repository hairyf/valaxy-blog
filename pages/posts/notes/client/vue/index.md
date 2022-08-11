---
title: Vue 渐进式前端框架
categories:
  - Notes
  - Client
  - vue
tags: 
  - vue
---

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用（SPA）提供驱动。

<!-- more -->

## Vue 特点

- Vue 的 API 参考AngularJS、KnockoutJS、Ractive.js、Rivets.js。
- Vue 的 API 的对于其他框架的参考不仅是参考，其中也包含了许多 Vue.js 的独特功能。
- 本身只关注 UI，可以轻松引入 Vue 插件或其他库开发项目。
- 编码简洁，体积小，运行效率高，适合移动/PC端开发。

## 基本应用

Vue 是动态的 html 页面，包含了一些 JS 语法代码，双括号表达式。指令（以 `v-` 开通的自定义标签属性）

~~~html
<div id="box">
	<!-- v-model:双向数据绑定 -->
	<input type="text" v-model="message" />
	<p>	 <!-- {{}}单向数据绑定 -->
	  Hello	{{message}}
	</p>
</div>

<!-- 1.引入Vue.js -->
<script src='js/vue.js'></script>

<!-- 2.创建Vue对象 -->
<script>
	const vm = new Vue({
        el: '#box',
        data: {
            message: 'Hello Vue'
            // message为初始化数据，可在vue元素容器中使用
        }
    })
</script>
~~~

## MVVM 模型

MVVM是 Model-View-ViewModel 的简写。它本质上就是MVC 的改进版。MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。

虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

- M: 模型（Model），相当于 Vue 中 data 中的数据；
- V: 视图（View），模板代码，展示给用户的DOM页面；
- VM： 视图模型（ViewModel），Vue 实例，充当 View 与 Model 之间通信的桥梁，如下图。

<HairyImage src="https://pic.imgdb.cn/item/62f1fa9e16f2c2beb1d9f326.jpg" />

- DOM Listeners： DOM 监听，当DOM发生一些事件时，可以监听到，并在需要的情况下改变对应的Data。
- Data Bindings: 数据绑定，将Model的改变实时反映到View中。