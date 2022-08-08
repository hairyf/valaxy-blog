---
title: Grunt 基本应用(1.x)
date: 2020-11-01
categories:
  - notes
  - client
  - bundler
tags: 
  - grunt
---

Grunt 是一套前端自动化构建工具，基于 nodeJs 的命令行工具，它是一个任务运行器, 配合其丰富强大的插件(plugins)系统。基于插件，它可以实现：

- 合并文件 `(js/css)`
- 压缩文件 `(js/css)`
- 语法检查 `(js)`
- 编译处理 `less/sass`
- 热编译或其它...

<!-- more -->

## 初始化项目

```sh
npm init
```

~~~
|- build----------构建生成的文件所在的文件夹
|- src------------源码文件夹
    |- js---------js  源文件夹
    |- css--------css 源文件夹
|- index.html-----页面文件
|- Gruntfile.js---grunt 配置文件(注意首字母大写)
|- package.json---项目包配置文件
~~~

```sh
npm install grunt grunt-cli --save-dev
```

配置 `Gruntfile` 接口文件(Gruntfile.js)

~~~js
module.exports = function (grunt) {
  // 1. 初始化插件配置
  grunt.initConfig({
    // 主要编码处
  })
  // 2. 加载插件任务
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // 3. 注册构建任务
  grunt.registerTask('default', [])
}
~~~

**运行构建项目命令**：`grunt`

## 常用插件

插件有 `grunt` 团队贡献的插件，插件名大都以 `contrib-` 开头，第三方提供的插件 : 大都不以 `contrib-` 开头，下述列出一些常用的插件。

> grunt 所有插件都不支持 ES6 语法，需要 babel 转义成 ES5 语法，在进行插件任务

- `grunt-contrib-htmlmin` —— 压缩 html 文件
- `grunt-contrib-cssmin` —— 压缩/合并 css 文件
- `grunt-contrib-uglify` —— 压缩 js 文件
- `grunt-contrib-imagemin` —— 压缩图片文件(无损)
- `grunt-contrib-jshint` —— js 语法错误检查
- `grunt-contrib-concat` —— 合并多个 js 文件的代码到一个文件中
- `grunt-contrib-watch` —— 实时监控文件变化、调用相应的任务重新执行
- `grunt-contrib-clean` —— 清除文件(打包处理生成的)
- `grunt-contrib-copy` —— 复制文件、文件夹
- `grunt-contrib-requirejs` —— 合并压缩 requirejs 管理的所有 js 模块文件

> 如果想查看更多插件，可以浏览官网的插件列表页面 http://www.gruntjs.net/plugins

## 合并模块(JavaScript)

```sh
npm i grunt-contrib-concat --save-dev
```

实际代码：

~~~javascript
// src/js/test1.js
(function(){console.log('test1')})
~~~

~~~javascript
// src/js/test2.js
(function(){console.log('test1')})
~~~

配置任务：

~~~javascript
module.exports = function (grunt) {
	// 初始化配置grunt任务
	grunt.initConfig({ //主要编码处
		concat: {
		  options: { //可选项配置
		    separator: ';'   //js文件使用;连接合并
		  },
		  build: { //此名称任意
		    src:  ["src/js/*.js"],  	//合并哪些js文件 文件夹/*.js代表该文件夹所有js文件
		    dest: "build/js/build.js" 	//输出的js文件目录
		  }
		}
	});
	// 加载插件任务(grunt-contrib-concat)
	grunt.loadNpmTasks('grunt-contrib-concat');
	// 注册构建任务(concat)
	grunt.registerTask('default', ["concat"]);
}
~~~

> 项目命令行输入 `grunt` 回车，或命令行输入`grunt [task name]` 回车，但必须要配置文件加载对应任务。

输出文件：

~~~javascript
// build/js/built.js
(function(){
	console.log('test1')
});(function(){
	console.log('test2')
})
~~~

## 压缩代码(JavaScript)

```sh
npm i grunt-contrib-concat grunt-contrib-uglify --save-dev
```

实际代码：

~~~javascript
// build/js/built.js
(function(){
	console.log('test1')
});(function(){
	console.log('test2')
})
~~~

配置任务：

~~~javascript
module.exports = function (grunt) {
	grunt.initConfig({
		concat: {...} // 合并
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
		  options: {  // 可选项 不是必须的
		    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + // banner 头部注释
		    '<%= grunt.template.today("yyyy-mm-dd") %> */'
		  },
		build: {
		    files: { // 输出目录/文件名:['压缩文件'...]
		      'build/js/built-<%=pkg.name%>-<%=pkg.version%>.min.js': ['build/js/build.js']
		    }
		  }
		}
	});
	// 加载插件任务
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	// 注册构建任务
	grunt.registerTask('default', ["concat","uglify"]);
}
~~~

## 语法检测(JavaScript)


```sh
npm i grunt-contrib-jshint --save-dev
```

配置任务：

~~~javascript
jshint : { // grunt.initConfig{jshint}
  options: {
    jshintrc : '.jshintrc' //指定配置文件
  },
  build : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
}
// 加载任务
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['concat', 'uglify', 'jshint']);
~~~

配置 .jshintrc：

~~~javascript
{	"curly": true,"eqeqeq": true,"eqnull": true,"expr" : true,
  "immed": true,"newcap": true,"noempty": true, "noarg": true,
  "regexp": true,"browser": true,"devel": true,"node": true,
  "boss": false,
  //不能使用未定义的变量
  "undef": true,
  //语句后面必须有分号
  "asi": false,
  //预定义不检查的全局变量
  "predef": [ "define", "BMap", "angular", "BMAP_STATUS_SUCCESS"]
}
~~~

实际代码：

~~~javascript
// src/test2.js
console.log('test2')
~~~

命令行输出：

~~~javascript
// 语法不符合规则，后面要加分号
src/js/test2.js
1 |console.log('test2')
                       ^ Missing semicolon.
~~~

## 压缩合并(CSS)

```sh
npm i grunt-contrib-cssmin --save-dev
```

配置任务：

~~~javascript
cssmin:{	// grunt.initConfig{cssmin}
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  build: {
    files: {	// 输出目录/文件名:['压缩文件'...]
        'build/css/build.min.css': ['src/css/*.css']
    }
  }
}
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['concat', 'uglify', 'jshint',"cssmin"]);
~~~


实际代码：

~~~css
#box2 { /*test1.css*/
    width: 400px;
    height: 400px;
    background: deeppink;
}
#box1 { /*test2.css*/
    width: 400px;
    height: 400px;
    background: deeppink;
}
~~~

输出内容：

~~~css
#box1{width:200px;height:200px;background:red;border:red solid 1px}#box2{width:400px;height:400px;background:#ff1493}
~~~

## 文件监视(Watch)