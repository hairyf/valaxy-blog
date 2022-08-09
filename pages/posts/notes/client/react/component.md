---
title: React 面向组件编程
date: 2020-11-01
categories:
  - notes
  - client
  - react
tags: 
  - react
---

在 React 的世界里“一切都是组件”， 组件可以映射作函数式编程中的函数，React 的组件和函数一样的灵活的特性不仅仅可以用于绘制 UI，还可以用于封装业务状态和逻辑，或者非展示相关的副作用, 再通过组合方式组成复杂的应用. 本文尝试解释用 React 组件的思维来处理常见的业务开发场景。

<!-- more -->

要了解组件的思想，得先了解两个概念，就是模块与组件化。只要利用好模块与组件，既能带来开发效率的大幅提升，又能带来项目编码的可靠性。

- 模块化：向外提供特定功能的 js 程序, 一般就是一个 js 文件。这样可以复用、简化 js 的编写,。
- 组件化：一个界面的某个功能模块（html|css|js）这样可以复用编码、简化项目编码。

## 组件定义

React 中，组件定义有两种方式，一种利用 Function 定义的无状态组件，另一种则是 Class 定义的复杂组件。

Function 组件：

~~~jsx
function MyComponent () {
  return <div>工厂函数组件(简单组件)</div>
}
~~~

Class 类组件：

```jsx
class MyComponent2 extends React.Component  {
   render () {
     return <div>ES6类组件(复杂组件)</div>
   }
}
```

组件跟一个标签的使用方式相同，可以在组件中使用组件。如果要渲染组件，只要跟标签一样使用 `ReactDOM.render`。

~~~jsx
ReactDOM.render(<MyComponent />, document.querySelector('#example'));
~~~

实际上工作中组件编写的流程，一般可以细分为：

1. 拆分组件
2. 实现静态组件(只有静态界面，没有动态数据和交互)
3. 实现动态组件
  1. 实现初始化数据动态显示
  2. 实现交互功能

要注意的是，组件编写并不是毫无规则，要让我们更好的管理组件，我们在创建与使用组件时需要遵循以下的注意事项：

- 组件状态流向：看数据是某个组件需要（给他），还是某些组件需要（给共同的父组件）
- 组件状态改变：子组件中不能直接改变父组件的状态。数据状态在哪个组件，更新状态的行为就应该定义在哪个组件。

## 组件状态(state)

用于保存动态数据的一个容器，在 Class 组件中，通常定义在 constructor 中。

~~~jsx
constructor(props) {
	super(props)
  this.state = {
    count: 1
  }
}
~~~

setState 则被用于修改组件状态的方法，调用 setState 会使组件重新渲染，从而达到修改视图的目的

```jsx
this.setState({ count: this.count++ })
```


## 组件参数(props)

用于外部接收参数的容器，通常在渲染组件时定义在标签中，Class 组件内部拿取参数就在组件的 this.props 中，如果是 Function 组件，则在函数参数中。

Function 组件：

```jsx
// 构造组件接收参数
function Person(props) {
  return <p>{props.name}</p>
}
```

Class 类组件：

~~~jsx

// 类组件接收参数
class Person extends React.Component {
 render() {return <p>{this.props.name}</p>}
}
~~~

## 标识元素(refs)

标记获取元素的容器，通常定义在虚拟 DOM 上，用于获取指定的虚拟 DOM。

字符串获取：

~~~jsx
class Person extends React.Component {
 render() {
  return <p refs="content">{ props.name }</p>
 }
 show() {
  console.log(this.refs.content)
 }
}
~~~

回调函数获取：

~~~jsx
class Person extends React.Component {
 render() {
  return <p refs={p =>this.p = p}>{ props.name }</p>
 }
 show() {
  console.log(this.p)
 }
}
~~~

## 组件通信(props)

父组件通过 props 属性, 将一般数据传递给子组件，react 是单行数据流, 因此,如果子组件需要将数据传递给父组件。首先父组件通过 props 属性父组件的方法下发给子组件
子组件通过调用父组件将方法传参的方式将数据传递给父组件。

![](https://pic.imgdb.cn/item/62f1be6a16f2c2beb1e01283.jpg)

1. 父组件定义状态数据
   - 父组件定义改变状态数据方法
2. 父组件传递状态数据给子组件 B
   - 父组件传递改变状态数据方法给子组件 A
3. 子组件 A 调用方法改变父组件状态数据
   - 子组件 B 自动调用 `componentWillReceiveProps()` 方法并接收状态数据

还可以通过监视者模式，订阅消息而更改数据，但订阅消息通常很难追溯源，一般不经常经常性使用。

1. 引入消息订阅系统
   `import PubSub from 'pubsub-js'`
2. 发布消息
   `PubSub.publish('消息名',data)`
3. 订阅消息(当消息发送改变时执行，并接收数据)
   `PubSub.subscribe('消息名',(msg, data){...})`

## 修改状态(setState)

state 就是用来描述事物在某时刻的数据，可以被改变，改变后与视图相映射，用来保存数据和响应图。虽然状态可以改变，但不是响应式的，动态改变并没有与视图响应，想要改变并响应视图则需要 setState 修改并更图。setState 基本支持两种不同的使用方式，并有不同的作用。

直接修改状态：
```jsx
setState({ count: 12 })
```

更新后的状态：
```jsx
setState((state) => {
  console.log(state)
})
```

修改得到结果：
```jsx
setState({count: 2}, (state) => {
  console.log(state)
})
```

更新后在修改：
```jsx
setState((state) => {
  return { count: 3 }
})
```

## 组件懒加载(lazyLoad)

通过 import()、React.lazy 和 Suspense 共同一起实现了 React 的懒加载，也就是我们常说了运行时动态加载，即 OtherComponent 组件文件被拆分打包为一个新的包（bundle）文件，并且只会在 OtherComponent 组件渲染时，才会被下载到本地。

~~~jsx
// 1. 通过 React 的 lazy 函数配合 import() 函数动态加载路由组件 (路由组件代码会被分包)
const Login = lazy(() => import('@/pages/Loading'))
// 2. 通过异步组件 <Suspense> 指定在加载得到路由组件前, 显示自定义 loading 界面
const Component = <>
  <Suspense fallback={<h1>loading.....</h1>}>
      <Login />
  </Suspense>
</>
~~~

## 渲染优化(PureComponent)

仅使用 Component 会存在一些效率问题：

- 只要执行 `setState`，即使不改变状态数据，组件也会重新 `render`
- 当前组件重新 `render`，就会自动重新 `render` 子组件，即使没有父组件任何数据（效率低）

而我们想要的，只有当组件的 `state` 或 `props` 数据发生改变时才重新 `render`，这个时候，我们就可以使用 `PureComponent` 来对组件进行优化。

实际问题就是，React 为了通用组件的便捷性，`shouldComponentUpdate()` 总是会返回 `true`，这也导致了组件|子组件无时无刻都在触发更新。

而我们要解决，只要按照下述的思路去定制 `shouldComponentUpdate()` 即可

方式一 - 比较新旧变化：

- 修改 `shouldComponentUpdate` 方法。
- 比较新旧 `state` 或 `props` 数据, 如果有变化才返回 `true`，如果没有返回 `false`。

方式二 - 使用 PureComponent。

- 通过继承 Route.PureComponent 组件实现。
- 该组件内部修改了 shouldComponentUpdate 方法, 只有 `state` 和 `props` 数据变化才返回 `true`。

> 需要注意的是，PureComponent 仅仅只是进行数据的浅对比, 如果是数据对象内部变化, 不会发生 `render()`，所以要 render() 生效, 需要产生新数据。

## 子组件渲染(renderProps)

我们在一些定制化较强的组件，可以采用 props 中接受渲染组件，从而实现子组件渲染传入特定的插槽组件。

~~~jsx
const A = (props) => {
    const name = '12312321'
    return <div>{props.render(name)}</div>
}
const B = (props) => {
    return <div>{props.name}</div>
}
const Component = () => {
    return <A render={(name) => {<B name={name} />}}></A>
}
~~~

## 脚手架搭建

- 既 create-react-app，可以帮我们生成一个通用的目录结构，并且已经将我们所需要的工程环境配置好。
- 使用 node 编写，基于 webpack，所以必须要在自己的电脑上安装 node 环境。

```sh
npm i create-react-app -g
```

运行生成项目：

```sh
create-react-app react-demo
```

`src/index.js` 被作为默认引用的入口，它用户在项目中作为组件渲染的主要逻辑：

~~~jsx
import App from './components/app'
ReactDOM.render(<App />, document.getElementById('root'))
~~~

开发运行项目：

```sh
npm run start
```

生成打包项目：

```sh
npm run build
```

## Ant Design of React

`antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

- **手机版安装**：`npm install antd-mobile --save`
- **电脑版安装**：`npm install antd --save`

组件的使用：

~~~jsx
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(<Button />, mountNode);
~~~

## 按需引用样式

组件库的实际使用上，由于样式与组件分离的缘故，导致频繁使用组件会非常繁琐，我们可以利用一些插件来自动导入使用组件的样式，减少样式的导入。

```sh
npm i react-app-rewired babel-plugin-import customize-cra --save
```


1. 修改 `package.json`

~~~json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom"
  }
}
~~~

2. 创建 `config-overrides.js`

~~~js
const { override, fixBabelImports } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  })
)
~~~

实际使用：直接引用标签

~~~jsx
import { Button } from 'antd-mobile'
~~~