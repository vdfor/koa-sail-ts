# pollux [![Build Status](https://travis-ci.org/vdfor/koa-sail-ts.svg?branch=master)](https://travis-ci.org/vdfor/koa-sail-ts)

[README中文版](README.md)

## About
The seed of [koa](https://github.com/koajs/koa)(2.x) with `typescript`

## Nodejs version required
8.9+

## Usage
### Quick start(development)
```bash
yarn
# use ts-node
yarn start
```

### Test and lint
```bash
# first run `yarn start`
yarn test
# lint:check
yarn run eslint:check
# lint:fix
yarn run eslint:fix
```

### Config
Refer to [config-document](docs/config-document.md)

### Build

```bash
# build by tsc
yarn run build
# build by webpack
yarn run build:webpack
```

### Production
```bash
# if not pm2, please run `yarn global add pm2`
# first run `yarn run build` or `yarn run build:webpack`
yarn run prod
```

### With [docker](https://www.docker.com)
```bash
# first run `yarn run build` or `yarn run build:webpack`
# build docker image
docker build -t <image-name>:<tag> .
```

### For CI command
```bash
# this is an example
#!/bin/bash
echo 'start...'
rm -rf node_modules
yarn install
yarn run build
docker stop koa-sail-ts
docker rm koa-sail-ts
docker rmi koa-sail-ts:0.8
docker build -t koa-sail-ts:0.8 .
docker run --name koa-sail-ts -p 8183:8181 -v /home/docker/koa-sail-ts/logs:/usr/src/app/logs -d koa-sail-ts:0.8
echo 'finished'
exit 0
```

## Feature
+ Use `typescript`
+ Use [pm2](http://pm2.keymetrics.io) as `nodejs` process manager
+ Login and api authorization(powered by [passportjs](http://www.passportjs.org) and [jwt](https://github.com/auth0/node-jsonwebtoken))
+ Api params validator [validator-document](docs/validator-document.md)
+ [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) supported(powered by [ws](https://github.com/websockets/ws))
+ Logging(powered by [log4js](https://github.com/stritti/log4js))
+ Unit test(powered by [mocha](https://mochajs.org/))
+ `Docker` supported

## Plan
+ Function module customization
+ ...

## Document related
There are docs may be you need when you developing web app with `koa-sail-ts`：

+ koa as static-server, refer to [koa下多spa项目部署](https://github.com/vdfor/docs/blob/master/node.js/koa%E4%B8%8B%E5%A4%9Aspa%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.md)
+ koa with mysql, refer to the part `koa with mysql` of [mysql入门](https://github.com/vdfor/docs/blob/master/MySQL%E5%85%A5%E9%97%A8.md)
+ koa with mongodb, refer to the part `koa with mongodb` of [mongodb入门](https://github.com/vdfor/docs/blob/master/MongoDB%E5%85%A5%E9%97%A8.md)

## Thanks
The project's birth and development is inseparable from `koa`, `log4js`, `jsonwebtoken`, `typescript`, and so on. For detail, refer to the part `dependencies` and `devDependencies` of [package.json](package.json).

The project initially generated with [koa-generator](https://github.com/17koa/koa-generator) with `javascript`, and switch to `typescript` since `0.4.0`. The project has undergone great change with the development of the project, but `koa-generator` is import for the birth of `koa-sail-ts`.

If you want to construct restful api by `class`, please refer to [0.8.x](https://github.com/vdfor/koa-sail-ts/tree/0.8.x) branch [The implementation refers to [如何使用koa2+es6/7打造高质量Restful API](https://zhuanlan.zhihu.com/p/26216336)]. 

If you prefer style like [express](https://github.com/expressjs/express), please refer to [0.6.x](https://github.com/vdfor/koa-sail-ts/tree/0.6.x) branch.
