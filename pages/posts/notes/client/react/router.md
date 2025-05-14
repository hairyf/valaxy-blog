---
title: React 面向路由编程
date: 2019-10-10 17:00:00
categories:
  - Notes
  - Client
  - react
tags:
  - react
---

单页 Web 应用（single page web），整个应用只有一个完整的页面，点击页面中的链接不会刷新页面, 本身也不会向服务器发请求，当点击路由链接时, 只会做页面的局部更新，数据都需要通过 ajax 请求获取, 并在前端异步展现。

![](https://pic.imgdb.cn/item/62f1c0e716f2c2beb1e94b38.jpg)

react-router-dom 专门用于实现一个 SPA 应用，基于 react 的项目基本都会用到此库。

<!-- more -->

```sh
npm i react-router-dom -D
```

注册路由：

~~~jsx
<Route path="/about" component={About}>
~~~

当浏览器的 hash 变为 #about 时, 当前路由组件就会变为 About 组件

## 定义模块

`components/app.jsx`

~~~jsx
// 引入定义路由功能组件
import { BrowserRouter, Redirect,
        NavLink, Route, Switch
} from 'react-router-dom';

// 引入路由组件
import About from '../views/about'
import Home from '../views/home'
render {
  return (
  <BrowserRouter>{/* 1.定义路由管理框,如果父组件已经定义,那么子组件不需要定义 */}
		<div>
      	{/* 2.定义路由链接 */}
				<NavLink to='/about'>About</NavLink><br />
				<NavLink to='/home'>Home</NavLink>
		</div>

		<div>
			<Switch>{/* 3.定义路由显示区域 */}
					<Route path='/about' component={About}/>
					<Route path='/home' component={Home}/>
        	{/* 4.定义路由默认路径 */}
        	<Redirect to='/about'/>
        {/* 4.定义根路径路由 */}
        {/* <Route component={ Main }></Route> */}
			</Switch>
		</div>
  </BrowserRouter>
  )
}
~~~

## 传递参数

react-router-dom 有三种参数的传递，基本特点都在于参数与地址栏显示上。

### params

传递 path 参数、通过路径占位符实现，状态保留在 url 中。

定义路由组件：
```jsx
<Route path="/demo/test/:name/:age" component={Test} />
```
定义传递参数：
```jsx
<Link path="/demo/test/tom/18">详情</Link>
```

### search

传递 urlencoded 编码字符串，`react-router-dom` 没有提供实际的解析工具，需要借助 `qs` 解析。

定义传递参数：
```jsx
<Link path="/demo/test?name=tom&age=18">详情</Link>
```

### query

通过参数 query 将信息传递，但不具备状态保留，url 不可见。

定义传递参数：
```jsx
<Link to={{ path: '/demo/test', query: { name: 'tom', age: 18 } }}>详情</Link>
```

### state

通过参数 state 将信息传递过去，用法与 query 一致。

定义传递参数：
```jsx
<Link to={{ path: '/demo/test', state: { name: 'tom', age: 18 } }}>详情</Link>
```

> query 跟 state 用一个重要的区别，那就是在页面跳转之后，重新刷新当前页面，query 会消失，而 state 不会消失，即依然保存在 location 中，但浏览器重新打开依旧会销毁状态。

## 定制链接

我们还可以通过组件覆盖的方式定制一个项目专属的 `Link` 组件来简化组件的使用。

定义组件：

~~~jsx
function MyNavLink(props) {
  return (<NavLink {...props} activeClassName="acc" />)
}
~~~

实际使用：

```jsx
<MyNavLink to='/about'>About</MyNavLink>
<br />
<MyNavLink to='/home'>Home</MyNavLink>
```

## 属性方法

`react-router-dom` 提供了路由跳转与基本状态属性的查询，基本基于浏览器的 hash 与 location 实现。

- 跳转 - `go(to|path)`
- 回退 - `goBack(num?)`
- 前进 - `goForward(num?)`
- 监听 - `listen(num?)`
- 信息 - `location: {hash, pathname, search, state}`
- 推入 - `push(to|path)`
- 替换 - `replace(to|path)`

其中 `push`、`replace`、`go` 均为路由的跳转方法，不同的地方则在于：

- push    为先进后出的跳转
- replace 为先出后进的跳转

在 Class 组件中，我们通过 `withRouter` 来包装组件从而使用路由方法，`withRouter` 会创建一个高阶函数，它通过传入 props 来传递路由方法。

~~~jsx
import { withRouter } from 'react-router-dom'
class Header extends Component {
  // ...
  render() {
    this.props.goBack()
  }
}
export default withRouter(Header)
~~~

## 路由形式

`react-router-dom` 支持 BrowserRouter 与 HashRouter 两种形式的路由，两种路由在底层原理、基本表现中都有不同。

底层机理的不同：
- BrowserRouter 使用的是 H5 的 history API，不兼容IE9及以下版本。
- HashRouter 使用的是 URL 的哈希值。

路径表现的不同：
- BrowserRouter 的路径中没有`#`，例如：`localhost:3000/demo/test`
- HashRouter 的路径包含 `#`，例如：`localhost:3000/#/demo/test`

参数状态的不同：
- BrowserRouter 没有任何影响，因为 `state` 保存在 `history` 对象中。
- HashRouter 刷新后会导致路由 `state` 参数的丢失。

## 懒加载

我们还可以根据组件懒加载的原理，对路由组件进行懒加载，从而实现首屏加载速度的提升。

~~~jsx
const Login = lazy(() => import('@/pages/Loading'))

function withFallback(component) {
  return (
    <>
      <Suspense fallback={<h1>loading.....</h1>}>
        {component}
      </Suspense>
    </>
  )
}
const Routes = (
  <>
    <Switch>
      <Route path="/xxx" component={Xxxx} />
      <Redirect to="/login" component={withFallback(Login)} />
    </Switch>
  </>
)
~~~
