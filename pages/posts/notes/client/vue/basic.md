---
title: Vue 基本应用
categories:
  - Notes
  - Client
  - vue
tags: 
  - vue
date: 2020-03-06 16:00:00
---

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统，以操作数据的方式操作 DOM 节点，Vue 不建议使用者直接操作节点内容，目前大部分开发平台都倡导以修改数据的方式操作节点，操作节点被认为是一种落后的技术。

<!-- more -->

## HTML 属性指令

指令由 `v-` 作为前缀，表明它们是一些由 Vue 提供的特殊 `attribuite`，它们将为渲染的 DOM 应用特殊的响应式行为。

- `v-text`：更新元素的 `textContent`
- `v-html`：更新元素的 `innerHTML`
- `v-if`：如果为 `true`, 当前标签才会输出到页面
- `v-else`：如果为 `false`, 当前标签才会输出到页面
- `v-show`：通过控制 `display` 样式来控制显示/隐藏
- `v-for`：遍历数组/对象
- `v-on`：绑定事件监听, 一般简写为 `@`
- `v-bind`：标签属性绑定解析表达式, 可以省略 `v-bind`
- `v-model`：视图双向数据绑定
- `ref`：指定唯一标识, vue2 对象通过 $refs 属性访问这个元素对象
- `v-cloak`：防止闪现, 与css 配合: [v-cloak] { display: none }

## 数据绑定(data)

- 完整写法：`v-bind:xxx='yyy'`
- 简洁写法：`:xxx='yyy'`

~~~html
<div id="app">
	<img src="imgUrl" /><br />	        <!-- 报错 -->
	<img v-bind:src="imgUrl" /><br />		<!-- 显示 -->
	<img :src="imgUrl" />            		<!-- 显示 -->
</div>
<script>
new Vue({
  el: '#app',
  data() {
    return {
      imgUrl: 'https://cn.vuejs.org/images/logo.png'
	 }
  }
})
</script>
~~~

## 事件绑定(event)

- 完整写法：`v-on:[eventName]='fun'`
- 简洁写法：`@[eventName]='fun'`

~~~html
<div id="app">
	<button v-on:click="test">点击</button>
	<button @click="test('abc')">点击</button>
</div>

<script>
new Vue({
  el: '#app',
  methods: {
    test(a) {
      a.isTrusted ? alert('我没传入形参啦') : alert(a)
    }
  }
})
</script>
~~~

### 事件修饰符

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 `DOM` 事件的细节会更好。

为解决这一问题，Vue 为 `v-on` 提供了事件修饰符。修饰符是用 `.` 表示的指令后缀，包含以下这些：

~~~html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 阻止默认事件 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
~~~

### 按键修饰符

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

~~~html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
.enter	.tab	.delete (捕获“删除”和“退格”键)	.esc	.space	.up	.down	.left	.right
~~~

## 条件渲染(ifelse)

Vue 的条件渲染指令和 JavaScript 的分支代码相似，分别是 `v-if`、`v-else`、`v-show`。

- `v-if`：指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。
- `v-else`：用于给 `v-if` 添加 `else` 区块。
- `v-show`：其用法与 `v-if` 基本一样，不同的是 `v-show` 控制的是 `display` 的显示。

> 如果一些不怎么切换的地方用 `v-if` 因为隐藏的元素会直接去除，而需要频繁切换的则使用 `v-show` 因为隐藏的元素会加上 `display: none;` 而不是直接去除。

~~~html
<style>
    .aClass{color:#0000FF;}
</style>

<div id="demo">
	<p v-if="bool">成功了</p>
	<p v-else>失败了</p>

    <!-- 或者是下面代码 -->
    <p v-show="bool">表白成功</p>
	<p v-show="!bool">表白失败</p>
	<button @click="bool=!bool">点击</button>
</div>

<script>
var vm = new Vue({
  el: '#demo',
  data() {
    return {
      bool: false
    }
  }
})
</script>
~~~

## 类名绑定(class)

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 `attribute` 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

### 字符串

解析表达式为字符串时，绑定对应的 Vue 数据。

```html
<div id="demo">
	<p class="cClass" :class="className">xxx是字符串</p>
	<button @click="classEco">点击更改class</button>
</div>

<script>
var vm = new Vue({
  el: '#demo',
  data() {
    return { className: 'aClass' }
  },
  // 类名数据绑定 aClass 类名
  methods: {
    classEco() { this.className = 'bClass' }
    // 类名数据变为 bClass 类名
  }
})
</script>
```

### 对象

我们可以给 `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 `class`：

~~~html
<style>
	.aClass{color: blue; }
	.bClass{color: red; }
	.cClass{font-size: 30px;line-height: 50px;}
</style>

<div id="demo">
	<p class="cClass" :class="{aClass:isA,bClass:isB}">xxx是对象</p>
</div>

<script>
var vm = new Vue({
  el: '#demo',
  data() {
    return { isA: true, isB: false }
  },
  methods: {
    classEco() { this.isB = true; this.isA = false }
  }
})
</script>
~~~

当对应 Vue 数据为 true，表示显示该类名，false 则删除该类名。

### 数组

我们可以给 `:class` 绑定一个数组来渲染多个 CSS class：

~~~html
<style>
	.aClass{ color: blue; }
	.bClass{ background: red; }
</style>
<div id="demo">
		<p :class="['aClass','cClass']">xxx是数组</p>
</div>
~~~

## 样式绑定(style)

`:style` 支持绑定 JavaScript 对象值，对应的是 [HTML 元素的 `style` 属性](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)：

```javascript
data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}
```

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

尽管推荐使用 camelCase，但 `:style` 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：

```html
<div :style="{ 'font-size': fontSize + 'px' }"></div>
```

直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁：

```javascript
data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
```
```html
<div :style="styleObject"></div>
```

## 列表渲染(v-for)

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的别名：

~~~html
<!--语法: v-for="(item , index) in Vue数组数据"-->
<p v-for="(item,index) in persons" :key="index">		
		{{index}}---{{item.name}}---{{item.age}}    
<p>
<script>
var vm = new Vue({
  el: '#demo',
  date: {
    persons: [
      {name: 'Tom', age:18},
      {name: 'Jack', age:17},
      {name: 'Bob', age:19},
      {name: 'Mary', age:16}
    ]
  }
})
</script>
~~~

如果执行 v-for 命令，需要添加一个 `:key='xxx'` 标签以便它能跟踪每个节点的身份，从而重用和重新排序现有元素。

> 因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联，不能使用对象或数组之类的非基本类型值作为 v-for 的 key。要用不一样的字符串或数值类型的值。

增删改：

~~~html
<div id="demo">
	<ul>
 		<li v-for="(p,index) in persons" :key="item.id" >
		{{index}}---{{p.name}}---{{p.age}}
		---<button @click="deletP(index)">删除</button>
		---<button @click="undataP(index,{name:'Cat',age:20})">更新</button>
 		</li>
	</ul>
  <button @click="">添加</button>
</div>

<script>
var vm = new Vue({
  el: '#demo',
  data() {
    return {
      persons: [{ name: 'Tom', age: 18 }, { name: 'Jack', age: 17 }]
    }
  },
  methods: {
    deletP(index) { this.persons.splice(index, 1) },
    // vue只是监视了persons的改变，没有监视数组内部属性的改变
    // 所以当直接改变数组时，数据并不会进行同步
    // 但Vue重写了数组中一系列改变数组内部的方法，所以当调用数组方法时，会改变数据
    // (先调用元素，更新界面) > 使用变异数组内部方法 > 数据绑定 > 页面变化
    undataP(index, obj) { this.persons.splice(index, 1, obj) }
  }
})
</script>
~~~

## 计算属性(computed)

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护，因此我们应该使用计算属性来描述依赖响应式状态的复杂逻辑。

~~~html
<div id="demo">
	姓：<input type="text" v-model="firstName"/><br />
	名：<input type="text" v-model="lastName"/><br />
	姓名(单向)：<input type="text" v-model="Name" />
</div>

<script>
new Vue({
  el: '#demo',
  data() {
    return { firstName: 'Aaa', lastName: 'bbbB' }
  },
  computed: {
    name() {
      // 什么时候执行: 初始化显示/相关的data属性数据发生了改变
      return `${this.firstname} ${this.lastname}`
    }
  }
})
</script>
~~~

监听读写：

~~~html
<div id="demo">
	姓：<input type="text" v-model="firstName"/><br />
	名：<input type="text" v-model="lastName"/><br />
	姓名(双向)：<input type="text" v-model="name" /><!--firstName + lastName-->
</div>

<script>
new Vue({
  em: '#demo',
  data() {
    return { firstname: 'Aaa', lastname: 'bbbB', }
  },
  computed: {
    funllname: {
      get() {
        // 回调函数,当需要读取当前属性值时回调,根据相关的数据计算并返回当前属性的值
        return `${this.firstname}|${this.lastname}`
      },

      set(value) {
        // 回调函数,当属性值发生改变时回调,更新相关的属性数据
        // value就是funllname的最新属性值
        var names = value.split('|')
        names.length == 1 ? names[1] = ':' : []
        this.firstname = names[0]
        this.lastname = names[1]
      }
    },
  }
})
</script>
~~~

## 监听变化(watch)

计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态，那么我们就可以使用 watch 选项在每次响应式属性发生变化时触发一个函数。

~~~html
<div id="demo">
	姓：<input type="text" v-model="firstName"/><br />
	名：<input type="text" v-model="lastName"/><br />
	姓名(单向)：<input type="text" v-model="funllname" />
    			<!--firstName + lastName-->
</div>

<script>
var vm = new Vue({
  el: '#demo',
  data() {
    return { firstName: 'Aaa', lastName: 'bbbB', funllname: '' }
  },
  watch: {
    firstName(value) {
      // 当firstName值改变时执行,初始化不会执行
      this.funllname = `${value} ${this.lastname}`
    },
  }
})
~~~

也可以使用 vm 实例在外部监听：

~~~js
vm.$watch('lastName', function (newVal) { // 当lastName值改变时执行,初始化不会执行
  this.funllName = `${this.firstName} ${newVal}`
})
~~~

## 动画显示(transition)

Vue transition 允许我们只设置隐藏或者显示的样式, 这样切换的时候, 也会有过渡的效果。

~~~html
<transition name="myAnim">
  <div v-show="fool">666</div>
</transition>
~~~

~~~scss
.[name]-enter-active, .[name]-leave-active{/*显示/隐藏的过渡样式*/}
.[name]-enter, .[name]-leave-to {/*隐藏的样式*/}
.[name]-enter-top, .[name]-leave {/*显示的样式*/}
~~~

![](https://cn.vuejs.org/images/transition.png)

## 模板标签(template)

template 是一个不可见的包装器元素，最后渲染的结果并不会包含这个 `<template>` 元素。

~~~html
<template v-for="(item, index) in 6">
  <div :key="index">
    {{ item }}
  </div>
</template>
~~~

## 过滤器(filter)

过滤器（filter）是输送介质管道上不可缺少的一种装置, 大白话，就是把一些不必要的东西过滤掉,过滤器实质不改变原始数据，只是对数据进行加工处理后返回过滤后的数据再进行调用处理，我们也可以理解其为一个纯函数。

Vue 允许你自定义过滤器，可被用于一些常见的文本格式化

~~~html
<!-- 字符串模板使用过滤器 -->
<time>{{time | dateFilter}}</time>
<!-- 命令模板使用过滤器 -->
<div v-bind:time="time | dateFilter"></div>
~~~

## 生命周期

`Vue` 的生命周期就是 `vue` 实例从创建到销毁的全过程，也就是 `new Vue()` 开始就是 `vue` 生命周期的开始。`Vue` 实例有⼀个完整的⽣命周期，也就是从开始创建、初始化数据、编译模版、挂载 `Dom` -> 渲染、更新 -> 渲染、卸载 等⼀系列过程，称这是 `Vue` 的⽣命周期。

<img src="https://pic.imgdb.cn/item/62f2058416f2c2beb10f8be1.png" alt="Vue 实例生命周期" style="zoom: 50%;" />

初始化阶段：

- `beforeCreate()`
- `created()`
- `beforeMount()`
- `mounted()`

更新阶段：

- `beforeUpdate()`
- `updated()`

销毁阶段：

- `beforeDestory()`
- `destoryed()`

一般比较常用的生命周期方法是

- `created()/mounted()`: 发送ajax请求, 启动定时器等异步任务
- `beforeDestory()`: 做收尾工作, 如: 清除定时器

## 自定义命令

~~~js
Vue.directive('upper-text', (el, binding) => {
  el.innerText = binding.value.toUpperCase()
  // 元素内所有字符串改变为大写
})
~~~

- **upper-text**：是自定义标签属性名，这个值可以是任何值。
- **el**：是调用此方法的 html 标签。
- **binding**：是这个标签所包含的内容。

单个实例中注册：

~~~typescript
new Vue({
  el: '#test',
  directives: { // 注册局部指令:只在当前vm管理范围有效
    'upper-text': function (el, binding) {
      el.innerText = binding.value.toLowerCase()// 全部转为大写
    }
  },
  data() {
    return { msg2: 'Dzl SB?,,,,Yes!!' }
  }
})
~~~

## 自定义插件

再写插件之前，首先我们要弄清楚什么是插件？

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制，一般有下面几种：

- 添加全局方法或者属性。
- 添加全局资源：指令 / 过滤器 / 过渡等
- 通过全局混入来添加一些组件选项
- 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。

定义插件：

~~~js
window.MyPlugin = { // 插件对象必须有一个install()
  install(Vue, options) {
    // 添加全局方法或属性
    Vue.ZdyWenFun = function (x) { console.log(x) }
    // 添加全局自定义标签属性
    Vue.directive('my-upper', (el, binding) => {
      el.innerText = binding.value.toUpperCase()
    })
  }
}
// 直接添加 Vue 对象实例方法
Vue.prototype.$myMethod = function () { console.log('我tm是实例方法') }
~~~

使用插件：

~~~html
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript" src="js/vue-myPlugin.js"></script>
<script type="text/javascript">
  Vue.use(MyPlugin) // 内部进行调用解析插件对象的install()
  const vm = new Vue({
    el: '#test',
    data: {msg: 'i LOve U'},
    //添加的实例方法
	mounted() {this.$myMethod()}
  })
  
  // 添加的全局方法 可以在任何地方调用
  Vue.ZdyWenFun('全局方法阿nmd');
  // 添加的实例方法 只能在当前的vm实例中调用
  vm.$myMethod()
</script>
~~~
