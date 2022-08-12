---
title: React 基本应用
date: 2019-10-10 15:00:00
categories:
  - Notes
  - Client
  - react
tags: 
  - react
---

React 中使用提供了数据绑定和各类时间的绑定，允许访问 React 的各生命周期对视图与数据进行处理，本篇介绍 React 的一些基本应用，在日常开发中都是必须掌握的技能。

<!-- more -->

## 数据双向绑定实现

1. 绑定动态数据（此时input的值是固定的）

```jsx
// state
this.state = { pwd: '' }
// render
<input value={this.state.pwd} />
```

2. 绑定输入事件，触发时更改 pwd 更新

```jsx
<input value={this.state.pwd} onChange={(event) => this.setState({ pwd: event.target.value })} />
```

## 生命周期（旧）

![](https://pic.imgdb.cn/item/62f0e60416f2c2beb11dc2ea.jpg)

1. 第一次初始化渲染显示: ReactDOM.render()
   - constructor(): 创建对象初始化state
   - componentWillMount() : 将要挂载回调
   - ender() : 用于插入虚拟 DOM 回调
   - componentDidMount() : 已经挂载回调
2. 每次更新state: this.setSate()
   - componentWillUpdate() : 将要更新回调
   - render() : 更新(重新渲染)
   - componentDidUpdate() : 已经更新回调
3. 移除组件: ReactDOM.unmountComponentAtNode(containerDom)
   - componentWillUnmount() : 组件将要被移除回调

整个流程基调基本分为三部分（旧/新）：

- 初始化 > 挂载前 > 挂载 > 挂载后
- 更新前 > 更新 > 更新后
- 卸载前 > 卸载后

## 生命周期（新）

![](https://pic.imgdb.cn/item/62f0e68816f2c2beb11fd1f5.jpg)

替换的钩子：

- UNSAFE_componentWillUnmount(): 挂载前
- UNSAFE_componentWillUpdate(): 更新前
- UNSAFE_componentWillReceiveProps(): props 发生改变

新钩子：

- getDerivedStageFromProps(): props 派生状态(state)
- getSnapshotBBeforeUpdate(): 保存数据快照(列表保存滚动高度)
## React 事件

React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同：

- React 事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)

~~~js
class MyComponent2 extends React.Component {
  render() {
    return <div onClick={this.notice}>ES6类组件(复杂组件)</div>
  }

  notice = () => {
    console.log('React事件触发')
  }
}
~~~

剪切板事件：

- onCopy
- onCut
- onPaste

复合事件：

- onCompositionStart
- onCompositionUpdate
- onCompositionEnd

键盘事件：

- onKeyDown
- onKeyPress
- onKeyUp

焦点事件：

- onFocus
- onBlur

表单事件：

- onChange
- onInput
- onInvalid
- onSubmit

鼠标事件：

- onClick
- onContextMenu
- onDoubleClick
- onDrag
- onDragEnd
- onDragEnter
- onDragExit
- onDragLeave
- onDragOver
- onDragStart
- onDrop
- onMouseDown
- onMouseEnter
- onMouseLeave
- onMouseMove
- onMouseOut
- onMouseOver
- onMouseUp