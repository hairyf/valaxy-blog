---
title: 微信公众号爬取数据（Puppeteer）
date: 2020-11-01
categories:
  - Notes
  - Client
  - Official Account
tags: 
  - Official Account
---

Puppeteer 是 Chrome 开发团队在 2017 年发布的一个 Node.js 包，用来模拟 Chrome 浏览器的运行。它具有以下特点：

- 网页截图或者生成 PDF
- 爬取 SPA 或 SSR 网站
- UI 自动化测试，模拟表单提交，键盘输入，点击等行为
- 捕获网站的时间线，帮助诊断性能问题
- 创建一个最新的自动化测试环境，使用最新的 js 和最新的 Chrome 浏览器运行测试用例
- 测试 Chrome 扩展程序

<!-- more -->

## Headless Chrome 概念

- 在无界面的环境中运行 Chrome
- 通过命令行或者程序语言操作 Chrome
- 无需人的干预，运行更稳定
- 在启动 Chrome 时添加参数 --headless，便可以 headless 模式启动 Chrome

## Puppeteer API 分层结构

Puppeteer 中的 API 分层结构基本和浏览器保持一致，下面对常使用到的几个类：

<img src="https://pic1.zhimg.com/80/v2-f0f7c2390015845d1addabe4f816a8fc_720w.jpg" style="zoom: 80%;" />

## 基本使用

```sh
npm i --save puppeteer
```

~~~js
const puppeteer = require('puppeteer');

(async () => {
  // 打开浏览器
  const browser = await puppeteer.launch({ headless: false })
  // 新建标签页
  const page = await browser.newPage()
  // 标签页跳转网址
  await page.goto('https://example.com')
  // 自定义操作(截屏)
  await page.screenshot({ path: 'example.png' })
  // 关闭浏览器
  await browser.close()
})()
~~~

爬取 DOM 数据：

~~~js
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://example.com')
  // 操作页面dom对象方法并接受返回值(爬取数据)
  const result = await page.evaluate(() => {
    // 这里的环境是浏览器页面环境, 如果页面有jquery对象, 那么这里也可以用jquery方法
    // 该函数不能访问外面的数据, 因为这里的环境是浏览器环境
    // 该函数执行完毕后, 会自动关闭浏览器页面

    // 爬取数据
    const genre = $.map($('[property=\'v:genre\']'), item => item.innerText)
    // 将数据返回
    return genre
  })
  // 爬取完毕后result则等于genre

  // 下面还可以根据爬取的数据在进行页面跳转并爬取数据, 如果是数组还可以用 for 来达到同步执行的效果
  await page.goto('https://example.com')
  page.evaluate(() => { /* ...... */ })

  await browser.close()
})()
~~~