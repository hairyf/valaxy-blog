---
title: Jest 自动化部署测试匹配器
date: 2021-06-12 15:00:00
categories:
  - Notes
  - Client
  - Test
tags:
  - Test
---

在项目根目录，新建两个文件，一个文件是 `index.js`(被测试文件)，另一个是 `index.test.js`（测试文件）文件。

`index.js` 文件比如是我们写的一些业务逻辑方法，我们就那他当一个例子，最后要测试的就是这个文件。我们来模仿一次去按摩的经历。

<!-- more -->

`index.js`：

~~~js
function baojian1(money) {
  return money >= 200 ? '至尊享受' : '基本按摩'
}

function baojian2(money) {
  return money >= 1000 ? '双人服务' : '单人服务'
}
module.exports = {
  baojian1, baojian2
}
~~~

`index.test.js`：

~~~js
const dabaojian = require('./dabaojian.js')
const { baojian1, baojian2 } = dabaojian
// 测试baojian1方法, toBe为预期值, 当预期值未达到时, 将视为测试失败
test('保健1 300元', () => {
  expect(baojian1(300)).toBe('至尊享受')
})
test('保健2  2000元', () => {
  expect(baojian2(2000)).toBe('双人服务')
})
~~~

在 `package.json` 配置命令简化操作：

~~~json
{
  "scripts": {
    "test": "jest"
  }
}
~~~

## 内容匹配

~~~js
test('测试严格相等', () => {
  const a = { number: '007' }
  expect(a).toBe({ number: '007' }) // -> 不通过, toBe为完全匹配才算通过
})
test('测试内容相等', () => {
  const a = { number: '007' }
  expect(a).toEqual({ number: '007' }) // -> 通过
})
~~~

## 空|不存在匹配

~~~js
test('测试null匹配', () => {
  const a = null
  expect(a).toBeNull() // -> 通过
})
test('测试undefined匹配', () => {
  const a = undefined
  expect(a).toBeUndefined() // -> 通过
})
test('测试不为undefined匹配', () => {
  const a = 'jspang'
  expect(a).toBeDefined() // -> 通过
})
~~~

## 布尔值匹配

~~~js
test('测试为true匹配', () => {
  const a = 0
  expect(a).toBeTruthy() // 不通过
})
test('测试为false匹配', () => {
  const a = 0
  expect(a).toBeTruthy() // 通过
})
~~~

## 数值匹配

~~~js
test('大于指定值的数匹配', () => {
  expect(10).toBeGreaterThan(9) // ->通过
})
test('小于指定值的数匹配', () => {
  expect(10).toBeLessThan(11) // ->通过
})
test('大于等于指定值的数匹配', () => {
  expect(10).toBeGreaterThanOrEqual(10) // ->通过
})
test('小于等于指定值的数匹配', () => {
  expect(10).toBeLessThanOrEqual(10) // ->通过
})
test('匹配浮点数结果(忽略精度存在问题)', () => {
  const one = 0.1
  const tow = 0.2
  expect(one + tow).toBeCloseTo(0.3) // ->通过
})
~~~

## 字符串匹配

~~~js
test('匹配字符串是否存在指定字符串', () => {
  const str = '谢大脚,刘英,小红'
  expect(str).toMatch('谢大脚')
})
~~~

## 数组|Set匹配

~~~js
test('匹配数组/Set中某个元素', () => {
  const arr = ['谢大脚', '刘英', '小红']
  const set = new Set(arr)
  expect(arr).toContain('谢大脚') // -> 通过
  expect(set).toContain('谢大脚') // -> 通过
})
~~~

## 错误匹配

~~~js
const throwNewErrorFunc = () => { throw new Error('this is Error') }
test('匹配该函数是否抛出错误', () => {
  expect(throwNewErrorFunc).toThrow() // -> 通过
  // 匹配该异常字符串是否符合
  expect(throwNewErrorFunc).toThrow('this is Error') // -> 通过
  // 匹配不存在异常(not)
  expect(throwNewErrorFunc).not.toThrow() // -> 不通过
})
~~~
