---
headline: Links
title: My Friends
description: "they are all great"
waline: true
---

## 本站信息

<div class="flex gap-5">
  <span>站名：Hairy'Blog</span>
  <span>|</span>
  <span>
  地址：<a href="https://www.hairy.blog">https://www.hairy.blog</a>
  </span>
  <span>图片：右边用户栏</span>
  <span>|</span>
  <span>简介：热爱生活，持续学习。</span>
</div>

## 申请方法

添加本站后，在本页或邮箱留言，格式如下

```yaml
- site: '...' # 网站的名字
  url: '...' # 您的网址
  desc: '...' # 简短描述
  image: '...' # 一张图片
  color: '...' # 方块颜色
```


<br />
<br />

<hairy-links 
  :links="[
    {
      name: '優萌初華',
      url: 'https://shoka.lostyu.me',
      image: 'https://cdn.jsdelivr.net/gh/amehime/shoka@latest/images/avatar.jpg',
      color: '#e9546b',
      desc: '琉璃的医学 & 编程笔记',
    },
    {
      name: '云游君',
      url: 'https://www.yunyoujun.cn/',
      image: 'https://www.yunyoujun.cn/images/avatar.jpg',
      color: '#0078e7',
      desc: 'All at sea.',
    },
    {
      name: 'Mysteve',
      url: 'https://www.mysteve.top',
      image: 'https://pic.imgdb.cn/item/62fca5f016f2c2beb193428c.jpg',
      color: '#71d0f7',
      desc: '不抱怨不埋怨。',
    },
    {
      name: 'Luch',
      url: 'https://www.quanzhan.co/',
      image: 'https://www.quanzhan.co/',
      color: '#1291ee',
      desc: '记录笔记，分享工具。'
    }
  ]"
/>