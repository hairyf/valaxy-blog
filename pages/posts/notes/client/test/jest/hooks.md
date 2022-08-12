---
title: Jest 自动化部署测试钩子
date: 2020-11-01
categories:
  - Notes
  - Client
  - Test
tags:
  - Test
---

写测试的时候你经常需要在运行测试前做一些准备工作，和在运行测试后进行一些整理工作。 Jest 提供辅助函数来处理这个问题。

<!-- more -->

案例：

~~~js
export default class {
  gongzhu(number) {
    this.user = number === 1 ? '大脚' : '刘英'
  }

  anjiao() {
    this.fuwu = `${this.user}走进房间为你足疗`
  }

  anmo() {
    this.fuwu = `${this.user}走进房间为你按摩`
  }
}
~~~

## 钩子函数

~~~js
// beforeAll: 测试案例执行之前
beforeAll(() => console.log('beforeAll: 吃完饭后，走进了红浪漫区域'))
// afterAll: 测试案例执行之后
afterAll(() => console.log('afterAll: 有钱人的生活就是这么枯燥且乏味'))
// beforeEach: 每个测试用例执行前
beforeEach(() => console.log('beforeEach: 给了300元后'))
// afterEach: 每个测试用例之后
afterEach(() => console.log('afterEach: 完成后, 我心满意足的坐在沙发上'))
test('测试 大脚足疗 方法', () => {
  baojian.gongzhu(1)
  baojian.anjiao()
  expect(baojian.fuwu).toEqual('大脚走进房间为你足疗')
})
test('测试 刘英按摩 方法', () => {
  baojian.gongzhu(2)
  baojian.anmo()
  expect(baojian.fuwu).toEqual('刘英走进房间为你按摩')
})
~~~

## 分组测试

钩子函数可以在分组中执行，钩子函数按照不同分组作业互不干涉，各起作用，而分组可以用于区分模块。

~~~js
import NewBaoJian from './newBaoJian'
const baojian = new NewBaoJian()
describe('大脚相关服务', () => {
  test('测试 大脚足疗 方法', () => {
    baojian.gongzhu(1)
    baojian.anjiao()
    expect(baojian.fuwu).toEqual('大脚走进房间为你足疗')
  })
  test('测试 大脚泰式保健 方法', () => {
    baojian.gongzhu(1)
    baojian.taishi()
    expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
  })
})
describe('刘英相关服务', () => {
  test('测试 刘英按摩 方法', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    expect(baojian.fuwu).toEqual('刘英走进房间为你按摩')
  })
  test('测试 刘英宫廷御疗 方法', () => {
    baojian.gongzhu(2)
    baojian.gongting()
    expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
  })
})
~~~

## 钩子作用域

钩子函数在父级分组可作用域子集，类似继承。钩子函数同级分组作用域互不干扰，各起作用。先执行外部的钩子函数，在执行内部的钩子函数。