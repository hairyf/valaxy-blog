---
title: React Hooks
date: 2021-07-10 16:00:00
categories:
  - Notes
  - Client
  - react
tags: 
  - react
---

React Hooks 就是用函数的形式代替原来的继承类的形式，并且使用预函数的形式管理 `state`，有 hooks 可以不再使用类的形式定义组件了。这时候你的认知也要发生变化了，原来把组件分为有状态组件和无状态组件，有状态组件用类的形式声明，无状态组件用函数的形式声明。那现在所有的组件都可以用函数来声明了。

<!-- more -->

> 需要注意的是， React Hooks 仅在 16.9 版本后支持，在使用时要注意 react 的版本是否支持。

我们先来简单直观的对比下 hooks 与 class 写法的不同。

Class：

~~~jsx
import React, { Component } from 'react'
class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (<>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.addCount.bind(this)}>Click me</button>
        </>)
  }

  addCount() { // 每次加一, 需访问 this.state
    this.setState({ count: this.state.count + 1 })
  }
}

export default Example
~~~

Hooks：

~~~jsx
import React, { useState } from 'react'
function CountHooks() {
  const [count, setCount] = useState(0)
  return (<>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>click me</button>
    </>)
}
export default CountHooks
~~~

可以发现 Hooks 的定义对比 Class 代码量和简洁性都具有更好的语法支持，且流程是从上往下的，便于浏览。

## Hooks 的限制

react 规定我们必须把 hooks 写在函数的最外层，不能写在 `ifelse` 等条件语句当中，来确保 hooks 的执行顺序一致。

~~~jsx
import React, { useState } from 'react'
let showSex = true
function Example() {
  // 声明了count状态, 接受了值与设置值的方法
  const [age, setAge] = useState(18)
  if (showSex) { // 报错
    const [sex, setSex] = useState('男')
    showSex = false
  }
  const [work, setWork] = useState('前端工程师')
  return (<>
        <p>Mr_Mao 今年：{age} </p>
        <p>性别：{sex} </p>
        <p>工作是：{work} </p>
    </>)
}
export default Example
~~~

## 生命周期

在使用 React Hooks 的情况下，我们可以使用 `useEffect` 实现生命周期效果。

~~~jsx
import React, { useEffect, useState } from 'react'
function CountHooks() {
  const [count, setCount] = useState(0)
  // ---关键代码---------start-------
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
  })
  // ---关键代码---------end-------
  return (<>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>click me</button>
    </>)
}
export default CountHooks
~~~

React 首次渲染和之后的每次渲染都会调用一遍 `useEffect` 函数，`useEffect` 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而 `componentDidMount` 和 `componentDidUpdate` 中的代码都是同步执行的。

### 组件卸载

每次组件更新时，都会先试着清除上次的副作用(`useEffect` 中的 `return function`)

~~~jsx
import React, { useEffect, useState } from 'react'
function CountHooks() {
  const [count, setCount] = useState(0)
  // ---关键代码---------start-------
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      // 返回一个副作用的解绑函数
    }
  })
  // ---关键代码---------end-------
  return (<>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>click me</button>
    </>)
}
export default CountHooks
~~~

`useEffect` 还有第二个数组参数，用来指定所监听的 `state` 列表，该参数缺省的话默认应该是全监听的，明确提供空数组时，每次组件更新都不会再执行该“副作用”，只有最终组件卸载时，react 会兜个底，调用解绑回调。

~~~jsx
useEffect(() => {
  console.log(`useEffect=>You clicked ${count} times`)
  return () => { /* 组件销毁时执行 */ }
}, [])
useEffect(() => {
  console.log(`useEffect=>You clicked ${count} times`)
  return () => { /* count改变时 */ }
}, [count])
~~~

### 实际对比

~~~js
// 初次挂载(componentDidMount)
useEffect(() => {}, [])
// 组件卸载(componentWillUnmount)
useEffect(() => {
  return () => {}
}, [])
// 自动收集更新(componentDidUpdate)
useEffect(() => {
  // 这里的内部依赖会被收集
  // 当 state 发生变化, 函数会被触发
})
~~~

## 组件上下文(context)

在父子组件中传递，可以使用 `createContext` 与 `useContext` 传递父组件参数。

~~~jsx
import React, { createContext, useContext, useState } from 'react'
// 创建count上下文
const CountContext = createContext()
// 子组件
function Counter() {
  const count = useContext(CountContext)
  return <h2>{count}</h2>
}
// 父组件
function CountHooks() {
  const [count, setCount] = useState(0)
  return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            {/* 创建一个上下文组件, value存放需要传递的值, 标签内传入组件 */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
  )
}
export default CountHooks
~~~

## 标识元素(ref)

在 React Hooks 中，`useRef` 用于获取 React JSX 中的 DOM 元素，或用来保存状态变量，由于 `useRef` 的特性，保存的状态不会每次渲染都发生改变，且具有一定的数据响应式。

~~~jsx
import React, { useEffect, useRef, useState } from 'react'
function Example8() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Hello ,useRef'
    console.log(inputEl)
  }
  // -----------关键代码--------start
  const [text, setText] = useState('jspang')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log('textRef.current:', textRef.current)
  })
  // ----------关键代码--------------end
  return <>
        {/* 保存input的ref到inputEl */}
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>在input上展示文字</button>
        <br />
        <br />
        <input value={text} onChange={(e) => { setText(e.target.value) }} />
    </>

}
export default Example8
~~~

## 解决性能问题

使用function的形式来声明组件，失去了 `shouldCompnentUpdate`（在组件更新之前）这个生命周期，也就是说我们没有办法通过组件更新前条件来决定组件是否更新。而且在函数组件中，也不再区分`mount`和`update`两个状态，这意味着函数组件的每一次调用都会执行内部的所有逻辑，就带来了非常大的性能损耗。而 `useMemo` 则主要用来解决使用 React hooks 产生的无用渲染的性能问题。

实际案例：

~~~jsx
import React, { useMemo, useState } from 'react'
function Example() {
  const [xiaohong, setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('志玲待客状态')
  return <>
        <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
        <button onClick={() => { setZhiling(`${new Date().getTime()},志玲向我们走来了`) }}>志玲</button>
        <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
}
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return `${name},小红向我们走来了`
  }
  // 每当父组件状态发生改变都会执行该方法, 这样会导致性能出现问题
  const actionXiaohong = changeXiaohong(name)
  return <>
        <div>{actionXiaohong}</div>
        <div>{children}</div>
    </>
}

export default Example
~~~

这时候你会发现在浏览器中点击`志玲`按钮，小红对应的方法都会执行，结果虽然没变，但是每次都执行，这就是性能的损耗。目前只有子组件，业务逻辑也非常简单，如果是一个后台查询，这将产生严重的后果。所以这个问题必须解决。

这个时候就可以使用 `useMemo`，表示依赖项，只有依赖项更新才会匹配并重新执行：

```jsx
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return `${name},小红向我们走来了`
  }
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
  )
}
```

这时在浏览器中点击一下`志玲`按钮，`changeXiaohong`就不再执行了。也节省了性能的消耗。从程序本身看到优化的作用。好的程序员对自己写的程序都是会进行不断优化的，这种没必要的性能浪费也是绝对不允许的，所以`useMemo`的使用在工作中还是比较多的。

而 `useCallback` 与 `useMemo` 类似，只不过缓存的对象变成了方法。

```jsx
const onReset = useCallback(() => {
  // ...
}, [])
```

## 组件状态机(reducer)

reducer 的概念是伴随着Redux的出现逐渐在JavaScript中流行起来。但我们并不需要学习 Redux 去了解 Reducer。简单来说 reducer 是一个函数`(state, action) => newState`，既接收当前应用的 state 和触发的动作 action，计算并返回最新的 state。下面是一段伪代码：

```js
// 举个栗子 计算器reducer，根据state（当前状态）和action（触发的动作加、减）参数，计算返回newState
function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}
```

而 `useReducer` 是 React 提供的一个高级 Hook，它不像 useEffect、useState、useRef 等必须 hook 一样，没有它我们也可以正常完成需求的开发，但 `useReducer` 可以使我们的代码具有更好的可读性、可维护性、可预测性。

~~~jsx
import React, { useReducer } from 'react'
function ReducerDemo() {
  // 定义一个状态, useReducer参数一是Reducer的状态函数, 第二个参数是该状态的默认值
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default: return state
    }
  }, 0)
  return <>
        <div>
            <h2>现在的分数是{count}</h2>
            {/* 点击进行派发, 改变count的状态 */}
            <button onClick={() => dispatch('add')}>Increment</button>
            <button onClick={() => dispatch('sub')}>Decrement</button>
        </div>
    </>
}
export default ReducerDemo
~~~

### 全局状态管理

useReducer 主要实现了状态管理采用 Reducer 模式管理，Context 主要实现了多个组件中数据的传递。两个结合起来就能实现一个全局的状态数据管理。

~~~jsx
import React, { createContext, useReducer } from 'react'
// 定义一个全局上下文组件
export const ColorContext = createContext({})
// 定义action改变状态的常量
export const UPDATE_COLOR = 'UPDATE_COLOR'
// 定义一个纯函数reducer状态库
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return state.color
    default:
      return state
  }
}
export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return <>
        {/* 全局上下文中传入对象, 该对象可全局中每个组件使用useContext引用 */}
        {/* 传入使用useReducer定义的状态与派发方法, 形成全局都能看到与调用的状态库 */}
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    </>
}
~~~

## 自定义 Hooks 函数

由于 `Hooks` 的特性，使得逻辑与视图可分离，我们可以将视图的逻辑抽离简化组件代码，这在 Class 中是无法做到的，这也是 React Hooks 的一大杀手锏。

而自定义 `Hooks` 则是抽离组件逻辑部分，形成一个功能 `Hooks` 函数，这能很大程度的保证组件代码清晰，定义 `hook` 一般使用 `use[Fun]` 开头，这能更好的区分 `Hooks`。

我们来简单的分析一个使用场景：

获取浏览器窗口的尺寸是一个经常使用的功能，这样经常使用的功能，就可以封装成一个自定义`Hooks`函数。

~~~jsx
import React, { useCallback, useEffect, useState } from 'react'
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return size
}
function Example9() {
  const size = useWinSize()
  return <div>页面Size:{size.width}x{size.height}</div>
}
export default Example9
~~~