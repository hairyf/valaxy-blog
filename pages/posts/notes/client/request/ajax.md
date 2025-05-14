---
title: Ajax 异步数据传输
categories:
  - Notes
  - Client
  - request
tags:
  - ajax
date: 2019-08-02
---

`Ajax`并不是一项新技术，它实际上是几种技术，每种技术各尽其职，以一种全新的方式聚合在一起。
- 服务器端语言，服务器需要具备向浏览器发送特定信息的能力，`Ajax` 与服务器端语言无关。
- `XML (eXtensible Markup Language，可扩展标记语言)` 是一种描述数据的格式。`Aajx` 程序需要某种格式化的格式来在服务器和客户端之间传递信息，`XML` 是其中的一种选择。
- `XHTML（eXtended Hypertext Markup Language）`,使用扩展超媒体标记语言）和 `CSS（Cascading Style Sheet,级联样式单）`标准化呈现；
- `DOM（Document Object Model,文档对象模型）`实现动态显示和交互；
- 使用 `XMLHTTP` 组件 `XMLHttpRequest` 对象进行异步数据读取，`JavaScript` 绑定和处理所有数据

<!-- more -->

## Ajax的缺陷

`Ajax`不是完美的技术。使用 `Ajax`，它的一些缺陷不得不权衡：

- 由 `Javascript` 和 `Ajax` 引擎导致的浏览器的兼容
- 页面局部刷新，导致后退等功能失效。
- 对流媒体的支持没有 `FLASH`、`Java Applet` 好。
- 一些手持设备（如手机、`PDA`等）支持性差。

## XMLHttpRequest

`XMLHttpRequest` 最早是在IE5中以ActiveX组件的形式实现的，他不属于 `W3C` 标准.

创建 `XMLHttpRequest` 对象（由于非标准所以实现方法不统一）
- `Internet Explorer` 把 `XMLHttpRequest` 实现为一个`ActiveX`对象
- 其他浏览器`（Firefox、Safari、Opera…）`把它实现为一个本地的`JavaScript`对象。
- `XMLHttpRequest` 在不同浏览器上的实现是兼容的，所以可以用同样的方式访问- `XMLHttpRequest` 实例的属性和方法，而不论这个实例创建的方法是什么。

所以为了节省时间，可以把对象检测的内容打包成一个可复用的函数：

~~~js
function getHTTPObject() {
  var xhr = false
  if (window.XMLHttpRequest)
    xhr = new XMLHttpRequest()
  else if (window.ActiveXObject)
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  return xhr
}
~~~

:::info
对window.XMLHttpRequest的调用会返回一个对象或null，if语句会把调用返回的结果看作是true或false（如果返回对象则为true，返回null则为false）。

如果XMLHttpRequest对象存在，则把 xhr 的值设为该对象的新实例。

如果不存在，就去检测 ActiveObject 的实例是否存在，如果答案是肯定的，则把微软 XMLHTTP 的新实例赋给 xhr
:::

| 方法                               | 描述                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| abort()                            | 停止当前请求                                                 |
| getAllResponseHeaders()            | 把HTTP请求的所有响音首部作为键/值返回                        |
| open("method","url")               | 简历对服务器的调用。Method参数可以是GET或POST或PUT.url参数可以是相对url或绝对url |
| send(content)                      | 向服务器发送请求                                             |
| setRequestHeader("header","value") | 把指定首部设置为所提供的值。在设置任何首部之前先调用open()   |

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 每个状态改变是都会触发这个时间处理器，通常会调用一个javaScript函数 |
| readyState         | 请求的状态，有5个可取值：0=未初始化、1=正在加载、2=已经加载、3、交互中、4=、完成 |
| responseText       | 服务器的响应，表示一个串                                     |
| responseXML        | 服务器的响应，表示为XML，这个对象可以解析为DOM对象           |
| status             | 服务器的HTTP状态码（200对应OK、404对应NotFount、等）         |
| statusText         | HTTP状态码的相应文本（OK或NotFount等）                       |

## 发送请求

利用XMLHttpRequest 实例与服务器进行通信包含以下3个关键部分：

- onreadystatechange 事件处理函数
- open 方法
- send 方法

### open(method, url, asynch)

`XMLHttpRequest` 对象的 `open` 方法允许程序员向服务器发送请求。

**method**：
请求类型，类似 `“GET”`或`”POST”`的字符串。

若只想从服务器检索一个文件，而不需要发送任何数据，使用GET(可以在GET请求里通过附加在URL上的查询字符串来发送数据，不过数据大小限制为2000个字符)。若需要向服务器发送数据，用POST。

在某些情况下，有些浏览器会把多个XMLHttpRequest请求的结果缓存在同一个URL。如果对每个请求的响应不同，就会带来不好的结果。在此将时间戳追加到URL的最后，就能确保URL的唯一性，从而避免浏览器缓存结果。`(“?time=”+new Date());`

**url**：路径字符串，指向你所请求的服务器上的那个文件。可以是绝对路径或相对路径。

**asynch**：
表示请求是否要异步传输，默认值为true。指定true，在读取后面的脚本之前，不需要等待服务器的相应。指定false，当脚本处理过程经过这点时，会停下来，一直等到Ajax请求执行完毕再继续执行。

### send(data)

`open` 方法定义了 Ajax 请求的一些细节，send 方法可为已经待命的请求发送指令。

**data**：将要传递给服务器的字符串。

当向 `send()` 方法提供参数时，要确保open()中指定的方法是 `POST`，如果没有数据作为请求体的一部分发送，则使用 `null`.

~~~js
var request = getHTTPObject()
request.open('GET', 'file.txt', true)
request.send(null)
request.onreadystatechange = doSomeThing
~~~

### onreadystatechange

该事件处理函数由服务器触发，而不是用户。

## 接收响应

用 XMLHttpRequest 的方法可向服务器发送请求。在 Ajax 处理过程中，XMLHttpRequest 的如下属性可被服务器更改：
- readyState
- status
- responseText
- responseXML

### readyState
readyState 属性表示 Ajax 请求的当前状态。它的值用数字代表。
- 0 代表未初始化。 还没有调用 open 方法
- 1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
- 2 代表已加载完毕。send 已被调用。请求已经开始
- 3 代表交互中。服务器正在发送响应4 代表完成。响应发送完毕

### status

服务器发送的每一个响应也都带有首部信息。三位数的状态码是服务器发送的响应中最重要的首部信息，并且属于超文本传输协议中的一部分。

常用状态码及其含义：
- 404 没找到页面(not found)
- 403 禁止访问(forbidden)
- 500 内部服务器出错(internal service error)
- 200 一切正常(ok)
- 304 没有被修改(not modified)

> 在 XMLHttpRequest 对象中，服务器发送的状态码都保存在 status 属性里。通过把这个值和 200 或 304 比较，可以确保服务器是否已发送了一个成功的响应。

### responseText

XMLHttpRequest 的 responseText 属性包含了从服务器发送的数据。它是一个HTML,XML或普通文本，这取决于服务器发送的内容。

当 readyState 属性值变成 4 时, responseText 属性才可用，表明 Ajax 请求已经结束。

~~~js
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    if (request.status === 200 || request.status === 304)
      alert(request.responseText)
  }
}
~~~

### responseXML

如果服务器返回的是 XML， 那么数据将储存在 responseXML 属性中，只有服务器发送了带有正确首部信息的数据时， responseXML 属性才是可用的。 MIME 类型必须为 text/xml

## 数据格式

在服务器端 AJAX 是一门与语言无关的技术。在业务逻辑层使用何种服务器端语言都可以。
从服务器端接收数据的时候，那些数据必须以浏览器能够理解的格式来发送。服务器端的编程语言只能以如下 3 种格式返回数据：
- XML
- JSON
- HTML

### XML

**优点**：XML 是一种通用的数据格式。不必把数据强加到已定义好的格式中，而是要为数据自定义合适的标记。利用 DOM 可以完全掌控文档。

**缺点**：如果文档来自于服务器，就必须得保证文档含有正确的首部信息。若文档类型不正确，那么 responseXML 的值将是空的。当浏览器接收到长的 XML 文件后， DOM 解析可能会很复杂

### JSON

JSON（JavaScript Object Notation）一种简单的数据格式，比xml更轻巧。JSON是JavaScript原生格式，这意味着在JavaScript中处理JSON数据不需要任何特殊的API或工具包。
JSON的规则很简单：
- 对象是一个无序的“‘名称/值’对”集合。
-一个对象以“{”（左括号）开始，“}”（右括号）结束。
- 每个“名称”后跟一个“:”（冒号）；
- “‘名称/值’对”之间使用“,”（逗号）分隔。

~~~js
[{
  songname: '70亿人の头の上に风船を',
  singer: 'きくお',
  album: 'きくおミク',
}, {
  songname: '70亿人の头の上に风船を',
  singer: 'きくお',
  album: 'きくおミク',
}]
~~~

JSON 用冒号(而不是等号)来赋值。每一条赋值语句用逗号分开。整个对象用大括号封装起来。可用大括号分级嵌套数据。

JSON 只是一种文本字符串。它被存储在 responseText 属性中，为了读取存储在 responseText 属性中的 JSON 数据，需要根据 JavaScript 的 eval 语句。函数 eval 会把一个字符串当作它的参数。

然后这个字符串会被当作 JavaScript 代码来执行。因为 JSON 的字符串就是由 JavaScript 代码构成的，所以它本身是可执行的。

~~~js
// 使用eval()
var jsonStr = xhr.responseText
var personObj = eval(`(${jsonStr})`)
var name = personObj.name
// 使用JSON.parse()
var jsonStr = xhr.responseText
var personObj = JSON.parse(jsonStr)
var name = personObj.name
~~~

**优点**：作为一种数据传输格式，JSON 与 XML 很相似，但是它更加灵巧。JSON 不需要从服务器端发送含有特定内容类型的首部信息。

**缺点**：语法过于严谨，代码不易读，eval 函数存在风险

### HTML

HTML 由一些普通文本组成。如果服务器通过 XMLHttpRequest 发送 HTML， 文本将存储在 responseText 属性中。
不必从 responseText 属性中读取数据。它已经是希望的格式，可以直接将它插入到页面中。插入 HTML 代码最简单的方法是更新这个元素的 innerHTML 属性。
**优点**：从服务器端发送的 HTML 代码在浏览器端不需要用 JavaScript 进行解析。HTML 的可读性好。HTML 代码块与 innerHTML 属性搭配，效率高。

**缺点**：若需要通过 AJAX 更新一篇文档的多个部分，HTML 不合适，innerHTML 并非 DOM 标准。

### 对比小结

- 若应用程序不需要与其他应用程序共享数据的时候, 使用 HTML 片段来返回数据时最简单的
- 如果数据需要重用, JSON 文件是个不错的选择, 其在性能和文件大小方面有优势
- 当远程应用程序未知时, XML 文档是首选, 因为 XML 是 web 服务领域的 “世界语”

## 实际运用 Ajax 请求

### 兼容函数

~~~js
function getHTTPObject() {
  var xhr = false
  if (window.XMLHttpRequest)
    xhr = new XMLHttpRequest()

  else if (window.ActiveXObject)
    xhr = new ActiveXObject('Microsoft.XMLHTTP')

  return xhr
}
~~~

### 请求与响应

~~~js
// 1. 创建 XmlHttpRequest 对象
var request = getHTTPObject()
// 2. 准备发送请求的数据：url
var url = 'helloAjax.txt' + `?time=${new Date()}` // 防止缓存
var method = 'GET'
// 3. 调用 XMLHttpRequest 对象的 open 方法规定发送格式
request.open(method, url)
// 4. 调用 XMLHttpRequest 对象的 send 方法,发送请求
request.send(null)
// 5. 为 XMLHttpRequset 对象添加 onreadystatechange 监听函数
request.onreadystatechange = function () {
  // 6. 判断响应是否完成：XMLHttpRequest 对象的 readyState 属性值为4的时候
  // 7. 在判断响应是否可用：XMLHttpRequest 对象 status 属性值为 200 或者304
  if ((request.readyState === 4 && request.status === 200) || request.status === 304) {
    // 8. 打印输出结果 request
    console.log(request)
  }
}
~~~

## 使用 JQuery 请求

Query是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（框架）于2006年1月由John Resig发布。JQuery 也封装了关于 ajax 请求相关的功能函数。

### $.load

替换 DOM 内容为请求的响应结果。

`$dom.load(url);`

### $.get()

执行 `GET` 请求

`$.get(url,data,success(response,status,xhr),dataType)`

### $.post()

执行 `POST` 请求

`$.post(url,data,success(data, textStatus, jqXHR),dataType)`

### $.ajax()

传入配置请求

`$.ajax({settings});`

## 使用 Axios 请求

Axios 是一个专注于基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

###  `GET` 请求

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

// 可选地，上面的请求可以这样做
axios.get('/user', {
  params: {
    ID: 12345
  }
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

###  `POST` 请求

```js
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

### 并发请求

```js
function getUserAccount() {
  return axios.get('/user/12345')
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions')
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread((acct, perms) => {
    // 两个请求现在都执行完成
  }))
```

## 使用 Fetch 请求

Fetch 提供了对 Request 和 Response （以及其他与网络请求有关的）对象的通用定义。使之今后可以被使用到更多地应用场景中：无论是 service worker、Cache API、又或者是其他处理请求和响应的方式，甚至是任何一种需要你自己在程序中生成响应的方式。

Fetch 比 XHR 更稳定强力，但是很多浏览器不支持。但是随着 IE 浏览器的使用量减少(微软在逐渐开发使用Edge浏览器取代IE)，Fetch 的使用会越来越流行，但是在这之前，我们可能还需要用一段时间的 XHR。

~~~js
fetch('url').then((response) => { return response.json() })
  .then((data) => {
    console.log(data)
  })
  .catch((myJson) => {
    console.log(myJson)
  })
~~~
