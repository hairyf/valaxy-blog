---
title: 微信公众号接口凭证
date: 2020-11-01
categories:
  - Notes
  - Client
  - Official Account
tags: 
  - Official Account
---

`access_token` 是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。开发者需要进行妥善保存。`access_token` 的存储至少要保留 512 个字符空间。`access_token` 的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的 `access_token` 失效。

<!-- more -->

请求地址：https://api.weixin.qq.com/cgi-bin/token
请求参数：
- `grant_type`：`client_credential`
- `appid`：第三方用户唯一凭证
- `secret`：第三方用户唯一凭证密钥

实际流程：

![](https://pic.imgdb.cn/item/62f4ccf616f2c2beb1d0ee77.jpg)

## 接收与响应微信服务

微信服务器会发送两种类型消息给开发者服务器，GET 请求则验证服务器有效性，POST 则是将用户发送的数据以 POST 请求转发到开发者服务器上。

POST 服务器接收微信服务器类型：

![](https://pic.imgdb.cn/item/62f4cda616f2c2beb1d2c825.jpg)

POST 服务器响应微信服务器类型：

![](https://pic.imgdb.cn/item/62f4cdf616f2c2beb1d3a28a.jpg)

> 如果开发者服务器没有返回响应，微信服务器会发送多三次响应，接收请求体中的数据，是流体数据，不能直接拿到数据，数据接收完毕后，是 Buffer 对象。转换后是 xml 数据。

## 接收消息并回复

![](https://pic.imgdb.cn/item/62f4ce4e16f2c2beb1d48e62.jpg)

## 创建定制菜单

> 注意：调用删除菜单接口需要向 params 传入 access_token，调用创建菜单需要向请求体传入 json 数据。

![](https://pic.imgdb.cn/item/62f4ce7a16f2c2beb1d50208.jpg)

