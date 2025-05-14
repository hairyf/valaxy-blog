---
title: socked.io 实时应用开发
date: 2022-07-01
categories:
  - Notes
  - Client
  - Other
tags:
  - Flutter
---

由于写原生的 WebSocket 在处理低版本浏览器的兼容性上的困难，所以一般在写实时交互的这种项目时一般会利用到 `socket.io`。`socket.io` 并不仅仅是 `WebSocket`，还包含着 AJAX long polling，AJAX multipart streaming，JSONP Polling 等。`socket.io` 可以看做是基于 `engine.io` 的二次开发。通过 `emit` 和 `on` 可以轻松地实现服务器与客户端之间的双向通信，`emit`来发布事件，`on`来订阅事件。

<!-- more -->

## 登录登出

先从`app.js`开始：

```js
const users = {}
const app = express()
const server = require('node:http').createServer(app)
const io = require('socket.io').listen(server)
// 将socket.io绑定到服务器上，使得任何连接到服务器的客户端都具有实时通信的功能

// 服务器来监听客户端
io.on('connection', (socket) => {
  // socket是返回的连接对象,两端的交互就是通过这个对象
})
```

需要创建一个对象（`users`）来存储在线用户，键值为用户昵称，为用户登录来订阅个事件：

```js
socket.on('login', (nickname) => {
  if (users[nickname] || nickname === 'system') {
    socket.emit('repeat')
  }
  else {
    socket.nickname = nickname
    users[nickname] = {
      name: nickname,
      socket,
      lastSpeakTime: nowSecond()
    }
    socket.emit('loginSuccess')
    UsersChange(nickname, true)
  }
})
socket.on('disconnect', () => {
  if (socket.nickname && users[socket.nickname]) {
    delete users[socket.nickname]
    UsersChange(socket.nickname, false)
  }
})
function UsersChange(nickname, flag) {
  io.sockets.emit('system', {
    nickname,
    size: Object.keys(users).length,
    flag
  })
}
function nowSecond() {
  return Math.floor(new Date() / 1000)
}
```

用户登录时需要验证其昵称是否含有，假若函数，则触发在客户端的 `js` 代码中注册的 `repeat` 事件，反之触 发`loginSuccess` 事件并且登录成功后需要向所有的客户端来广播，所以利用了 `io.sockets.emit`。`repeat`，`loginSuccess`，`system`，在 `src/js/index.js` 中进行注册，主要用于页面的显示，也就是一些 dom 操作，所以在这里没有什么好讲的。用户退出，直接调用默认事件 `disconnect` 就好，并将该用户从用户对象中移除。

## 心跳检测

在用户的状态上的坑还是不少的，因为`WebSocket`中间过程比较复杂，经常会出现一些异常的情况，所以需要进行**心跳检测**，我采用的方式是服务端定时遍历用户列表，假若用户最后的发言时间与现在相比超过了5分钟，就将其视为掉线，从而避免了"用户undefined退出群聊"的这种情况。

```js
function pong() {
  const now = nowSecond()
  for (const k in users) {
    if (users[k].lastSpeakTime + MAX_LEAVE_TIME < now) {
      const socket = users[k].socket
      users[k].socket.emit('disconnect')
      socket.emit('nouser', '由于长时间未说话，您已经掉线，请重新刷新页面')
      socket = null
    }
  }
}
// 心跳检测
setInterval(pong, PONG_TIME)
function UsersChange(nickname, flag) {
  io.sockets.emit('system', {
    nickname,
    size: Object.keys(users).length,
    flag
  })
}
```
