---
title: Gulp 基本应用(4.x)
date: 2020-11-01
categories:
  - notes
  - client
  - bundler
tags: 
  - grunt
---

Gulp 是与 Grunt 功能类似的前端项目构建工具, 基于`Nodejs`的自动任务运行器，能自动化地完成 ` javascript/coffee/sass/less/html/image/css ` 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务，此外，Gulp 比 Grunt 更高效(异步多任务), 更易于使用, 插件也具有更高的质量。

<!-- more -->

## 初始化项目

```sh
npm init
```

~~~html
|- dist
|- src
  |- js
  |- css
  |- less
|- index.html
|- gulpfile.js
|- package.json
~~~

```sh
npm install gulp --save-dev
```

配置 `gulpfile` 接口文件(gulpfile.js)

~~~js
// 引入gulp模块
var gulp = require('gulp')
// 定义默认任务
gulp.task('default', ['任务'])// 异步执行
// -----------------------------
gulp.task('任务名', () => { // 同步执行
  // 将你的任务的任务代码放在这
})
~~~

- `gulp.src(filePath/pathArr)` 指向指定路径的所有文件, 返回文件流对象，用于读取文件
- `gulp.dest(dirPath/pathArr)` 指向指定的所有文件夹，用于向文件夹中输出文件
- `gulp.task(name, [deps], fn` 定义一个任务
- `gulp.watch()` 						   监视文件的变化

**运行构建项目命令**：`gulp`

## 常用插件

- `gulp-concat` —— 合并文件(js/css)
- `gulp-uglify` —— 压缩js文件
- `gulp-less` —— 编译less
- `gulp-clean-css` —— 压缩css
- `gulp-rename` —— 文件重命名
- `gulp-livereload` —— 实时自动编译刷新

## 合并压缩(JavaScript)

```sh
npm install gulp-concat gulp-uglify gulp-rename --save-dev
```

~~~javascript
function javascript() {
	return gulp.src('src/js/*.js') 			  // 操作的源目录文件
        .pipe(concat('built.js')) 			// 合并到临时文件     
        .pipe(gulp.dest('dist/js')) 		// 将临时文件拷贝到指定文件
        .pipe(rename({suffix: '.min'})) // 将临时文件重命名 rename方法suffix配置是添加后缀名
        .pipe(uglify())    						  // 临时文件进行压缩
        .pipe(gulp.dest('dist/js'));	  // 将临时文件拷贝到指定文件
}
// 执行 minifyjs 任务流程 default 为默认任务
exports.default = javascript
~~~

> 项目命令行输入 `gulp` 回车，或命令行输入`gulp [task name]` 回车，但必须要配置文件加载对应任务。

## 编译压缩(Style)

```sh
npm install gulp-less gulp-clean-css --save-dev
```

~~~javascript
// gulp-less 不支持新版语法，需要用 task 定义规则
gulp.task('less',function () {
	return gulp.src('src/less/*.less') 
		.pipe(less())	                // 编译
		.pipe(gulp.dest('src/css'))   // 输出
})
var less = gulp.task('less')
// css合并,压缩任务
function css() {
	return gulp.src('src/css/*.css') 
		.pipe(concat('built.css'))						  // 合并到临时文件
		.pipe(gulp.dest('dist/css'))					  // 将临时文件拷贝到指定文件
		.pipe(rename({suffix: '.min'}))				  // 将临时文件重命名 rename方法suffix配置是添加后缀名
		.pipe(cleanCss({compatibility:'ie8'}))  // 临时文件压缩css并兼容ie8
		.pipe(gulp.dest('dist/css'))					  // 将临时文件拷贝到指定文件
}
// 任务合并为lessCss
exports.lessCss = gulp.series(less, css)
~~~

## 热更新(Hot)

```sh
npm i gulp-connect open --save-dev
```

1. 注册热加载的任务 server，注意依赖 build 任务 
2. 注册热加载的任务

```js
// 热加载+监视任务,模拟虚拟服务端
function hot() {
  connect.server({
    root: 'dist/', // 监视的源目标文件路径
    livereload: true, // 是否实时刷新
    port: 5000 // 开启端口号
  })
  // 自动开启链接
  open('http://localhost:5000') // npm install open --save-dev
  // 监视目标文件
  gulp.watch(['src/js/*.js'], javascript)
  gulp.watch(['src/less/*.less'], less)
  gulp.watch(['src/css/*.css'], css)
  gulp.watch(['index.html'], html)
}
```
