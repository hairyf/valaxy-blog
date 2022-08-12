---
title: 微信公众号数据管理（Qiniu）
date: 2020-04-06 16:00:00
categories:
  - Notes
  - Client
  - Official Account
tags: 
  - Official Account
---

七牛对象存储将数据文件以资源的形式上传到空间中。可以创建一个或者多个空间，然后向每个空间中上传一个或多个文件。通过获取已上传文件的地址进行文件的分享和下载。还可以通过修改存储空间或文件的属性或元信息来设置相应的访问权限。[对象储存产品手册](https://developer.qiniu.com/kodo)

<!-- more -->

## 空间图形界面使用步骤

步骤一：创建空间

**1. 登录 [七牛开发者平台](https://portal.qiniu.com/signin)。进入存储空间 [管理界面](https://portal.qiniu.com/bucket)**

![](https://dn-odum9helk.qbox.me/Fvtqd7vo1AQyv2H9p9nqZRa8MqDs)

**2. [新建存储空间](https://portal.qiniu.com/bucket/create)**

![](https://dn-odum9helk.qbox.me/FihUPil_2gswxkXryUHN6jWutB8g)

> 如果是体验用户，新建存储空间时，会遇到 “新建存储空间失败，请先实名认证”

**3. 创建成功后在 内容管理 栏目中可以上传、下载、访问、修改资源等操作。**

![](https://dn-odum9helk.qbox.me/FvHsoIbaXlQUHhniZ3tuIfSp9pW7)

步骤二：上传文件

已经创建了空间，就可以向空间里上传资源。资源可以是任意的文件：文档，照片，视频，音乐文件，或其它文件类型。

**内容管理 --> 上传文件**

![](https://dn-odum9helk.qbox.me/FnFEcvAyUeGGjv1AvM0iNXc6qk-a)

步骤三：下载文件

添加了文件到空间，就可以通过图形界面打开和查看它。您也可以下载该文件到您的本地计算机。

**内容管理 --> 右侧资源点击'...', 点击下载文件**

![](https://dn-odum9helk.qbox.me/FoTIhsjMdq0Br2OtVIVuwULhehHv)

步骤四：删除文件

如果不再需要把上传的文件保存在七牛空间中，您可以删除它。

**内容管理 --> 右侧资源点击'...', 点击删除文件**

![](https://dn-odum9helk.qbox.me/FoTIhsjMdq0Br2OtVIVuwULhehHv)

> 删除空间文件不可恢复，慎重操作。

步骤五：删除空间

如果不需要之前创建的空间，可以删除它。

![](https://dn-odum9helk.qbox.me/Fs54zF7X1aPla7MJr651na9KItpM)

> 空间中的文件也会被删除，且不可恢复，慎重操作。

## 编程模型

以保护数据安全和考虑架构合理性为出发点，七牛云存储服务对如何进行开发提供了一些设计和编码建议。希望开发者在使用七牛云存储服务之前详细阅读这些建议，并尽可能的符合这些原则，以免造成不必要的时间浪费和带来数据安全风险。

### 基本结构

基于七牛云存储服务构建的应用，建议使用如下基本架构：

![](https://dn-odum9helk.qbox.me/FuAHhZgiYaHTDqLritFe1K85AVrI)

### 业务流程

**上传**：客户端在上传资源到七牛云存储之前要先从业务服务器获取一个有效的[上传凭证](https://developer.qiniu.com/kodo/manual/1208/upload-token)，因此需要先后和两个服务端打交道。

![](https://dn-odum9helk.qbox.me/Fmy1Y_s9I4oCPYuMGDrvYxCRv2FM)

如果有设置回调，则上传完成时七牛云存储会自动发起回调到指定的业务服务器。

![](https://dn-odum9helk.qbox.me/FkPZ31ECmtGnEisOahMKc5kQkuRr)

**下载**：公开资源不需要对应的下载凭证，客户端可以直接从七牛云存储下载对应资源。私有资源需要对应的下载凭证，因此必须先和业务服务器打交道。

按照实际的使用场景，客户端对于内容的展示非常类似一个动态网页的生成过程，因此无论该页面内容是公开还是私有，均需要从业务服务器获取展示该页面的动态布局信息。所以通常显示过程也是需要先后和业务服务器及七牛云存储服务打交道。

### 关键原则

- 整个架构中需要一个业务服务器组件。
- 无论如何，[访问密钥（AK/SK）](https://developer.qiniu.com/af/kb/1334)均不得包含在客户端的分发包中（如二进制代码、配置文件或网页中）。
- SecretKey不得在任何场景中的公网上传输，更不得传输到客户端。
- 业务服务器端应维持一个用于管理资源元数据的数据库和一个用于管理最终用户账号信息的数据库。
- 原则上客户端和七牛云存储之间的交互只有上传和下载，不应使用任何其他的API。

## 安全机制

数据安全性是云存储服务的重中之重。云存储的安全机制主要需要考虑以下几个因素：

- 如何判断该请求方是否合法，且对目标空间有相应的访问权限。
- 因为服务的访问协议同时支持 HTTP 和 HTTPS，服务端需要判断收到的请求是否经过篡改。
- 相比上传新资源，覆盖文件或删除已有资源拥有更高的风险。因此对上传或修改动作，需要确认请求方是否拥有修改或删除的权限。

需要考虑安全机制的场景主要有如下几种**：上传资源、访问资源、管理和修改资源**

因为凭证的生成需要用到[SecretKey](https://developer.qiniu.com/kodo/manual/1644/security#aksk)，因此该生成动作不应在不受信任的环境中进行。需要注意的是，开发者绝不能将密钥包含在分发给最终用户的程序中，无论是包含在配置文件中还是二进制文件中都会带来非常大的密钥泄漏风险。

七牛云存储推荐的模型如下所示：

![](https://dn-odum9helk.qbox.me/Fi5KMuul0usiNB7_OyofIjVw-K2e)

### 密钥（AccessKey/SecretKey）

密钥用于以上几种凭证的生成。以 SecretKey 为参数，配合适当的签名算法，可以得到原始信息的数字签名，防止内容在传递过程中被伪造或篡改。

密钥通常是成对创建和使用，包含一个 AccessKey 和一个 SecretKey。其中 AccessKey 会在传输中包含，而用户必须保管好 SecretKey 不在网络上传输以防止被窃取。若 SecretKey 被恶意第三方窃取，可能导致非常严重的数据泄漏风险。因此，如发现 SecretKey 被非法使用，管理员应第一时间在七牛开发者平台的[密钥管理](https://portal.qiniu.com/user/key)中更换密钥。

### 上传凭证（UploadToken）

客户端上传前需要先获取从服务端颁发的上传凭证，并在上传资源时将上传凭证包含为请求内容的一部分。不带凭证或带非法凭证的请求将返回 HTTP 错误码 401，代表认证失败。关于上传策略和上传凭证的生成细节，请查阅[上传凭证](https://developer.qiniu.com/kodo/manual/1208/upload-token)。

**生成上传凭证时需要指定以下要素**：

- 权限，指定上传的目标空间或允许覆盖的指定资源。

- 凭证有效期，即一个符合[Unix时间戳](https://developer.qiniu.com/kodo/glossary/1647/u)规范的数值，单位为秒。

  [^注意]:因为时间戳的创建和验证在不同的服务端进行（在业务服务器创建，在云存储服务器验证），因此开发者的业务服务器需要尽可能校准时间，否则可能出现凭证刚创建就过期等各种奇怪的问题。

- 可选择设置的最终用户标识 ID。这是为了让业务服务器在收到结果回调时能够识别产生该请求的最终用户信息。

### 下载凭证（DownloadToken）

下载私有资源的请求需要带一个合法的下载凭证。不带凭证或带非法凭证的请求将返回 HTTP 错误码 401，代表认证失败。关于下载凭证的生成细节，请查阅[下载凭证](https://developer.qiniu.com/kodo/manual/1202/download-token)。

与上传凭证相比，下载凭证的作用比较简单：

- 保证请求发起者拥有对目标空间的访问权限。
- 保证服务端收到的下载请求内容未经中途篡改，具体包括目标资源的 URI 和该访问请求的有效期信息均应未受到篡改。

### 管理凭证（AccessToken）

在管理现有资源时，例如查看资源元数据、删除或移动资源等，通常需要带一个合法的管理凭证。不带凭证或带非法凭证的管理请求将返回 HTTP 错误码 401，代表认证失败。关于管理凭证的生成细节，请查阅[管理凭证](https://developer.qiniu.com/kodo/manual/1201/access-token)。

管理凭证的作用与下载凭证比较类似：

- 保证请求发起者拥有对目标空间的管理权限。
- 保证服务端收到的管理请求内容未经中途篡改，具体包括代表管理动作的 URI 和该管理动作的参数信息均应未受到篡改。

### 防盗链

下载还有一种常见的场景，即公开资源的防盗链，例如禁止特定来源域名的访问，禁止非浏览器发起的访问等。
可以通过 HTTP 协议支持的 Referer 机制即[HTTP Referer](https://developer.qiniu.com/kodo/glossary/1643/h)来进行相应的来源识别和管理。
防盗链是一个系统设置，不影响开发工作。如发现有盗链情况，在[七牛开发者平台](https://portal.qiniu.com/)里的 **融合CDN加速** 中的 **高级配置**进行设置。

### 跨域访问

出于安全的考虑，Web 浏览器从很早之前就定下同域安全策略的标准，默认情况下同一域名下的页面只能向同域（包括 CNAME 域名、端口）下的 URL 发送所有类型的 HTTP 请求。而向不同域的地址发送非 GET 请求时，默认情况下只能返回同域安全策略错误。

对此，在发起上传或下载请求的时候，服务会返回相应的支持跨域的 Header：

上传(`upload.qiniup.com`)

~~~
Access-Control-Allow-Headers: X-File-Name, X-File-Type, X-File-Size
Access-Control-Allow-Methods: OPTIONS, HEAD, POST
Access-Control-Allow-Origin: *
~~~

下载(`.qiniudn.com`)

~~~
Access-Control-Allow-Origin: *
~~~

## QINIU-SDK

此 SDK 适用于 Node.js v4 及以上版本。使用此 SDK 构建网络应用程序，能以非常便捷的方式将数据安全地存储到七牛云上。无论网络应用是一个网站程序，还是包括从云端（服务端程序）到终端（手持设备应用）的架构服务和应用，通过七牛云及其 SDK，都能让应用程序的终端用户高速上传和下载，同时也让服务端更加轻盈。[官方Node.js SDK文档](https://developer.qiniu.com/kodo/sdk/1289/nodejs)

```sh
npm install qiniu --save-dev
```

**获取AccessKey / SecretKey**：官网=>管理控制台=>个人信息=>密匙管理

**获取对应储存区域简称**：[region-endpoint](https://developer.qiniu.com/kodo/manual/1671/region-endpoint)

### 创建资源管理对象

~~~js
// 抓取网络资源到空间
const qiniu = require('qiniu')
// 用户密匙
const ACCESS_KEY = '4RjWhCFFyxHHPXYBn8u0oGkJWtVGLaJWQxzDQpEd'
const SECRET_KEY = 'qEQXMw3iUIYT0xxuLZWsVGMdA5Tvt5rC7HnFasR9'
// 定义鉴权对象
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY)
// 定义配置对象
const config = new qiniu.conf.Config()
// 配置储存区域为z0(华东)
config.zone = qiniu.zone.Zone_z0
// 创建资源管理对象，该功能模块可以进行管理资源的大部分操作
const bucketManager = new qiniu.rs.BucketManager(mac, config)
~~~

### 抓取网络资源到空间

~~~js
/*  bucketManager.fetch(resUrl, bucket, key, callback(err, respBody, respInfo))
    resUrl: 网络资源地址
    bucket: 储存空间名称
    key: 重命名网络资源名称
    callback: 请求回调
    err: 错误码, 请求成功时为空
        respBody: 请求成功响应体对象,该对象有以下属性
            key(文件名称), hash(文件哈希值), fsize(文件大小), mimeType(文件类型)
        respInfo: 请求状态对象, 该对象有以下属性
            statusCode: 请求状态码, 当状态码为200代表上传成功
*/
const key = 'yyy.png'
const resUrl = 'www.xxx.xxx/xxx.png'
const bucket = 'mr-mao-images'
bucketManager.fetch(resUrl, bucket, key, (err, respBody, respInfo) => {
  if (respInfo.statusCode === 200 && !err) {
    // 文件上传成功
  }
  else { console.log(err) }
})
~~~
