---
title: Jest 自动化部署异步测试
date: 2021-06-12 16:00:00
categories:
  - Notes
  - Client
  - Test
tags:
  - Test
---

在工作中我们很多方法都包含异步操作，所以测试异步代码成了工作中必不可少的一部分。

<!-- more -->

~~~js
import axios from 'axios'
export function fetchData(fn) {
  axios.get('http://a.jspang.com/jestTest.json')
    .then(response => fn(response.data))
}
export function pmsFetchData() {
  return axios.get('http://a.jspang.com/jestTest.json')
    .then(response => response.data)
}
export function fetchThreeData() {
  return axios.get('http://a.jspang.com/jestTest.json')
    .then(response => response.data)
}
~~~

## 异步回调测试

~~~js
test('异步方法测试', (done) => {
  // promise需返回, 且done要放在请求完毕后
  return pmsFetchData().then((data) => {
    expect(data).toEqual({
      success: true
    })
    // done代表所有操作已完成
    done()
  })
})
~~~

## 异步 async 测试

~~~js
test('async异步方法测试', async (done) => {
  // promise需返回, 且done要放在请求完毕后
  const data = await pmsFetchData()
  expect(data).toEqual({
    success: true
  })
  // done代表所有操作已完成
  done()
})
~~~

# 错误测试

~~~js
test('异步404错误测试', (done) => {
  expect.assertions(1) // 断言, 必须执行一次expect(不然则不通过)
  // promise需返回, 且done要放在请求完毕后
  return fetchThreeData().catch((err) => {
    expect(err.toString().includes('404')).toBe(true)
    // done代表所有操作已完成
    done()
  })
})
~~~
