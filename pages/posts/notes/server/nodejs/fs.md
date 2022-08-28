---
title: NodeJS 文件系统（fs）
date: 2020-05-03 15:00:00
categories:
  - Notes
  - Server
  - NodeJS
tags: 
  - NodeJS
---

在 Node.js 中，与文件系统的交互是非常重要的，服务器的本质就将本地的文件发送给远程的客户端。Node.js 通过 fs 模块来和文件系统进行交互。该模块提供了一些标准文件访问 API 来打开、读取、写入文件，以及与其交互。要使用 fs 模块，首先需要对其进行加载。

<!-- more -->

~~~js
const fs = require('fs')
~~~

同步与异步：

- fs 模块中所有的操作都有两种形式可供选择同步和异步。
- 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。
- 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。

## 打开文件（open）

`fs.open` 用于打开文件，文件打开后可以得到文件描述符，之后可以对其进行读取或写入。

- `fs.open(path, flags[, mode], callback(fd))`
- `fs.openSync(path, flags[, mode])`

~~~js
// 异步打开文件
console.log('准备打开文件！')
fs.open('input.txt', 'r+', (err, fd) => {
  if (!err)
    console.log('文件打开成功！')
})
~~~

- **path**：文件的路径。
- **flags**：文件打开的行为。具体值详见下文。
- **mode**：设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- **callback**：回调函数，带有两个参数如：callback(err, fd)。

| Flag | 描述                                                   |
| ---- | ------------------------------------------------------ |
| r    | 以读取模式打开文件。如果文件不存在抛出异常。           |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。           |
| rs   | 以同步的方式读取文件。                                 |
| rs+  | 以同步的方式读取和写入文件。                           |
| w    | 以写入模式打开文件，如果文件不存在则创建。             |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败         |
| w+   | 以读写模式打开文件，如果文件不存在则创建。             |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以追加模式打开文件，如果文件不存在则创建。             |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。         |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

`fs.open` 是一个进程，使用完毕后需要对其进行关闭。

- `fs.close(fd, callback)`
- `fs.closeSync(fd)`

## 写入文件（write）

fs 中提供了四种不同的方式将数据写入文件：

- 简单写入
- 同步写入
- 异步写入
- 流式写入

### 简单写入

- `fs.writeFile(file, data[, options], callback)`
- `fs.writeFileSync(file, data[, options])`

- **file**：文件的路径。
- **data**：被写入的内容，可以是String或Buffer。
- **options**：对象，包含属性（encoding、mode、flag）
- **callback**：回调函数，带有两个参数如：callback(err, fd)。

~~~js
fs.writeFile('hello.txt', '这是通过writeFile写入的内容', { flag: 'w' }, (err) => {
  if (!err)
    console.log('写入成功~~~')
  else console.log('失败')
})
~~~

### 同异写入

- `fs.writeSync(fd, buffer, offset, length[, position])`
- `fs.writeSync(fd, data[, position[, encoding]])`

要完成同步写入文件，先需要通过 `openSync()` 打开文件来获取一个文件描述符，然后在通过 `writeSync()` 写入文件。

- **fd**：文件描述符，通过 `openSync()` 获取
- **data**：被写入的内容，可以是String或Buffer。
- **offset**： buffer写入的偏移量
- **length**：写入的长度
- **position**：写入的起始位置
- **encoding**：写入编码

~~~js
var fsTxt = fs.openSync('hello.txt', 'w')// 打开文件
// 文件编号为3
console.log(fsTxt)
// 向文件中写入内容
fs.writeSync(fsTxt, '今天天气真不错~~~~', 2, 'utf-8')
// 关闭文件
fs.closeSync(fsTxt)
~~~

异步读取基本相同，但通过函数回调获取结果：

~~~js
// 打开文件
var fd = fs.open('hello.txt', 'w', (err, fd) => {
  if (!err) { // 判断是否出错
  // 如果没有出错，则对文件进入写入
    fs.write(fd, '这是异步写入的内容', (err) => { // 写入
      if (!err)
        console.log('写入成功')
      fs.close(fd, () => { console.log('文件已关闭') })// 关闭文件

    })
  }
  else { console.log(err) }
})// 如果出错则弹出错误
~~~

### 流式写入

往一个文件中写入大量数据时，最好的方法之一是使用流，若要将数据异步传送到文件，首需要使用以下语法创建一个 Writable 对象：

`fs.createWriteStream(path[, options])`

- **path**：文件路径
- **options**：对象，包含属性（encoding、mode、flag）

一旦你打开了 Writable 文件流，就可以使用 `write()` 方法来写入它，写入完成后，在调用 `end()` 方法来关闭流。

~~~js
var ws = fs.createWriteStream('hello.txt') // 开启hello.txt的文件流
~~~

可以通过监听流的 open 和 close 事件来监听流的打开和关闭
`on(事件字符串,回调函数)	为对象绑定一个事件`
`once(事件字符串,回调函数)	为对象绑定一次性的事件`

~~~js
ws.once('open', () => { console.log('流打开了~~~~') })
ws.once('close', () => { console.log('流关闭了~~~~') })
~~~

调用文件流 write 方法写入：

~~~js
ws.write('通过可写流写入文件的内容')
ws.write('今天天气真不错')
ws.write('锄禾日当午')
ws.write('红掌拨清清')
ws.write('清清真漂亮')
~~~

调用文件流 end 方法关闭流：

~~~js
ws.end()
~~~

## 读取文件

fs 中提供了四种读取文件的方式

- 简单文件读取
- 同步文件读取
- 异步文件读取
- 流式文件读取

### 简单读取

- `fs.readFile(file[, options], callback)`
- `fs.readFileSync(file[, options])`

- **file**：文件的路径。
- **options**：对象，包含属性（encoding、mode、flag）
- **callback**：回调函数，带有两个参数如：callback(err, fd)。

~~~js
fs.readFile('派大星.jpg', (err, data) => {
  if (!err) { // 读取文件
    fs.writeFile('成了.jpg', data, (err) => { console.log(!err ? '成功' : '失败') })// 写入文件
  }
  else { console.log('读取出错') }
})
~~~

### 同异读取

- `fs.readSync(fd, buffer, offset, length, position)`

- **fd**：文件描述符，通过 `openSync()` 获取
- **buffer**：读取文件的缓冲区
- **offset**：buffer的开始写入的位置
- **length**：要读取的字节数
- **position**：写入的起始位置

~~~js
fs.open('123.txt', 'r', (err, fd) => { // 读取文件
  if (err) { console.error(err); return }
  const buf = Buffer.alloc(8)
  const readFile = fs.readSync(fd, buf, 0, 8, null) // 返回读取的字节数
})
~~~

异步读取基本相同，但通过函数回调获取结果：

~~~js
fs.open('123.txt', 'r', (err, fd) => { // 读取文件
  if (err) { console.error(err); return }
  const buf = Buffer.alloc(8)
  fs.read(fd, buf, 0, 8, 0, (readfile) => {
    console.log(readfile) // 返回读取的字节数
  })
})
~~~

### 流式文件读取

从一个文件中读取大量的数据时，最好的方法之一就是流式读取，这样将把一个文件作为 `Readable` 流的形式打开。
要从异步从文件传输数据，首先需要通过以下语法创建一个 `Readable` 流对象：`fs.createReadStream(path[, options])`

- **path**：文件路径
- **options**：`{ encoding: string, mode: string, flag: string }`

当你打开 `Readable` 文件流以后，可以通过 `readable` 事件和 `read()` 请求，或通过 `data` 事件处理程序可以轻松地从它读出。

~~~js
var rs = fs.createReadStream('test.mp4')
var ws = fs.createWriteStream('HuoGuoP.mp4')
// 监听流的开启和关闭
rs.once('open', () => { console.log('读取流打开了~~~~') })
// 数据读取完毕，关闭可写流
rs.once('close', () => { console.log('读取流关闭了~~~~'); ws.end() })
// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件
rs.on('data', (data) => { // data事件绑定完毕，它会自动开始读取数据
  ws.write(data) // 写入文件
})
~~~

`pipe()` 方法将可读流内容直接输出到可写流中，并且自动关闭：

~~~js
var rs = fs.createReadStream('test.mp4')
var ws = fs.createWriteStream('HuoGuoP.mp4')
rs.pipe(ws)
~~~


## 其他操作

~~~markdown
## 验证路径是否存在
	- fs.exists(path, callback)
	- fs.existsSync(path)
## 获取文件信息
	- fs.stat(path, callback)
	- fs.statSync(path)
## 删除文件
	- fs.unlink(path, callback)
	- fs.unlinkSync(path)
## 列出文件
	- fs.readdir(path[, options], callback)
	- fs.readdirSync(path[, options])
## 截断文件
	- fs.truncate(path, len, callback)
	- fs.truncateSync(path, len)
## 建立目录
	- fs.mkdir(path[, mode], callback)
	- fs.mkdirSync(path[, mode])
## 删除目录
	- fs.rmdir(path, callback)
	- fs.rmdirSync(path)
## 重命名文件/文件夹
	- fs.rename(oldPath, newPath, callback)
	- fs.renameSync(oldPath, newPath)
## 监视文件/文件夹更改写入
	- fs.watch(path, [, options], callback) => 性能较好
	- fs.watchFile(path, [, options], callback)
## 返回文件数据/判断是否是文件或文件夹
	- fs.lstatSync(path[, options])
		.isFile() // 是否是文件
		.isDirectory() // 是否是文件夹
	- fs.stat(path, [, options], callback)
~~~
