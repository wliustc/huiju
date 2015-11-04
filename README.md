# huiju
收集各种1元秒杀商品 和 微信优惠活动。
如果对使用类库有什么不懂得，，请看当前目录下 node_modules 里面的readme.md
另外，，我们也需要在这里编写我们这个项目的readme哦 亲

## 安装部署
安装步骤：
1、安装nvm，安装monogo,redis(自行百度)

2、nvm install node (默认会安装最新版Nodejs ，目前我们使用5.0.0 ,应该兼容4.0及以下，因为我们目前还没用es6和7等js 语法，无所谓的高版本低版本的咯)

3、nvm install iojs 默认最新版 node环境已经安装完毕。 其中nvm 是管理 node版本的。 请自行将nvm 命令添加到系统环境变量，方便执行。 

4、nvm use node stable （ 这句话意思 会用稳定版的最新node, 执行命令后，默认使用的是nodejs 5.0.0, 我忘记了是否将这个命令加入 环境中了。如果新建命令行 无法使用node， 请将这个命令 自行添加到系统环境中）

5、npm install -g cnpm --registry=https://registry.npm.taobao.org (安装淘宝的npm,这个工具就是node的page管理工具，大家就把她理解成maven吧,之所以用淘宝的npm，就是因为他得速度，，大家如果觉得没必要，可以学习嘉怡 试试npm效果哦。中途出错别怪哥)

5.5、npm install mocha -g （安装单元测试工具）

5.6、 npm i istanbul -g （安装测试覆盖率工具）

5.7、 npm i -g mocha-phantomjs （测试页面使用）

5.8、 npm i -g nodemon （用nodemon 来代替node 启动js， 会自动监控本地js文件的更新，自动重启node应用）

6、到你自己平时放项目的目录下，执行 ：git clone https://github.com/46602907/huiju

8、cd huiju 

9、cnpm install

10、node spider/index.js | node app/index.js ( 一个是爬数据的，一个是微信上展示数据的,如果有web需要展示数据，，另行建立文件夹)

## 介绍
每个系统目录结构：*（每个父文件，里面按照小模块建立小模块的文件夹。 如controllers 下面有XXX文件夹，，下面才是具体的controller）*
	config.js *(系统配置文件)*
	controllers *(提供对web的 res rsp的操作。 目前爬虫服务没有页面，无须web，微信展示系统需要编写)*
	models *（数据模型格式定义，不带任何逻辑的，只定义monogo的Schema）*
	views *（一些web的静态资源,除非js,其他的资源都可以考虑使用cdn。目前爬虫服务无需此目录）*
		--image
		--css
		--js
		--fonts
		--html
	common *(提供一些util的封装，，尽量不要自己封装，先尝试在cnpm上去search 对应关键字)*
	proxy *(提供对mongosoo 模型数据的封装，提供一些查询，新增和修改的方法，等同于dao层的作用)*
	middlewares *(中间件，如日志拦截器，登陆拦截器，访问次数拦截器，等)*
	test *(单元测试代码目录，也和上级目录对应上就可以了。主要测试proxy,commmon 和controllers)*
	Makefile *(安装描述文件，这里定义了一些测试命令，后期可以添加一些安装node相关框架的命令等)*
	.travis.yml  *(持续化集成测试的配置文件)*
	package.json *(依赖文件，就认为是pom吧)*

技术栈介绍： *（node 我们用得框架，都是TJ大神编写，每个框架里 都有一个readme.md，里面有示例和介绍，如果还看不懂，可以先咨询团队成员，然后看框架里的源码）后续大家持续添加进去吧，特别是web相关的还有很多如session,cookie,uuid,md5 xss,文件上传下载等, 还有七牛 和极光，都有相关框架哦*

1、node package.json *（npm 使用的）*

2、async  *异步流程控制库 --控制并发速度*

3、eventproxy  *异步流程控制库- -订阅发布*

4、mongoose  *mongodb连接工具带ORM功能*

5、superagent *爬虫*

6、benchmark  *性能测试，可以评估方法执行时间*

7、coveralls *测试覆盖率工具整合bager*

8、mocha  *单元测试*

9、mocha-phantomjs *能够测试html里的js 的单元测试*

10、q	*解决金字塔递归的 承诺函数库*

11、should  *断言库*

12、supertest  *单元测试中，用于模拟客户端请求服务端的组件*

13、koa  *mvc 框架*

14、angularjs *前端js mvvm模式框架*

15、bootstrapcss *前端css*

16、Makefile *项目安装描述*

其他无需关注的
17、 colors  *console 颜色修改*  
/*
bold
italic
underline
inverse
yellow
cyan
white
magenta
green
red
grey
blue
rainbow
zebra
random
*/
如:console.log('hello'.green);

（运行时性能监控newrelic）
https://cnodejs.org/topic/53fde58d7c1e2284785cd39e

koa 中间件 https://github.com/koajs/koa/wiki

lodash 对数组操作 map reduce等


## 测试

跑测试

$ make test

跑覆盖率测试

$ make test-cov

##跟进信息：

[![持续集成测试](https://travis-ci.org/46602907/huiju.svg?style=flat-square)](https://travis-ci.org/46602907/huiju)
[![测试覆盖率](https://coveralls.io/repos/46602907/huiju/badge.svg?branch=master&service=github)](https://coveralls.io/github/46602907/huiju?branch=master)
[![依赖项目状态](https://david-dm.org/46602907/huiju.svg?style=flat-square)](https://david-dm.org/46602907/huiju)
[![node版本](https://img.shields.io/badge/node.js-%3E=_4.1.0-green.svg?style=flat-square)](https://img.shields.io/)
## License

MIT