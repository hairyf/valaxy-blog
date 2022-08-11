---
title: JavaScript HTML5
categories:
  - Notes
  - Client
  - javascript
tags: 
  - javascript
  - html5
---

HTML5 实际上并没有多少与 HTML 有关，它其实就是 JavaScript。HTML 本身有什么变化?不过一些新标签而已， 况且哪个新标签都不难理解。HTML5的威力在于让你能用JavaScript来创建这些标签。假如没有后台代码通过 Canvas 来创建动画、游戏，或者 通过它来实现一些数据的可视化，这个标签也没有大用处。从浏览器开始支持 Canvas 开始，我已经看到了A steroids 的上百个实现，那都是开发人员为熟悉这个新特性所做的练习。有的比较粗糙一些，而有的则极其精美。这些完全都要归功于 JavaScript。

一个好的程序人员不得不承认 JavaScript 是 html5 实现的有力后盾，简单说，在现在的互联网网站建设开发行业中，大家必须要了解这些知识，才能让我们的网站建设路走的一马平川。

<!-- more -->

## HTML5 JavaScript 元素操作

Element 是一个通用性非常强的基类，所有 Document 对象下的对象都继承自它。这个接口描述了所有相同种类的元素所普遍具有的方法和属性。一些接口继承自 Element 并且增加了一些额外功能的接口描述了具体的行为，HTML5 在此基础上增加了大量的扩展。

### 标签属性

~~~js
// 获取标签属性
dom.getAttribute('name')
dom.getProperty('name')
// 操作非布尔值属性
dom.setAttribute('name', 'xxx')
// 操作布尔值属性
dom.setProperty('name', 'xxx')
// 删除
dom.removeAttribute('name')
~~~

### 标签类

```js
// 新增类
dom.classList.add('dl') // --> <dom class="dl">
// 删除类
dom.classList.remove('dl') // --> <dom class="">
// 切换类
dom.classList.toggle('dl') // --> <dom class="dl">
dom.classList.toggle('dl') // --> <dom class="">
```

### 自定义属性

~~~html
<!--创建-->
<div data-sdl="sdl"></div> <!-- data-[sdl] -->

<!--获取|设置-->
<script>
console.log(div.dataset.sdl)
div.dataset.sdl = "wc"
</script>
~~~

## HTML5 音视频标签

~~~html
<video src="video/test.mp4"></video>
<audio src="audio/test.mp3"></audio>
~~~

| 属性                                                         | 值         | 描述                                                         |
| :----------------------------------------------------------- | :--------- | :----------------------------------------------------------- |
| [autoplay](https://www.w3school.com.cn/tags/att_video_autoplay.asp) | `autoplay` | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](https://www.w3school.com.cn/tags/att_video_controls.asp) | `controls` | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [height](https://www.w3school.com.cn/tags/att_video_height.asp) | `pixels`   | 设置视频播放器的高度。                                       |
| [loop](https://www.w3school.com.cn/tags/att_video_loop.asp)  | `loop`     | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| [muted](https://www.w3school.com.cn/tags/att_video_muted.asp) | `muted`    | 规定视频的音频输出应该被静音。                               |
| [poster](https://www.w3school.com.cn/tags/att_video_poster.asp) | `URL`      | 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。 |
| [preload](https://www.w3school.com.cn/tags/att_video_preload.asp) | `preload`  | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.w3school.com.cn/tags/att_video_src.asp)    | `url`      | 要播放的视频的 URL。                                         |
| [width](https://www.w3school.com.cn/tags/att_video_width.asp) | `pixels`   | 设置视频播放器的宽度。                                       |


### 音视频兼容

~~~html
<video controls="" width="800" height="600">
	<source src="video/test.mp4" type="video/mp4"></source>
	<source src="video/test.webm" type="video/webm"></source>
	<source src="video/test.ogv" type="video/ogg"></source>
	当前浏览器不支持video播放，点击这里下载视频：<a href="video/test.mp4">download</a>
</video>
~~~

### 元素属性

~~~js
var video = document.querySelector('video')
video.duration			// 媒体总时间
video.currentTime		// 媒体现播放时间(读/写)
video.volume				// 媒体音量(读/写)
video.muted					// 媒体是否静音(读/写)
video.paused				// 媒体是否暂停(读)
video.width		 // 媒体宽度
video.height	 // 媒体高度
video.videoWidth		// 视频宽分辨率
video.videoHeight		// 视频高分辨率
// ----> 媒体函数
video.play()		// 媒体播放
video.pause()		// 媒体暂停
video.load()		// 媒体重载
~~~

### 事件回调

~~~js
// 媒体元数据加载完毕,现在所有的属性包含了它们应有的有效信息
audio.addEventListener('loadedmetadata', () => {})
// 当媒介被用户或程序暂停时
audio.addEventListener('pause', () => {})
// 当媒介被用户或程序播放时
audio.addEventListener('play', () => {})
// 当媒介播放位置被用户或程序播放时
audio.addEventListener('timeupdate', () => {})
// 当媒介音量被用户或程序播放时
audio.addEventListener('volumechange', () => {})
// 当媒介已到达媒体结尾时
audio.addEventListener('ended', () => {})
~~~

### 播放器组成要素

~~~md
基础要素
  - 播放器容器
  - 点击		暂停 / 播放
  - 空格切换		暂停 / 播放
  - 点击视频图像	暂停 /播放
  - 静音 / 不静音
  - 全屏 / 网页全屏 / 宽屏 / 窗口
  - 视频时间显示(现时间:总事件 --> 00:00 / 00:00)
  - 视频进度条
  - 视频音量条
  - 视频黑边 (分辨率优化)
交互优化
  - 画质选择(1080p --> 720p)
  - 弹幕系统
  - 循环 / 不循环
  - 设置选项
    - 播放速度
    - 视频比例
    - 关灯模式
    - 镜像换
~~~

## HTML5 Canvas

Canvas API（画布）是在HTML5中新增的标签用于在网页实时生成图像，并且可以操作图像内容，基本上它是一个可以用JavaScript操作的位图（bitmap）。
Canvas 对象表示一个 HTML 画布元素 - `<canvas>`。它没有自己的行为，但是定义了一个 API 支持脚本化客户端绘图操作。

~~~html
<!--在不支持canvas的浏览器,是会忽略掉canvas标签内的内容-->
<canvas class="test" width="200" height="300">
	<span>您的浏览器被支持画布元素,请您换成帅帅的谷歌浏览器</span>
</canvas>
<script>
	window.onload=function(){
		//拿到画布
		var testNode = document.querySelector(".test");
		if(testNode.getContext){ // 判断该元素有没有画笔
			var ctx = testNode.getContext("2d");
		}
	}
</script>
~~~

### 基本绘制

- **save**：保存默认的状态
- **restore**：还原到上次保存的默认状态
- **beginPath**：重置路径

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  var ctx = testNode.getContext("2d")
  ctx.save()
  //////////////////////////////
  //////////样式绘制区///////////
  ///////ctx.lineWidth=4////////
  //////////////////////////////
  ctx.beginPath()
  //////////////////////////////
  //////////路径绘制区///////////
  //ctx.stroke(50,50,100,100)///
  //////////////////////////////
  ctx.rect()
  ctx.restore()
</script>				
~~~

### 矩形(rect)

<HairyImage src="https://pic.imgdb.cn/item/62ec8fb38c61dc3b8e5ee0f0.jpg" />

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  var ctx = testNode.getContext("2d");
  ctx.fillStyle = "deeppink"  // 填充颜色
  ctx.strokeStyle = "red"     // 轮廓颜色
  ctx.lineWidth = 3           // 轮廓宽度
  ctx.lineJoin = "bevel"      // 线与线连接方式 bevel 直角 round 圆角
  ctx.fillRect(0,0,100,100)   	  // 填充并绘制一个矩形(X,Y,W,H)
  ctx.strokeRect(100,100,100,100) // 填充并绘制一个边框矩形(X,Y,W,H)

/*或者
  ctx.fill(0,0,100,100)	// 先填充
  ctx.rect()			      // 在绘制
  ctx.stroke()		      // 先填充
  ctx.rect()			      // 在绘制
*/
</script>
~~~

### 路径(line)

<HairyImage src="https://pic.imgdb.cn/item/62ec8fe98c61dc3b8e5fb40c.jpg" />

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  var ctx = testNode.getContext("2d");
/*
  线条样式更换
  ctx.strokeStyle = "red"		// 线条颜色
  ctx.lineWidth = 50		    // 线条宽度
  ctx.lineJoin = "bevel";   // 线与线连接的方式bevel(斜角), round(圆角)
  ctx.lineCap = "round"	    // 线头和线尾采用圆角
 */
  // 绘制一个三角形
  ctx.moveTo(50,50)		  // 初始起点 笔触点
  ctx.lineTo(100,50)		// 第二个点
  ctx.lineTo(100,100)		// 第三个点
  ctx.closePath()			  // 自动寻回笔触点
  // 绘制路径
  ctx.stroke()			// 点与点之间绘制为轮廓
  ctx.fill()				// 点与点之内绘制为块
  // 路径绘制完毕, 闭合画笔, 避免下次使用笔触在50,50路径中
  ctx.beginPath()
</script>
~~~

### 圆(arc)

<HairyImage src="https://pic.imgdb.cn/item/62ec90898c61dc3b8e61f41c.jpg" />

arc(x, y, radius, startAngle, endAngle, anticlockwise)
- 以`x，y`为圆心
- 以`radius`为半径的圆弧（圆）
- 从`startAngle`（起点）开始,到`endAngle`（终点）结束

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  // 角度转弧度函数
  function ang(d){ return d * Math.PI / 180 }
  const ctx = testNode.getContext("2d")
  ctx.save()
  ctx.beginPath()
  ctx.arc(150, 150, 100, 0, ang(360))
  ctx.stroke()
  ctx.restore() 
</script>		
~~~

### 弧线(moveTo|arcTo)

<HairyImage src="https://pic.imgdb.cn/item/62ec91038c61dc3b8e639158.jpg" />

ctx.moveTo(x0,y0) | ctx.arcTo(x1,y1,x2,y2,r)

- 以 `x0,y0` 为起点
- 以 `x1,y1` 为中点
- 以 `x2,y2` 为终点
- 以 `r` 为弧的半径

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  // 角度转弧度函数
  function ang(d){ return d * Math.PI / 180 }
  var ctx = testNode.getContext("2d")
  ctx.save()
  ctx.beginPath()

  // 起点
  ctx.moveTo(150,100) 
  // 中点 终点 半径
  ctx.arcTo(200, 100, 200, 200, 50)

  ctx.stroke();
  ctx.restore();
</script>		
~~~

### 贝塞尔曲线(quadraticCurveTo)

<HairyImage style="width: 400px" src="https://pic.imgdb.cn/item/62ec920d8c61dc3b8e671a0e.jpg" />

ctx.moveTo(x0,y0) | ctx.quadraticCurveTo(x1,y1,x2,y2)

- 以`x0,y0`为起点		
- 以`x1,y1`为中点		
- 以`x2,y2`为终点	

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
  // 角度转弧度函数
  function ang(d){return d*Math.PI/180}
  var ctx = testNode.getContext("2d")
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(150,100) // 起点 
  ctx.quadraticCurveTo(200, 100, 200, 200) // 中点 终点

  ctx.stroke();ctx.restore()
</script>
~~~

---

**三次贝塞尔曲线**

ctx.moveTo(x0,y0) | ctx.quadraticCurveTo(x1,y1,x2,y2,x3,y3)

- 以`x0,y0`为起点
- 以`x1,y1`为中点1
- 以`x2,y2`为中点2
- 以`x3,y3`为终点

~~~html
<canvas class="test" width="400" height="300"></canvas>
<script>
// 角度转弧度函数
function ang(d){return d*Math.PI/180}
var ctx = testNode.getContext("2d")
ctx.save()
ctx.beginPath()
ctx.moveTo(0,50)
ctx.bezierCurveTo(1000,50, 0,550, 1000,550)
ctx.stroke();ctx.restore()
</script>
~~~

