# koa-sail-ts [![Build Status](https://travis-ci.org/vdfor/koa-sail-ts.svg?branch=master)](https://travis-ci.org/vdfor/koa-sail-ts)

[README English Version](README.en.md)

## 关于

基于[koa](https://github.com/koajs/koa)(2.x)框架的种子工程, 采用`typescript`编写

## 使用方法
### 快速开始(开发环境)

```bash
yarn
# use ts-node
yarn start
```

### 测试与检查

```bash
# 单元测试 first run `yarn start`
yarn test
# 代码规范检查
yarn run eslint:check
# 代码规范修复
yarn run eslint:fix
```

### 配置

参考[config-document](docs/config-document.md)

### 构建

```bash
yarn run build
```

### 用于生产环境

```bash
# if not pm2, please run `yarn global add pm2`
# first run `yarn run build`
yarn run prod
```

### 搭配[docker](https://www.docker.com)

```bash
# 生成docker镜像
docker build -t <image-name>:<tag> .
```

### For CI command

```bash
# this is an example
#!/bin/bash
echo 'start...'
docker stop koa-sail-ts
docker rm koa-sail-ts
docker rmi koa-sail-ts:0.1.0
docker build -t koa-sail-ts:0.1.0 .
docker run --name koa-sail-ts -p 8183:8181 -v /home/docker/koa-sail-ts/logs:/usr/src/app/logs -d koa-sail-ts:0.1.0
echo 'finished'
exit 0
```

## 功能与特点

+ 采用`typescript`
+ 采用[pm2](http://pm2.keymetrics.io)作为`nodejs`进程管理工具
+ 登录与api鉴权(powered by [passportjs](http://www.passportjs.org) and [jwt](https://github.com/auth0/node-jsonwebtoken))
+ 提供api参数校验中间件 [validator-document](docs/validator-document.md)
+ [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)支持(powered by [ws](https://github.com/websockets/ws))
+ 日志记录(powered by [log4js](https://github.com/stritti/log4js))
+ 单元测试(powered by [mocha](https://mochajs.org/))
+ 支持`docker`部署

## 致谢

本项目的诞生与发展离不开`koa`、`log4js`、`jsonwebtoken`、`typescript`等项目,具体见[package.json](package.json)的`dependencies`与`devDependencies`。

本项目最初由[koa-generator](https://github.com/17koa/koa-generator)生成，最初采用`js`编写，`0.4.0`之后切换到`typescript`。虽然随着项目的发展，已与最初相差甚大，但`koa-generator`对于本项目的起步十分重要。

如果你希望采用`class`类设计api，请参考本项目的[0.8.x](https://github.com/vdfor/koa-sail-ts/releases/tag/v0.8.1)【其实现参考了[如何使用koa2+es6/7打造高质量Restful API](https://zhuanlan.zhihu.com/p/26216336)】。

如果你更喜欢[express](https://github.com/expressjs/express)风格的api，请参考本项目的[0.6.x](https://github.com/vdfor/koa-sail-ts/releases/tag/v0.6.3)

