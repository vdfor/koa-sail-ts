# koa-sail-ts

[![Build Status](https://travis-ci.org/vdfor/koa-sail-ts.svg?branch=master)](https://travis-ci.org/vdfor/koa-sail-ts)

[README English Version](README.en.md)

## 关于
基于[koa](https://github.com/koajs/koa)(2.x)框架的种子工程, 采用`typescript`编写

## Nodejs版本要求
8.9+

## 使用方法
### 快速开始(开发环境)
```bash
npm i
# use ts-node
npm start
```

### 测试与检查
```bash
# 单元测试 first run `npm start`
npm run test
# 代码规范检查
npm run lint:check
```

### 配置
参考[config-document](docs/config-document.md)

### 构建

提供两种构建方式：1）使用`tsc`打包构建；2）使用[webpack](https://webpack.github.io)打包构建

```bash
# build by tsc
npm run build
# build by webpack
npm run build:webpack
```

### 用于生产环境
```bash
# if not pm2, please run `npm i pm2 -g`
# first run `npm run build` or `npm run build:webpack`
npm run prod
```

### 搭配[docker](https://www.docker.com)
```bash
# first run `npm run build` or `npm run build:webpack`
# 生成docker镜像
docker build -t <image-name>:<tag> .
```

## 功能与特点
+ 采用`typescript`
+ 基于[class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)类构建restful api
+ 采用[pm2](http://pm2.keymetrics.io)作为`nodejs`进程管理工具
+ 登录与api鉴权(powered by [passportjs](http://www.passportjs.org) and [jwt](https://github.com/auth0/node-jsonwebtoken))
+ 提供api参数校验中间件 [validator-document](docs/validator-document.md)
+ [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)支持(powered by [ws](https://github.com/websockets/ws))
+ 日志记录(powered by [log4js](https://github.com/stritti/log4js))
+ 单元测试(powered by [mocha](https://mochajs.org/))
+ 支持`docker`部署

## 未来计划
+ 功能模块化定制
+ ...

## 相关文档
使用`koa-sail-ts`构建应用时，以下文档可能是你需要的：

+ 支持静态资源，请参考[koa下多spa项目部署](https://github.com/vdfor/docs/blob/master/node.js/koa%E4%B8%8B%E5%A4%9Aspa%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.md)
+ 搭配mysql使用，请参考[mysql入门](https://github.com/vdfor/docs/blob/master/MySQL%E5%85%A5%E9%97%A8.md)的`koa with mysql`部分
+ 搭配mongodb使用，请参考[mongodb入门](https://github.com/vdfor/docs/blob/master/MongoDB%E5%85%A5%E9%97%A8.md)的`koa with mongodb`部分
+ [用户登录与访问权限控制设计](https://github.com/vdfor/docs/blob/master/%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E4%B8%8E%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E8%AE%BE%E8%AE%A1.md)

## 致谢
本项目的诞生与发展离不开`koa`、`log4js`、`jsonwebtoken`、`typescript`等项目,具体见[package.json](package.json)的`dependencies`与`devDependencies`。

本项目最初由[koa-generator](https://github.com/17koa/koa-generator)生成，最初采用`js`编写，`0.4.0`之后切换到`typescript`。虽然随着项目的发展，已与最初相差甚大，但`koa-generator`对于本项目的起步十分重要。

`0.7.0`版本采用`class`类重新设计了api，参考了[如何使用koa2+es6/7打造高质量Restful API](https://zhuanlan.zhihu.com/p/26216336)。如果你更喜欢[express](https://github.com/expressjs/express)风格的api，请参考本项目的[0.6.x](https://github.com/vdfor/koa-sail-ts/tree/0.6.x)分支

