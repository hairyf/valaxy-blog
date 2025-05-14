---
title: JavaScript Canvas
categories:
  - Notes
  - Client
  - JavaScript
tags:
  - JavaScript
  - HTML
  - canvas
date: 2018-07-27
---

Canvas API（画布）是在HTML5中新增的标签用于在网页实时生成图像，并且可以操作图像内容，基本上它是一个可以用JavaScript操作的位图（bitmap）。
Canvas 对象表示一个 HTML 画布元素 - `<canvas>`。它没有自己的行为，但是定义了一个 API 支持脚本化客户端绘图操作。

<!-- more -->

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

## 基本绘制

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

## 矩形(rect)

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

## 路径(line)

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

## 圆(arc)

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

## 弧线(moveTo|arcTo)

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

## 贝塞尔曲线(quadraticCurveTo)

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

## 画布瞄点(translate)

canvas默认的瞄点为 `0,0` 但可以使用 `ctx.translate(x,y)` 设置瞄点在某个地方。

<HairyImage style="width: 400px" src="https://pic.imgdb.cn/item/62ec94168c61dc3b8e6e1475.jpg" />

~~~html
<canvas class="test" width="1000" height="600"></canvas>
<script>
// 角度转弧度函数
function ang(d){return d*Math.PI/180}
var ctx = testNode.getContext("2d")
ctx.save()		//////////////////////////////
ctx.translate(500,300)  //将画布瞄点移到中心店 x,y
ctx.beginPath()	//////////////////////////////
ctx.arc(150, 150, 100, 0, ang(360))	 // 绘制一个圆
ctx.stroke();ctx.restore() 	//////////////////////////////
</script>
~~~

## 画布旋转(rotate)

ctx.rotate(弧度)

<HairyImage src="https://pic.imgdb.cn/item/62ec94708c61dc3b8e6f472a.jpg" />

~~~html
<canvas class="test" width="1000" height="600"></canvas>
<script>
// 角度转弧度函数
function ang(d){return d*Math.PI/180}
var ctx = testNode.getContext("2d")
ctx.save()		//////////////////////////////
ctx.rotate(ang(40))	// 旋转矩形90度
ctx.beginPath()	//////////////////////////////
ctx.arc(150, 150, 100, 0, ang(360))	 // 绘制一个圆
ctx.stroke();ctx.restore() 	//////////////////////////////
</script>
~~~

## 控制尺寸(scale)

ctx.scale(x轴倍率, y轴倍率)

~~~html
<canvas class="test" width="1000" height="600"></canvas>
<script>
// 角度转弧度函数
function ang(d){return d*Math.PI/180}
var ctx = testNode.getContext("2d")
ctx.save()		//////////////////////////////
ctx.scale(2, 2)	// 放大200%
ctx.beginPath()	//////////////////////////////
ctx.arc(150, 150, 100, 0, ang(360))	 // 绘制一个圆
ctx.stroke();ctx.restore() 	//////////////////////////////
</script>
~~~

### 图片绘制(drawImage)

ctx.drawImage(image,x,y,width,height)

<HairyImage src="https://pic.imgdb.cn/item/62ec94de8c61dc3b8e70d062.jpg" />

- `image` 可以是`image` 也可以是`canvas` 对象
- 以`x,y`点为起始坐标
- 以`width,height`为指定宽高

~~~html
<canvas class="test" width="1000" height="600"></canvas>
<script>
// canvas操作图片时,必须要等图片加载完才能操作
var img = new Image() // 创建一个img实例
img.src = "tg.png"	  // 该img实例链接对应tg.png
img.onload = function(){ // 该图片加载完成的回调
    // 画布上绘制图像
	ctx.drawImage(img,0,0,50,50);
}
</script>
~~~

### 背景绘制(createPattern)

<HairyImage src="https://pic.imgdb.cn/item/62ec95888c61dc3b8e7323e1.jpg" />

ctx.createPattern(image,repetition)

- `image` 图形源
- `repetition` 重复铺垫规则(repeat,repeat-x,repeat-y,no-repeat)

~~~html
<canvas class="test" width="1000" height="600"></canvas>
<script>
var img = new Image()
img.src = "tg.png"
img.onload = function(){
    ctx.fillStyle = ctx.createPattern(img,"no-repeat");
	ctx.fillRect(0,0,600,600)
}
</script>
~~~

## 线性渐变(linearGradient)

<HairyImage src="https://pic.imgdb.cn/item/62ec959b8c61dc3b8e736ce7.jpg" />

ctx.createLinearGradient(x1,y1,x2,y2)

- 以`x1,y1`为渐变起点
- 以`x2,y2`为渐变终点

gradient.addColorStop(position,color)

- `position`	0.0与1.0之间的数值,表示渐变中颜色所在的相对位置, 0.5代表中间
- `color` 		有效的CSS颜色值

~~~js
var gradient = ctx.createLinearGradient(0, 150, 300, 150)
gradient.addColorStop(0, 'red') // 第一个
gradient.addColorStop(0.5, 'yellow') // 第二个
gradient.addColorStop(1, 'green') // 第三个
ctx.fillStyle = gradient
ctx.fillRect(0, 0, 300, 300)
~~~

## 径向渐变(radialGradient)

<HairyImage src="https://pic.imgdb.cn/item/62ec95d98c61dc3b8e745901.jpg" />

createRadialGradient(x1,y1,r1,x2,y2,r2)

- 前三个值参数定义另一个以`x1,y1`为原点，半径为`r1`的圆
- 后三个参数则定义另一个以`x2,y2`为原点，半径为`r2`的园

~~~js
ctx.translate(500, 300)
const gradient = ctx.createRadialGradient(0, 0, 100, 0, 0, 300)
gradient.addColorStop(0, 'red') // 第一个
gradient.addColorStop(0.5, 'yellow') // 第二个
gradient.addColorStop(0.8, 'pink') // 第二个
gradient.addColorStop(1, 'green')	// 第三个
ctx.fillStyle = gradient
ctx.fillRect(-500, -300, 1000, 600)
~~~

## 文字绘制(text)

~~~js
var ctx = testNode.getContext('2d')
ctx.fillStyle = 'darkgreen' // 字体的颜色
ctx.font = 'bold 100px sans-serif' // 字体样式
ctx.textBaseline = 'middle' // 字体上下对其的方式
ctx.textAlign = 'center' // 字体左右对其的方式
ctx.fillText('李国超', 500, 300) // 绘制字体
console.log(ctx.measureText('李国超'))// 字体的信息
~~~

**ctx.textBaseline - params**

<HairyImage src="https://www.w3school.com.cn/i/textBaseline.gif" />

**ctx.textAlign - params**

<HairyImage style="width: 200px" src="https://pic.imgdb.cn/item/62ec969d8c61dc3b8e7733f8.jpg" />

## 像素操作(imageData)

ctx.getImageData(x,y,w,h)
- 复制 canvas 一块区域为像素画布，可以进行自定义像素绘制。

ctx.getImageData Return
- `width`横向上像素点的个数
- `height`轴向上像素点的个数
- `data` 每个像素对应的颜色数组
  - `[0,0,0,0   0,0,0,0   0,0,0,0.............]`
  - `每4个元素对应着一个像素的rgba, 以此类推`

ctx.putImageData(imageData,x,y)
- 在指定位置绘制像素画布

~~~js
var imageData = ctx.getImageData(0, 0, 100, 100)
for (let i = 0; i < imageData.data.length / 4; i++)
  imageData.data[4 * i + 3] = 100 // 透明度变为0.1

ctx.putImageData(imageData, 0, 0)
~~~

---

**单像素处理**

~~~js
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
setPxInfo(imageData, 10, 10, [0, 0, 0, 255]) // 设置x轴为10,y轴为10的颜色为黑色
console.log(getPxInfo(imageData, 10, 10)) // [0,0,0,255]
// ! 获取单个像素信息
function getPxInfo(imgData, x, y) {
  var color = []
  var data = imgData.data
  var w = imgData.width
  for (let i = 0; i < 4; i++)
    color[i] = data[(y * w + x) * 4 + i]

  return color	// [r, g, b, a]
}
// ! 设置单个像素
function setPxInfo(imgData, x, y, color) {
  var data = imgData.data
  var w = imgData.width
  for (let i = 0; i < 4; i++)
    data[(y * w + x) * 4 + i] = color[i]
}
~~~

## 马赛克(Mosaic)

<HairyImage src="https://pic.imgdb.cn/item/62ec97cd8c61dc3b8e7b80f8.jpg" />

- 选取一个马赛克矩形
- 从马赛克矩形中随机抽出一个像素点的信息（rgba）
- 将整个马赛克矩形中的像素点信息统一调成随机抽出的那个

## 图像合成(Operation)

~~~js
/*
  source:新的图像（源）
  destination：已经绘制过的图像（目标）
  globalCompositeOperation
  	source-over(默认值)   :新图层在上面,新的图像层次比较高
  	source-in		   	:只留下新图层和旧图层重叠的新图层部分
  	source-out			:只留下新图层 超出 旧图层的部分
	source-atop			:新图层超出的部位不显示

  	destination-over	:旧图层在上面，旧的图像层级比较高
  	destination-in		:只留下 新图层和旧图层重叠的旧图层部分
  	destination-out		:只留下 旧图层超出新图层的部分
  	destination-atop	:旧图层超度的部位不显示
*/
// ! 旧图层
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 100, 100)

// ! 图层合成
ctx.globalCompositeOperation = 'destination-atop'

// ! 新图层
ctx.fillStyle = '#008000'
ctx.fillRect(50, 50, 100, 100)
~~~

## 导出图片(toDataUrl)

~~~js
var img = new Image()
img.src = 'ggk.png'
img.onload = function () {
  canvas.width = img.width
  canvas.height = img.height
  // canvas绘制图像
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  // 生成一个图像url信息
  const result = canvas.toDataURL()
  // 跳转为新链接
  but.onclick = () => window.open(result)
}
~~~

## 事件(Event)

~~~js
ctx.arc(150, 150, 50, ang(0), ang(360))
ctx.fill()
canvas.onclick = function (ev) {
  ev = ev || event
  const x = ev.clientX - canvas.offsetLeft
  const y = ev.clientY - canvas.offsetTop
  // ! 判断在图像是否在canvas的x,y当中
  if (ctx.isPointInPath(x, y))
    alert('图像点击被触发')
}
~~~

## 音视频绑定

~~~js
var video = document.createElement('video')
video.src = '../4.视频播放器/7.视频播放器布局/video/test.mp4'
video.addEventListener('loadedmetadata', () => {
  // ! 当视频加载完毕时 执行一个定时器, 该定时器将一直在画布上绘制视频当前时间的图像
  setInterval(() => { ctx.drawImage(video, 0, 0, oc.width, oc.height) })
})
but.onclick = function () { video.play() }
~~~
