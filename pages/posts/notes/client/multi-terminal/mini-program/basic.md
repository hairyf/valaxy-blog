---
title: 微信小程序开发基础
categories:
  - Notes
  - Client
  - Mini Program
tags: 
  - Mini Program
date: 2020-04-01 15:00:00
---

## 事件绑定

~~~html
<!-- bind冒泡事件 -->
<view bind:tap="myEventCallBack">点击</view>
<!-- catch阻止冒泡事件 -->
<view catch:tap="myEventCallBack">点击</view>
<!-- mut-bind阻止冒泡事件 -->
<view mut-bind:tap="myEventCallBack">点击</view>
<!-- 滑动事件, 具有滑动值 -->
<view bindscroll="scroll"></view>
~~~

~~~js
Page({
  myEventCallBack(ev) {
    console.log(ev)
  }
})
~~~

<!-- more -->

事件传参：

~~~html
<view bind:tap="myEventCallBack"  data-id='{{item.id}}'>点击</view>
~~~

~~~js
Page({
  myEventCallBack(ev) {
    // 点击当前整体元素
    const id = ev.currentTarget.dataset.id
  }
})
~~~

事件委派：

~~~html
<view bind:tap="myEventCallBack">
	<view data-id="0">子元素A</view>
</view>
~~~

~~~js
Page({
  myEventCallBack(ev) {
    console.log(ev.target.dataset.id)
  }
})
~~~

## 表达式

~~~html
<view> {{ message }} </view>
<image src="{{url}}"/>
<view style="display:{{fool?'block':'none'}}"></view>
~~~

## 列表渲染

~~~html
<view wx:for="{{array}}" wx:for-index="idx">
  {{index}}---{{item.message}}---{{idx}}
</view>
~~~

## 条件渲染

~~~html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
~~~

## 标签元素获取

~~~js
// 创建节点选择器
const query = wx.createSelectorQuery()
query.select('.fixed_box').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec((res) => {
  res[0].top // #the-id节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
  console.log('打印demo的元素的信息', res)
  console.log('打印高度', res[0].height)
})
~~~

## 生命周期

~~~js
// 100-小程序基本编写/pages/list/list.js
Page({

  /* 页面的初始数据 */
  data: {
  },

  /**
	 * 生命周期函数--监听页面加载
	 */
  onLoad(options) {

  },

  /**
	 * 生命周期函数--监听页面初次渲染完成
	 */
  onReady() {

  },

  /**
	 * 生命周期函数--监听页面显示
	 */
  onShow() {

  },

  /**
	 * 生命周期函数--监听页面隐藏
	 */
  onHide() {

  },

  /**
	 * 生命周期函数--监听页面卸载
	 */
  onUnload() {

  },

  /**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
  onPullDownRefresh() {

  },

  /**
	 * 页面上拉触底事件的处理函数
	 */
  onReachBottom() {

  },

  /**
	 * 用户点击右上角分享
	 */
  onShareAppMessage() {

  }
})
~~~

![](https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png)

## 路由编程

~~~html
<button bind:tap="goToListPage">点击跳转</button>
<!-- 或者 -->
<navigator url="/pages/index/index" >进入首页(tab页)</navigator>
<redirectTo url="/pages/index/index" >进入首页(tab页)</redirectTo>
~~~

~~~javascript
goToListPage () {
  // 点击跳转到list页面(不能跳转tapBar页面)
  // 推入栈
  wx.navigateTo({url:'/pages/list/list'})
  // 重定向
  wx.redirectTo({url:'/pages/list/list'})
  // 跳转tapBar页面(并关闭非tapBar页面)
  wx.switchTab({url: '/pages/list/list'});
}
~~~

路由传参：

~~~javascript
// 父组件:传入index值为666
wx.navigateTo({ url: '/pages/list/list?index=666' })
~~~

~~~javascript
onLoad: function (options) {
	const {index} = options // 666
},
~~~

底部路由导航：

~~~json
// app.json
{
  "tabBar": {
    "list": [ // 对应多个路由
      {
        "pagePath": "pages/list/list", // 链接对应页面
        "text": "文与子",	// 链接文字
        "iconPath": "/images/tab/yuedu.png", // 链接未选中图片
        "selectedIconPath": "/images/tab/yuedu_hl.png" // 链接选中图片
      },
      {
        "pagePath": "pages/movies/movies",
        "text": "电影频道",
        "iconPath": "/images/tab/dianying.png",
        "selectedIconPath": "/images/tab/dianying_hl.png"
      }
    ]
  }
}
~~~
