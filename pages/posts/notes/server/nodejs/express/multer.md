---
title: Express 常用中间件
date: 2020-05-03 15:00:00
categories:
  - Notes
  - Server
  - Express
tags: 
  - Express
---

Express 在不使用三方中间件的情况下，虽然可以使用 form 表单上传文件，但是无法将文件保存到静态文件资源目录中去，而我们可以使用 multer 来实现文件上传。

## 发送数据（表单）

~~~html
<form action="http://locallhost:8080/" method="post", enctype="multipart/form-data">
    <input type="file" value="指定文件" name="avatar">
    <input type="submit", value="上传"/>
</form>
~~~

## 发送数据（axios）

~~~html
<form action="http://locallhost:8080/" method="post", enctype="multipart/form-data">
  <input class="file" type="file" value="指定文件" name="avatar">
  <div class="submit"/>
</form>
<img src />
~~~

~~~js
// 创建formDate对象
const formFile = new FormData()
$('.file').change(function () {
  // 获取file文件信息
  const file = this.files[0]

  // 创建本地预览图片地址
  const http_url = window.webkitURL.createObjectURL(file)
  // 将本地图片地址显示
  $('.img').attr('src', http_url)

  // 将文件追加到fromDtate对象中, 第一个参数对应着表单的name, 第二个传入file文件
  formFile.append('files', file)
})

const axios_upload_config = {
  // 全局请求头设置
  headers: { 'Content-Type': 'multipart/form-data' },
  // 添加上传进度监听事件
  onUploadProgress: (e) => {
    const completeProgress = `${(e.loaded / e.total * 100) | 0}%`
    this.progress = completeProgress
  }
}
// 上传文件请求
$('.submit').click(async () => {
  const result = await axios.post('/upload', formFile, axios_upload_config)
})
~~~

## 接收数据（multer）

~~~js
const fs = require('fs')
const path = require('path')
const express = require('express')
const multer = require('multer')

// 文件过滤器(可选)
function fileFilter(req, file, cb) {
  // 这个函数应该调用 `cb` 用boolean值来指示是否应接受该文件
  // file有该文件的后缀名 或者其他信息
  // 获取文件后缀名 originalname 属性是名称
  const ext = path.extname(file.originalname)
  // 拒绝这个文件，使用`false`，像这样:
  cb(null, false)
  // 接受这个文件，使用`true`，像这样:
  cb(null, true)
  // 如果有问题，你可以总是这样发送一个错误:
  cb(new Error('I don\'t have a clue!'))
}

// 路径, 名称修改器, 默认随机名称且无后缀 (可选)
// 注意: 添加该属性后, 自动将文件存入该路径, 不会经过路由器访问
const storage = multer.diskStorage({
  // destination 是确定文件的具体路径
  destination(req, file, cb) { cb(null, path.resolve(__dirname, '../public')) },
  filename(req, file, cb) {
    // 获取后缀名
    const ext = path.extname(file.originalname)
    // 设置默认名
    cb(null, `${Date.now()}${ext}`)
  }
})

// 文件大小相关设置 (可选)
const limits = {
  fileSize: 1024, // 文件最大长度, 默认无限
  files: 5, // 文件最大数量
  headerPairs: 2000 // 键值对最大组数, 默认2000
}

// 初始化上传对象
const upload = multer({
  dest: '/upload', // 储存路径
  fileFilter,
  storage,
  limits
})

// 上传单个文件, 调用upload.single方法, 并将表单标签的name值传入
app.post('/upload', upload.single('avatar'), (req, res) => {
  // 会自动添加req.file, 是 `avatar` 文件的信息
  // 如果没有添加storage, 需要自行重命名和写入文件夹最后
  const ext = path.extname(req.file.originalname)
  if (!ext.match(/jpg|png/))
    return res.send({ code: 1, msg: '上传失败, 文件不是jpg或png' })
  const dir_file = path.resolve(__dirname, `../public/${Date.now()}${ext}`)
  // 使用fs模块上传文件
  fs.writeFile(dir_file, req.file.buffer, { flag: 'w' })
})

// 上传多个文件, 调用upload.array方法, 传入标签name值, 文件数量
app.post('/upload', upload.array('files', 6), (req, res) => {
  // 会自动添加req.files , 是 `files` 文件数组的信息
})
~~~

