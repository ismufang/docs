## Frontend-Guide

### 目录

- [前端组织/前端博客](#blogs)
- [博客搭建](#blog_build)
- [HTML](#html)
- [CSS](#css)
- [浏览端 JS](#javascript)
- [Project Build](#project_build)
- [Node Package](#node_package)
- [Node Project](#node_project)
- [精选阅读](#read)
  - [前端技术](#fedev)
  - [Node 学习资料](#node_read)
  - [前端面试](#interview)
  - [其他技术](#otherdev)
- [工具/软件](#tools)
  - [Web](#web)
  - [APP](#app)
  - [Mac](#mac)
  - [Linux](#linux)
- [Chrome Plugins](#BrowserPlugins)
- [Git](#git)
- [服务端](#servers)
- [数据端](#backend)
- [设计/交互](#ux)
- [速查手册](#handbook)

### 正文

<h3 id="blogs">前端组织/前端博客</h3>

> 虽混过外企俩家，但劳资英文这项的技能点还是灰色的...so，俺关注的站点主要以中文为主

- [GitHub](https://github.com) - 没 `Github` 都不好意思面基有木有！！！
- [MDN](https://developer.mozilla.org/zh-CN/) - 无数的资源再等着你探索，追标准和新特性肯定得关注的网站
- [Awesomes.cn](https://www.awesomes.cn/) - 国人维护的前端资源库，深度对接到 `Github`，分类和展现清晰，值得收藏
- [如何跟上前端开发的最新前沿](https://uptodate.frontendrescue.org/zh/) - RT，不解释
- [慕课](http://www.imooc.com/) - 大量的在线计算机课程。 虽然初、中级居多，但是不乏有巨作值得细细品尝
- [阮一峰](http://javascript.ruanyifeng.com/) - 关注多年，拜读其 [ES6](http://es6.ruanyifeng.com/) 系列。虽网传靠写书进鸟阿里，但博客内容确实够丰富
- [W3Cplus](http://www.w3cplus.com/) - 大漠(《图解 CSS3》作者)在国内的影响力杠杠的，`Sass` 专家级
- [淘宝前端团队](http://taobaofed.org/) - 内容涵盖 `Web` 和 `Node`，要深度游深度，要广度有广度
- [奇舞团博客](http://www.75team.com/) - 坚持是最宝贵的，别人的奇舞周刊早已经过百期了
- [百度 FEX](http://fex.baidu.com/) - 代表作 `FIS`、`UEditor`、`WebUploader`、`KityMinder`
- [腾讯全端 AlloyTeam](http://www.alloyteam.com/) - 腾讯 Web 前端团队，博客真的有点丑...
- [粉丝日志 for 张丹](http://blog.fens.me/) - 大爱作者写的 `Node` 系列
- [张鑫旭](http://www.zhangxinxu.com/wordpress/) - 成名多年的、高产的前端大湿，`CSS`猛人

<h3 id="blog_build">博客搭建</h3>

- [Hexo](https://hexo.io/zh-cn/) - 快速、简洁且高效的博客框架，照着文档分分钟就可以在本地跑起来。`Github` 地址:[Hexo](https://github.com/hexojs/hexo)
- [Jekyll](http://jekyll.bootcss.com/) - 将纯文本转化为静态网站和博客。由于环境依赖的问题，所以安装起来可能稍费劲那么一点。`Github` 地址：[Jekyll](https://github.com/jekyll/jekyll)
- [GithubPages](https://pages.github.com/) - 免费的静态站点。配合着 `Hexo` 或 `Jekyll` 的模板，分分搭建出一套炫酷的个人博客
- [Tumblr](https://www.tumblr.com/) - 轻博客的祖师爷，各种各样的主题感觉不错
- [Wordpress](https://zh-cn.wordpress.com/) - 这玩意古老到都不想介绍

> 使用 `Hexo/Jekyll + GitPage`，前端搭建静态博客那是相当 easy。用 `Markdown` 写文章做记录，再 `push` 到 `Github` 上，分分钟高大上有木有

再推荐三款视觉效果极佳的 `Hexo` 主题，且在 `Github` 上的 `star` 都很不错：

- [NexT](https://github.com/iissnan/hexo-theme-next)
- [Yilia](https://github.com/litten/hexo-theme-yilia)
- [Tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak)

不能偏心，所以也推荐三款 `Jekyll` 的好主题：

- [So Simple](https://github.com/mmistakes/so-simple-theme) 如果你看过俺的博客，对这个主题就肯定不会陌生啦
- [HPSTR](https://github.com/mmistakes/hpstr-jekyll-theme) 当初 [fefork](http://www.fefork.com/) 差点选这个主题:)
- [beautiful](https://github.com/daattali/beautiful-jekyll#readme)

<h3 id="html">HTML</h3>

纯 `HTML` 相关其实没有好玩的项目，所以这儿展示的内容主要都是一些模板，而且以下列出来的都是免费的，方便拿取搭架后台或者博客

- [HEAD](https://github.com/joshbuchea/HEAD) - 最全的 `<head>` 列表，真心佩服这种偏执的整理能力
- [blur-admin](https://github.com/akveo/blur-admin) - 视觉冲击极强的管理后台，各种动画效果。PS：因为团队有[ant-design](https://github.com/ant-design/ant-design)的使用经验，感觉使用起来不是很顺畅，这套后台又是基于`AngularJS`，所以再三权限之后还是没实际使用，劳资还是别给团队添乱了，囧...
- [AdminLTE](https://github.com/almasaeed2010/AdminLTE) - 很小清新的后台模板，每次看[preview](https://almsaeedstudio.com/preview) 页面都觉得很有视觉冲击
- [gentelella](https://github.com/puikinsh/gentelella) - 刚用这个搭建了我司内部用的的数据平台，效果喜人。模板实现的功能比较全，比如登录、注册甚至各种 `widget`，所以最终交付的时候，自己几乎没写几行 CSS。
- [material-design-lite](https://github.com/google/material-design-lite) - `Star` 数超过 2W 的开源模板项目，包含了多套简洁的 `templates`，可以用于博客、后台或者企业首页。

<h3 id="css">CSS</h3>

- [MetroUI](http://metroui.org.ua/) - 好看好用，重点是样式特别、个性
- [Font-Awesome](http://fontawesome.io/) - 图标字体库。相类似的库有不少，大厂都喜欢造轮子嘛:)
- [LoadersCSS](https://connoratherton.com/loaders) - 用 CSS 技术实现 loading 动画； 补一句，想熟悉、理解 `keyframes、animation、transform、transition` 的童鞋可以直接去读其源码(只有千把行代码)，读完就算出师鸟:)
- [WeUI](https://github.com/weui/weui) - 一套同微信原生视觉体验一致的基础样式库 为微信 Web 开发量身设计，令用户的使用感知更加统一
- [PostCSS](https://github.com/postcss/postcss) - 最近才知道大名鼎鼎[Autoprefixer](https://github.com/postcss/autoprefixer)是其插件 推荐大漠的文章[《PostCSS 深入学习》](http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html)，有关 PostCSS 不是什么？PostCSS 是什么？PostCSS 可以做什么等等问题，文章里面有答案
- [CSSgram](https://github.com/una/CSSgram) - 图片滤镜库，终于可以用 CSS 在 web 上实现滤镜的效果鸟 IE 不支持，不过新的移动设备支持没问题 [Can I Use](http://caniuse.com/#search=CSS%20Blend%20Modes)
- [HINT.css](https://github.com/chinchang/hint.css) - 一款非常小巧的提示框效果
- [Balloon.css](http://kazzkiq.github.io/balloon.css/)| |同上，一款非常小巧的提示框效果
- [Hover.css](http://ianlunn.github.io/Hover/) - 很多鼠标 Hover 态的效果，可以给产品学习一下:)
- [Cursor](http://css-cursor.techstream.org/) - 记录各浏览器对 Cursor 的支持情况
- [csscss](https://github.com/zmoazeni/csscss) - 用于检查 CSS 代码冗余
- [purecss](http://purecss.io/) - 小巧的响应式 CSS 库，Yahoo!出品
- [hamburgers](https://jonsuh.com/hamburgers/) - 简单的动画库，让 Click(or Tap) 变得美妙
- [cssmatic](http://www.cssmatic.com) - 一个帮忙调试 CSS 效果的工具

<h3 id="javascript">浏览端 JS</h3>

- [requirejs](https://github.com/requirejs/requirejs) - JS 模块化是构建复杂项目的第一步 中文学习文档奉上：[RequireJS 中文网](http://www.requirejs.cn/)
- [ECharts](http://echarts.baidu.com/index.html) - 好用，最关键的是支持的图表展示非常之多，强烈推荐
- [Swiper](http://www.swiper.com.cn) - 强大的 Slider 库 其实这类效果库非常多，但文档能那么专业的就很少鸟
- [babel](https://babeljs.io/) - `ES6` 用起来。这个插件可以让我们用新的 **标准/提案** 写 `JavaScript` 代码，然后再向下 **转换编译**，最终生成随处可用的 `JavaScript` 代码。中文文档奉上[《babel-handbook》](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/README.md)
- [fullPage](http://alvarotrigo.com/fullPage/) - 非常好用的全屏滑动库，看 Demo 就明白
- [PhotoSwipe](http://photoswipe.com/) - 偶常用的 js 库 官网上有这么一句很关键、重要"no dependencies"
- [Vuejs](http://cn.vuejs.org) - 比较喜欢其作者... 所以劳资正在看源码学习学习
- [favico.js](http://lab.ejci.net/favico.js/) - 动态改变浏览器标签栏中的网站图标，非常好玩
- [ant.design](http://ant.design) - 蚂蚁金服搞的良心项目，文档美好的令人发指 样式优雅，强烈推荐内部系统尝试此库
- [highlightjs](https://highlightjs.org/) - 代码高亮库，支持非常多的语言
- [daterangepicker](http://www.daterangepicker.com) - 时间选择插件的不二选择，基于 `Bootstrap` 和 [Moment.js](http://momentjs.com/)
- [nodePPT](https://github.com/ksky521/nodePPT) - 前同事三水的大作，好用必须得支持:) 用 Markdown 写 PPT，还可以 HTML 混排，上手飞快
- [Sortable](https://github.com/RubaXa/Sortable) - 拖拽神器，用了就知道
- [toastr](https://github.com/CodeSeven/toastr) - 信息提示的库，推荐的原因是卖相好、功能强大 [demo](http://codeseven.github.io/toastr/demo.html)
- [peity.js](http://benpickles.github.io/peity/) - jQuery 的图表插件，特别 cute，感觉萌萌哒 将 HTML 转换成一个小的`<svg>`饼图、圆环图、折线图等等
- [emojify.js](https://github.com/Ranks/emojify.js) - 能够将`emoji`关键词转换为`emoji`图片的`JS`插件 可以快速的为你的网站提供`emoji`表情支持
- [Push.js](https://github.com/Nickersoft/push.js) - 基于 `Notification API` 实现的桌面效果的提示栏。浏览器支持情况不错，如[http://caniuse.com/#search=Notification](http://caniuse.com/#search=Notification)
- [Highcharts](http://www.hcharts.cn/)| |Highcharts 中文网，又是一个图表库 确实功能强大，但是觉得不好看... PS：官网就做的不好看，脏脏的赶脚
- [NProgress](https://github.com/rstacruz/nprogress/) - 使页面加载时有更好的 loading 效果
- [Noticejs](https://github.com/jaredreich/notie.js) - 一个简单的通知库，木有依赖
- [onepage-scroll](https://github.com/peachananr/onepage-scroll) - 依赖 jQuery 的单页滚动库，和 [fullPage](http://alvarotrigo.com/fullPage/) 类似
- [videojs](http://videojs.com/) - 当下视频需求都用上`<video>`鸟 样式和交互统一的问题交给 videojs 搞定:)
- [clipboard](http://zenorocha.github.io/clipboard.js/) - 仅 2KB 大小，搞定剪贴板功能，屌不屌~ 但是，Safari 不支持...
- [impress.js](https://github.com/impress/impress.js) - 用来写 PPT 不错，偶也曾为其写过一篇[impress.js 初体验](http://www.cnblogs.com/Darren_code/archive/2013/01/04/impressjs.html)
- [Cropper](http://fengyuanchen.github.io/cropper/) - 国人开发的图片裁剪库

> **_`Swiper/PhotoSwipe/fullPage` 有这仨库，微信里常见的 H5 页完全不是问题哒_**

<h3 id="project_build">Project Build</h3>

- [pm2](https://www.npmjs.com/package/pm2) - 是一个带有负载均衡功能的 Node 应用的进程管理器； 是 [Forever](https://www.npmjs.com/package/forever) 的进阶库，想了解的可以看这篇文章[《拥抱 PM2》](http://se77en.cc/2013/06/27/goodbye-node-forever-hello-pm2-translation/)
- [Webpack](http://webpack.github.io/) - 项目构建工具，由于过于复杂和太强大，所以劳资还没去深入研究。
- [Gulp](https://github.com/gulpjs/gulp/) - Gulp 是基于 Node 实现 Web 前端自动化开发的工具。 俺总结了篇[《gulp 使用小结》](http://www.fefork.com/gulp_1/)，推荐您阅读:)
- [Bower](http://bower.io/) - 前端项目的包管理其实是件复杂的事 谁谁谁依赖谁谁谁，谁谁谁依赖谁谁谁的某个版本...卧槽 Bower 就是搞定这件事儿的，亲爹是 Twitter 推荐篇 Bower 的中文文章：[《bower 解决 js 的依赖管理》](http://blog.fens.me/nodejs-bower-intro/)
- [Grunt](http://gruntjs.com/) - 和 Gulp 类似，都是项目构建的常见选择 对比这俩的文章可谓不少，推荐篇[《Gulp vs Grunt》](http://www.benben.cc/blog/?p=407) 英盲又想看文档，可以去[Grunt 中文网](http://www.gruntjs.net/)
- [FIS](http://fex-team.github.io/fis3/) - 度厂出品的前端构建工具 文档清晰，功能强大，推荐了解和使用
- [Gitlab CI](https://ci.gitlab.org/) - 一套基于[Gitlab](https://about.gitlab.com/)的持续集成服务

> Gulp + Webpack 的使用**套路**参考: [learning-gulp](https://github.com/demohi/learning-gulp)

> Gulp 资料收集：[use-gulp](https://github.com/Platform-CUF/use-gulp)

> 推荐篇与 Webpack 相关的文章《[CSS Modules](http://boke.io/tan-tan-css-modules/)》

> Webpack 用起来吼吼：[webpack-howto](https://github.com/petehunt/webpack-howto)

<h3 id="node_package">Node Package</h3>

> 作为一名大前端甚至是多端，`Node` 绝逼是必备的一块

> 有关 `Node` 的学习资料，请访问

##### 这里介绍些有特色且前端有必要知道的包

- [anywhere](https://www.npmjs.com/package/anywhere) - 随时随地将你的当前目录变成一个静态文件服务器的根目录
- [supervisor](https://www.npmjs.com/package/supervisor) - 监控 Node 代码，自动重启。 A supervisor program for running nodejs programs
- [nodemon](https://github.com/remy/nodemon) - 监控 Node 代码，自动重启。 Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [pm2](https://www.npmjs.com/package/pm2) - 是一个带有负载均衡功能的 Node 应用的进程管理器； 是 [Forever](https://www.npmjs.com/package/forever) 的进阶库，想了解的可以看这篇文章[《拥抱 PM2》](http://se77en.cc/2013/06/27/goodbye-node-forever-hello-pm2-translation/)
- [async](https://www.npmjs.com/package/async) - 一个流程控制工具包，提供直接而强大的异步功能
- [lodash](https://www.npmjs.com/package/lodash) - JS 工具库 `Underscore.js`的一个 fork 发展而来
- [socket.io](https://github.com/socketio/socket.io) - 预计 Node 的实时框架 聊天室、页游等对实时性有高要求的较适用
- [Mongoose](https://github.com/Automattic/mongoose) - 让 NodeJS 更容易操作 Mongodb 数据库； 附上一篇[Mongoose 学习参考文档](https://cnodejs.org/topic/504b4924e2b84515770103dd)
- [CNPM](http://npm.taobao.org/) - 淘宝 NPM 镜像，提供了 NPM 同步的服务 当然可不仅仅这样，利用 CNPM 可以打造**企业/个人**私有的 NPM 服务 推荐篇搭建私有 NPM 的文章：[《CNPM 搭建私有的 NPM 服务》](http://blog.fens.me/nodejs-cnpm-npm/)
- [koa](http://koajs.com/) - 玩 Node 都知道 express，但使用 koa 的就少很多，门槛比 Ex 稍高 通过 generator 避免繁琐的回调函数嵌套，强烈推崇 [官方的文章教程](https://github.com/guo-yu/koa-guide)
- [Shipit](https://github.com/shipitjs/shipit) - 一个强大的自动化部署工具。 shipit 很多地方非常类似 gulp，他们的核心都是任务系统。
- [node-inspector](https://www.npmjs.com/package/node-inspector) - Node 调试工具，使用起来跟 Chrome 的 JS 调试器很相似
- [winston](https://www.npmjs.com/package/winston) - Node 服务最流行的日志库之一
- [co](https://www.npmjs.com/package/co) - 用 generator 写法让异步代码同步
- [thenify-all](https://www.npmjs.com/package/thenify-all) - 把异步的方法变成 Promise 的 Promisifies all the selected functions in an object
- [PhantomJS](http://phantomjs.org/) - 一般用来做抓取截图和无界面测试 也可以用来操作 DOM 和网络监测，很好玩的库 [Quick Start](http://phantomjs.org/quick-start.html)
- [ava](https://www.npmjs.com/package/ava) - 偶是应 TJ 大神推荐而得之的 `ava` 未来的测试运行器
- [Mocha](https://github.com/mochajs/mocha) - Node 里最常用的测试框架； 它支持多种 Node 的 Assert libs； 同时支持异步和同步的测试，同时支持多种方式导出结果； 也支持直接在 browser 上跑 JS 代码测试。
- [koa-validate](https://www.npmjs.com/package/koa-validate) - `koa` 的校验库 可以非常方便的对 `queryString` 或 `postBody` 的信息进行验证
- [line-reader](https://www.npmjs.com/package/line-reader) - 基于`steam`的按行读文件，偶处理日志时用哒 要不实现一个按行读文件，又得 `steam`、 又得 `chunk`，还是比较麻烦的
- [everyauth](https://www.npmjs.com/package/everyauth)| |OAuth 的集成解决方案
- [shelljs](http://documentup.com/shelljs/shelljs) - 写 Node 时难免需要用 shell 去操作些神马 shelljs 是基于 Node 的 shell 工具，API 及其简单
- [hashids](https://www.npmjs.com/package/hashids) - 看名称就懂，给 userid 加解密用的
- [node-pool](https://github.com/coopernurse/node-pool) - 让 `Node` 有连接池的概念
- [colors](https://www.npmjs.com/package/colors) - 花俏的小工具 让打印`console.log`时有更好的展示样式
- [n](https://www.npmjs.com/package/n) - 控制 Node 的版本，想升级一行代码搞定

> `supervisor` 和 `nodemon` 这俩都是监控 Node 代码，使得每次修改代码后会，开发 Node 程序必备

> 以上库俺都有使用过，甚至有不少都是项目开发中、各种特定场景下必用的，有任何使用问题欢迎沟通哈:)

<h3 id="node_project">Node Project</h3>

_暂无_

<h2 id="read">精选阅读</h2>

<h3 id="fedev">前端技术</h3>

- [前端开发规范手册](http://zhibimo.com/read/Ashu/front-end-style-guide/index.html) - 此手册主要实现的目标：代码一致性和最佳实践
- [《babel-handbook》](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/README.md) - 可以用新的规范(如 `ES6`)写代码，经过 `babel` 编译后生成没有兼容问题的代码
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/) - 阮一峰大神所著，一本开源的 JS 教程 全面介绍 ECMAScript 6 新引入的语法特性
- [ReactNative 中文版](http://wiki.jikexueyuan.com/project/react-native/) - 翻译自官方的中文文档
- [ReactWebpackCookBook](https://fakefish.github.io/react-webpack-cookbook/index.html) | |此书会引导读者是进入`React`和`Webpack`的世界。 俩都是非常前沿的技术，同时使用会更有趣。
- [ReactNative 学习指南](https://github.com/ele828/react-native-guide) - 新玩意层出不穷... 对于能持续学习的童鞋，这是个美好的时代
- [HTML/CSS 编码规范](http://www.css88.com/doc/codeguide/) - 编写灵活、稳定、高质量的`HTML`和`CSS`代码的规范
- [移动前端入门](http://gold.xitu.io/entry/56c29abfa34131005b8cb1f3) - 入门价值高，移动方向常见问题的较好总结
- [GulpBook](https://github.com/nimojs/gulp-book) - Gulp 是基于 Node 实现 Web 前端自动化开发的工具

<h3 id="node_read">Node 学习资料</h3>

- [Node.js 中文资料导航](https://github.com/youyudehexie/node123) - Node 的中文资料导航，`start1300+`
- [从零开始 NodeJS 系列文章](http://blog.fens.me/series-nodejs/) - 基本上每一篇都看过，强烈推荐
- [Node.js 包教不包会](http://nqdeng.github.io/7-days-nodejs/) - 值得阅读，看完绝不用买书鸟
- [七天学会 NodeJS](https://github.com/alsotang/node-lessons) - 劳资还没看，不过看目录还不错:)
- [Style Guide](https://github.com/dead-horse/node-style-guide) - 这是一份关于如何写出一致且美观的 `Node` 代码的风格指南
- [koa 实战](http://book.apebook.org/minghe/koa-action/index.html) - “[明河](https://github.com/minghe)出品”这四字已经说明一切。PS：正在连载中
- [stream-handbook](https://github.com/jabez128/stream-handbook) - 如果学习 NodeJS，那么流一定是需要掌握的概念

<h3 id="interview">前端面试</h3>

- [在 LinkedIn 做面试官的故事](http://dongfei.baijia.baidu.com/article/52449) - 非面试题，介绍 LinkedIn 的面试过程 文章有很多中肯的建议和想法，推荐阅读
- [大漠：写给前端面试者](http://www.w3cplus.com/css/write-to-front-end-developer-interview.html) - 这篇文章不涉及任何的面试题 大漠与大家聊聊面试者与被面者之间的感受...
- [前端面试题](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese) - Git 上非常火的前端面试题，`start17k+`
- [前端面经](https://github.com/paddingme/Front-end-Web-Development-Interview-Question) - 主要内容是些前端面试笔试题和面试套路，值得阅读

<h3 id="otherdev">其他技术</h3>

- [MongoDB 极简实践入门](https://github.com/StevenSLXie/Tutorials-for-Web-Developers/blob/master/MongoDB%20%E6%9E%81%E7%AE%80%E5%AE%9E%E8%B7%B5%E5%85%A5%E9%97%A8.md) - 入门推荐的套路，非常浅显易懂
- [Mac 设置指南](https://github.com/macdao/ocds-guide-to-setting-up-mac) - Mac 使用必看 尤其适合 偏执狂/强迫症 患者:)
- [Markdown 资料](https://github.com/xirong/my-markdown) - 简单看些语法入门，快速用起来

<h2 id="tools">工具/软件</h2>

<h3 id="web">Web</h3>

- [CanIuse](http://caniuse.com/) - **前端必备**；查看浏览器对各种新特性的兼容情况
- [overapi](http://overapi.com/) - 最全的开发人员在线速查手册
- [百度脑图](http://naotu.baidu.com) - 非常方便的思维导图工具
- [ProcessOn](https://www.processon.com/) - 和百度脑图的功能类似，脑图工具。
- [VimAwesome](http://vimawesome.com/) - Vim 插件集合，**Vim 党必备**
- [Tower](https://tower.im) - 小而美的多人协同工具。 不光只有 Web 版，还有 iPhone、iPad、Android、微信版。
- [Slides](https://slides.com/) - 一个所见即所得的 WebPPT 编辑器，非常推荐
- [faviconer.co](http://www.faviconer.co/) - 一个所见即所得的 icon 生成器，很好用
- [smallpdf](http://smallpdf.com/cn) - 提供各种格式和 PDF 互相转换
- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - 好用的 Web 版 Markdown 编辑器
- [StackEdit](https://stackedit.io/editor) - 又是一款 Web 版 Markdown 编辑器
- [墨刀](https://modao.cc/) - 一个在线移动应用原型制作工具。 旨在帮助产品经理快速制作可在手机端展示的移动应用原型。
- [htm2pdf](http://www.htm2pdf.co.uk)| |HTML to PDF
- [Speaker Deck](https://speakerdeck.com/p/featured) - 在线的演讲稿展示平台
- [RunJS](http://runjs.cn/) - 在线编辑、展示、分享、交流你的 `JavaScript` 代码
- [Bootswatch](https://bootswatch.com/) - `Bootstrap` 的免费模板
- [AdminLTE](https://github.com/almasaeed2010/AdminLTE/) - 又是一个 `Bootstrap` 的免费管理后台

<h3 id="app">APP</h3>

> 以下列表中的 APP 都是不区分系统平台的

- [印象笔记](https://www.yinxiang.com/) - 免费账号完全够用，跨平台跨终端的记录软件
- [365 日历](http://www.365rili.com/) - 首先肯定比系统自带的日历强大，要不推荐个蛋蛋 俺一般用来搞目标管理，比如学习计划和工作计划 生活中会订阅演唱会、电影首映的信息
- [多看阅读](http://www.duokan.com/) - kindle 确实好，但是懒得随身带着 多看还算不错，书较多且偶尔有特价比较爽
- [Surge](https://itunes.apple.com/cn/app/surge-web-developer-tool-proxy/id1040100637?mt=8&v0=WWW-GCCN-ITSTOP100-PAIDAPPS&l=&ign-mpt=uo%3D4) - 非免费 牛逼的网络开发与调试工具，前端必备
- [Monkey](https://github.com/coderyi/Monkey) - Monkey 是 iPhone 上一个 GitHub 第三方客户端。 展示 GitHub 上的开发者的排名，以及仓库的排名

<h3 id="mac">Mac</h3>

> 对于美好事务的追求无论何时都不算晚，前年公司给配了台 Mac 用做测试开发机，于是开始在 Mac 下办公。 **Windows？** 回不去鸟...

- [Homebrew](http://brew.sh/) - 没它程序猿没法好好干活... `Homebrew`使`OS X`更完美。 使用`gem`来安装`gems`、用`brew`来搞定那些依赖包
- [iTerm2](http://www.iterm2.com/) - Mac 终端功能少又不好看，iTerm2 可以解救你~ 推荐篇文章：[《让你的命令行丰富多彩》](http://swiftcafe.io/2015/07/25/iterm/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [BrowseShot](https://itunes.apple.com/cn/app/browseshot/id615916400) - 偶正在使用的网页截图工具，强烈推荐
- [BeyondCompare](http://www.scootersoftware.com) - 在 Windows 下就开始用了 比对文件和文件夹杠杠好使，Merge 必备工具
- [CheatSheet](https://www.mediaatelier.com/CheatSheet/) - 能够显示当前程序的快捷键列表，默认的快捷键是长按 ⌘
- [Sequel Pro](http://www.sequelpro.com) - 免费好用的 Mysql 工具
- [LICEcap](http://www.cockos.com/licecap/) - 屏幕录制工具，支持导出 GIF 动画图片格式 轻量级、使用简单，录制过程中可以改变录屏范围
- [Manico](http://manico.im/) - 快捷启动和切换 APP 的工具，高效的第一步 AppStore 上收费，不过可以免费试用
- [WebStorm](http://www.jetbrains.com/webstorm/) - 功能超强的前端 IDE，不多介绍，谁用谁知道 PS：貌似俺插件装多了，用着卡卡的，风扇呼呼转...
- [Atom](https://atom.io) - 2015 年 7 月之前，在桌面环境下我最喜欢的编辑器是 Sublime。 但之后就是 Atom，俺也专门为它写了篇**_[使用纪要](https://github.com/nieweidong/learn-atom)_**
- [马克鳗](http://www.getmarkman.com/) - MarkMan，非常强大好用的标注、测量工具。 日常工作免费版就完全可以满足，**强烈推荐**
- [Wireshark](https://www.wireshark.org/) - 说实话，Mac 下木有 Fiddler 挺不习惯，不过在有更强大的替代品
- [SourceTree](https://www.sourcetreeapp.com/) - 一款好用的的 Git 客户端工具，重点是支持中文:)
- [focus booster](https://www.focusboosterapp.com/) - 因为比较在意时间管理，所以这软件是俺工作时间的必备之物
- [Mou](http://25.io/mou/) - 我曾使用过的 mk 编辑器。原本准备去掉这个推荐，但是我想让大家了解下这个有意思的事情：[《一年了，那个闻名遐迩的 Mou 你还记得吗？》](http://matrix.sspai.com/p/c7a3c9c0)

<h3 id="linux">Linux</h3>

- [oh-my-zsh](http://ohmyz.sh/) - **_终端党_** 必用的好工具，强烈推荐
- [tree](http://www.cnblogs.com/iadanac/p/3859481.html) - linux 以树状图逐级列出目录的内容
- [oneapm](http://www.oneapm.com/) - 强大的运维工具，提供多种监控客户端； 有采集、分析、展示等一套功能； PS：我这用了服务器监控(免费哦)
- [httpie](https://github.com/jkbrzt/httpie) - 一个 CLI 中的 HTTP 客户端 用法简单、易读

<h3 id="BrowserPlugins">Chrome 浏览器插件</h3>

> `Chrome` 应用商店必定是需要翻墙的哈。

以下插件都是俺多年积累淘出来的，数量不多，所以就不区分 `Github` 插件和非 `Github` 插件了。按照俺推荐的强度自上向下展示，且大多数插件就是偶工作和生活必备，希望能对大家有用。后续如有新发现好插件，偶也会及时更新哒。

- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) - `POST` 接口调试终结者，异常强大的接口调试工具。稍稍有一点学习成本，推荐之
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) - 就是个 `JSON` 格式的查看工具，可以很方便的展示数据，麻麻再也不用担心偶调试接口啦。PS：同类插件有不少，所以用的开心就行
- [二维码生成器](https://chrome.google.com/webstore/detail/%E4%BA%8C%E7%BB%B4%E7%A0%81qr%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8/pflgjjogbmmcmfhfcnlohagkablhbpmg) - RT。PS：这 FF 早已经自带生成二维码工具了，`Chrome` 还得装插件才行，任性...
- [WEB 前端助手(FeHelper)](https://chrome.google.com/webstore/detail/web%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8Bfehelper/pkgccpejnmalmdinmhkkfafefagiiiad) [百度 FE](https://www.baidufe.com/)出品，功能超全的 Chrome 插件。简单列一下其功能：QR 码生成器、字符串编解码工具、JSON 格式化查看器、前端编码规范检测、代码压缩工具、页面取色工具、统计并分析网页加载性能等等
- [Eye Dropper](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) 前端必备的颜色提取神器，操作简单容易上手
- [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn) 前端必备的尺子。计算页面元素间距、位置等信息的时候，你就知道它的好了，无脑上手，你值得拥有
- [FireShot](https://chrome.google.com/webstore/detail/capture-webpage-screensho/mcbpblocgmgfnpjjppndjkmgjaogfceg) 可以截取整个网页、部分页面，然后支持导出为各种格式。俺微博上发的网页全景图都是靠这个插件截取的
- [Infinity](https://chrome.google.com/webstore/detail/infinity-new-tab/dbfmnekepjoapopniengjbcpnbljalfg) - 好不好用有点见仁见智了，但是我个人比较喜欢。使用后会让你的 **新标签页** 耳目一新，有漂亮的背景和各种常用的功能，比如地图、天气、`Gmail`、`Chrome`商店等等。当然，在这个插件的设置中还可以设置壁纸、动画效果等等
- [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca) 同样也是 **新标签页** 的插件，但是不管是视觉上(高清大图)还是功能上，都比 [Infinity](https://chrome.google.com/webstore/detail/infinity-new-tab/dbfmnekepjoapopniengjbcpnbljalfg) 高大上不少，`Setting` 里面有不少设置和快捷键，都很好上手的。[Infinity](https://chrome.google.com/webstore/detail/infinity-new-tab/dbfmnekepjoapopniengjbcpnbljalfg)胜在中文和直观，[Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca)胜在视觉冲击。俺基本上这俩款看心情换着用，所以希望你也都能喜欢:)
- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc) - 在浏览器左侧展示 `Github` 项目的文件导航，使目录结构一目了然，而且我们国内 `Github` 的访问速度又不稳定，用这个工具也就很提效率了。对经常使用 `Github` 的同学强烈推荐
- [BuiltWith](https://chrome.google.com/webstore/detail/builtwith-technology-prof/dapjbgnjinbpoindlpdmhochffioedbn) / [wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg) / [Chrome Sniffer Plus](https://chrome.google.com/webstore/detail/chrome-sniffer-plus/fhhdlnnepfjhlhilgmeepgkhjmhhhjkh) - 几款超强的网站分析工具，可以给出网站非常多的技术栈信息。大到 `Web Servers`、服务端的 `Frameworks` 或 `JS` 框架，小到 `meta`、编码格式甚至 `Analytics`，非常推荐
- [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb/related) 非常非常有名的免费的过滤广告的插件。PS：广告屏蔽这个见仁见智，其实俺个人还是比较接受一些个性化推荐的广告
- [Wide Github](https://chrome.google.com/webstore/detail/wide-github/kaalofacklcidaampbokdplbklpeldpj/related) 无聊又实用的 `Github` 插件。无聊是因为这个插件就特么一个功能，**加宽**，能让 `Github` 页面变宽，每行展示更多的内容，尤其配合着[Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)，展示效果极佳。非常推荐 `Mac` 用户实用，因为屏幕比较不大，变宽后阅读感觉更好
- [DevTools Author](https://chrome.google.com/webstore/detail/devtools-author/egfhcfdfnajldliefpdoaojgahefjhhi) 纯装逼的插件，可以选择你的 `Chrome` 开发者工具的主题，且支持的主题超过 25 种，视觉装逼控必备。设置分大概三步，官网有文字说明，`youtube` 上的视频教程奉上(Customization With DevTools Author)[https://www.youtube.com/watch?v=AUZagMLMAJc]
- [GitPlug](https://chrome.google.com/webstore/detail/porter-plug/lngoojfoglemfpbeiomhgheccpdheilp) - 在 `Github` 项目页中嵌入有关的图表信息，直观的展示当前项目的 `Star Trend`，能方便看到当前这个开源项目的发起时间，火爆趋势；对比较知名的项目还有相关的 `News` 展示
- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - 在 `package.json` 或任意 `.js` 文件中，可以方便的对 `require()` 的 `package` 进去点击，跳转去对应的 `Github` 页面。PS：特么不太好表达，建议你去这个插件的概述页，里面有个十来秒的视频，看完就明白鸟

补充：

1. 翻墙代理的插件偶没使用，偶手机和电脑的翻墙都是配的 `Surge` 无脑搞定，不过翻墙代理插件推荐[Proxy SwitchySharp](https://chrome.google.com/webstore/detail/proxy-switchysharp/dpplabbmogkhghncfbfdeeokoefdjegm)，熊掌公司里大多用的都是它
2. 日常开发相关的插件就以上这些，还有几款如知乎的插件、购物插件等这类与开发效率不沾边的，俺就不这上头列了哈

<h3 id="git">Git</h3>

- [Git 教程-廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000) - 俺有看过不少 Git 的文章，确实这个系列是最通俗易懂的
- [GitAwards](http://github-awards.com/) - Git 工具，可以查看 Git 排名
- [Git 速查](https://github.com/flyhigher139/Git-Cheat-Sheet/blob/master/Git%20Cheat%20Sheet-Zh.md) - 分类清晰的速查表
- [Git 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html) - 入门`Github`的简明指南，木有高深内容:)
- [Git 学习资料整理](https://github.com/xirong/my-git)| |内容包括很多 Git 的相关资料，`star 1200+`
- [GitHub 漫游指南](https://github.com/phodal/github-roam) - 一篇还算不错的 Git 学习总结，就是乱了点... 我理解作者**_漫游_**的意思是漫无目的想到哪写到哪~ 看到作者为鸟达成 Git 连击的成就，也是蛮拼的:)

<h3 id="servers">服务端</h3>

如 `Ruby、Python、Perl` 等相似的服务端语言的学习资源。

_暂无_

<h3 id="backend">数据端</h3>

- [Mongoose](https://github.com/Automattic/mongoose) - 让 NodeJS 更容易操作 Mongodb 数据库。 附上一篇[Mongoose 学习参考文档](https://cnodejs.org/topic/504b4924e2b84515770103dd)

<h3 id="ux">设计/交互</h3>

> 作为负责最终效果呈现的前端工程师，多少得了解些 **设计和交互** 的，这也是为什么 fetool 会单独的存在这一章...当然话又说回来了，偶毕业的第一份工作是设计:)

- [站酷](http://www.zcool.com.cn/works/) - 里面好东西太多，俺当年真没少再上面淘素材
- [UI 中国](http://www.ui.cn/list.html) - 光听名字就知道有多高大上鸟:)

<h3 id="handbook">速查手册</h3>

> RT，这篇都是些文档或者 API，一般这类东西都在大家浏览器的书签内，偶这也列一下大前端常用的手册地址

- [HEAD](https://github.com/joshbuchea/HEAD) - 最全的 `<head>` 列表，真心佩服这种偏执的整理能力
- [百度 CDN 公共库](http://cdn.code.baidu.com/) - 基本常见的库都收录拉，搞 demo 的时候特方便
- [HTML 和 CSS 代码规范](http://codeguide.bootcss.com/) - 编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范
- [Linux 命令中文手册](http://linux.51yip.com) - 木有系统的好好学习 Linux，所以命令更不熟悉 真羡慕那些 CLI 玩的飞起的:)
- [Git 速查](https://github.com/flyhigher139/Git-Cheat-Sheet/blob/master/Git%20Cheat%20Sheet-Zh.md) - 分类清晰的速查表
- [jQueryAPI 1.11.3](http://jquery.cuishifeng.cn/) - ZeptoAPI 基本和 jQuery 一样，所以看一份就好
- [CSS3](http://www.php100.com/manual/css3_0/index.html) - CSS3 的在线手册
- [Express API](http://www.expressjs.com.cn/4x/api.html) - 中文手册:) 4.x 和 3.x 都有
- [CI 用户指南](http://codeigniter.org.cn/user_guide/index.html) - 一个轻量级的 PHP 框架用户指南 推荐指数低的原因是劳资 PHP 比较弱，囧
- [Yaf](http://www.laruence.com/manual/) - 鸟哥(惠新宸)所写的 PHP 框架 推荐指数低的原因同上...
