---
title: 微信公众号 JS-SDK 开发
date: 2020-04-05 14:00:00
categories:
  - Notes
  - Client
  - Official Account
tags: 
  - Official Account
---

微信 JS-SDK ( JavaScript Software Development Kit )是微信公众平台面向网页开发者提供的基于微信内的网页开发工具包。

通过使用微信 JS-SDK，网页开发者可借助微信高效地使用拍照、选图、语音、位置等手机系统的能力，同时可以直接使用微信分享、扫一扫、卡券、支付等微信特有的能力，为微信用户提供更优质的网页体验。

简单来说，使用JS-SDK我们可以引入外部网页并使用微信公众号提供的API。

<!-- more -->

## 获取临时票据（ticket）

`jsapi_ticket` 是公众号用于调用微信JS接口的临时票据。正常情况下，`jsapi_ticket` 的有效期为 7200 秒，通过 `access_token` 来获取。

![](https://pic.imgdb.cn/item/62f4ccf616f2c2beb1d0ee77.jpg)

## 服务端处理签名

前端页面想要使用 JS-SDK 需要服务端处理签名加密排序，提供给前端数据后才可调用微信的 JS-SDK。

1. 组合参与签名的四个参数
   - jsapi_ticket：临时票据
   - noncestr：随机字符串
   - timestamp：时间戳
   - url：当前服务器地址
2. 任意方式传给前端页面

```javascript
// 引入 wechat_api 构造功能函数, 这里获取 jsapi_ticket
const wechat = new require('./wechat/wechat')

// 渲染路由页面, 将渲染好的页面返回给用户
app.get('/search', async (req, res) => {
  const { ticket } = await wechat.fetchJsapiTicket()
  const noncestr = Math.round(Math.random() * 100000000000000000)
  const timestamp = Date.now()
  const { url } = require('./config')
  const js_sdk_sign = [
        `jsapi_ticket=${ticket}`,
        `noncestr=${noncestr}`,
        `timestamp=${timestamp}`,
        `url=${url}/search` // 哪个路由页面需要就把哪个路由的查询字符串拼接
  ].sort().join('&')
  // 渲染页面, 传入签名, 随机字符串, 当前时间戳
  res.render('search', { signature, noncestr, timestamp })
})
```

## 客户端进行授权

1. 绑定页面域名：

![](https://pic.imgdb.cn/item/62f4d10f16f2c2beb1dbf7d6.jpg)

2. 引用 JS-SDK：

```html
<!-- view/search.ejs -->
<!DOCTYPE html>
<html lang="en">
<head><title>search</title></head>
<body>
    <h1>这是一个搜索页面</h1>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
</body>
</html>
```

3. 通过 config 注入权限：

```html
<!DOCTYPE html>
<html lang="en">
<head><title>search</title></head>
<body>
    <h1>这是一个搜索页面</h1>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
      <script>
          wx.config({
          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，
          // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            debug: true, 
            appId: 'wxa2a6b98bb1a339d6',   // 必填，公众号的唯一标识
            timestamp: '<%= timestamp %>', // 必填，生成签名的时间戳
            nonceStr: '<%= noncestr %>',   // 必填，生成签名的随机串
            signature: '<%= signature %>', // 必填，签名
            jsApiList: [ // 必填，需要使用的 JS 接口列表
                'onMenuShareQQ',    // “分享到QQ”按钮点击状态及自定义分享内容接口
                'onMenuShareQZone', //  “分享到QQ空间”按钮点击状态及自定义分享内容接口
                'startRecord',      // 开始录音
                'stopRecord',       // 结束录音
                'translateVoice'    // 识别音频返回文字结果
            ]
        });
        wx.ready(function(){
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
          // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
          // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
          // 则可以直接调用，不需要放在ready函数中。
        });
        // config信息验证失败会执行error方法
        wx.error(function(res){});
    </script>
</body>
</html>
```

4. 在微信开发者工具查看授权状况：

![](https://pic.imgdb.cn/item/62f4d1aa16f2c2beb1dda86c.jpg)

判断接口可用性：

~~~js
wx.ready(() => {
  wx.checkJsApi({
    jsApiList: [// 需要检测的 JS 接口列表，所有 JS 接口列表见附录2,
      'onMenuShareQQ', 'onMenuShareQZone', 'startRecord',
      'stopRecord', 'translateVoice'
    ],
    success(res) {
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"onMenuShareQQ":true},"errMsg":"checkJsApi:ok"}
      console.log(res)
    }
  })
})
~~~

## 调用录音识别结果

~~~js
// 是否在录音
const isRecord = false
$('.record').tap(() => {
  if (!isRecord) {
    // 开始录音
    wx.startRecord()
  }
  else {
    // 结束录音
    wx.stopRecord({
      success: (res) => {
        // 结束录音后, 自动上传微信服务器中, 返回一个音频 ID
        const { localId } = res
        wx.translateVoice({
          localId, // 需要识别的音频 ID
          isShowProgressTips: 1, // 默认为1, 显示进度提示
          success: (res) => {
            // 语音识别结果
            const { translateResult } = res
            alert(translateResult)
          }
        })
      }
    })
  }
})
~~~

## 接口调用说明

所有接口通过 wx 对象(也可使用 jWeixin 对象)来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

- success：接口调用成功时执行的回调函数。
- fail：接口调用失败时执行的回调函数。
- complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。
- cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
- trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。

> 不要尝试在 trigger 中使用 ajax 异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用 ajax 的回包会还没有返回。

以上几个函数都带有一个参数，类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：

- 调用成功时："xxx:ok" ，其中xxx为调用的接口名
- 用户取消时："xxx:cancel"，其中xxx为调用的接口名
- 调用失败时：其值为具体错误信息