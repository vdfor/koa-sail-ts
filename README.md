# koa-sail-ts

[README English Version](README.en.md)

## 关于
[koa](https://github.com/koajs/koa)(2.x)的种子工程, 采用`typescript`编写

项目最初由[koa-generator](https://github.com/17koa/koa-generator)生成，最初采用`js`编写，`0.4`之后切换到`typescript`。随着项目的发展，已与最初相差甚大。

## 快速开始
```bash
npm i
# use ts-node
npm start
```

## 构建

提供两种构建方式，一种使用`tsc`打包构建，一种使用[webpack](https://webpack.github.io/)打包。

```bash
# build by tsc
npm run build
# build by webpack
npm run build:webpack
```

## 用于生产环境
```bash
# first run `npm run build` or `npm run build:webpack`
npm run prod
```

## 关于配置文件
参考[config-document](docs/config-document.md)

## 搭配docker
```bash
# first run `npm run build` or `npm run build:webpack`
# build docker image
docker build -t <image-name>:<tag> .
```
