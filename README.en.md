# koa-sail-ts

[README中文版](README.md)

## About
The seed of [koa](https://github.com/koajs/koa)(2.x) with `typescript`

## Nodejs version required
8.9+

## Usage
### Quick start(development)
```bash
npm i
# use ts-node
npm start
```

### Test and lint
```bash
# first run `npm start`
npm run test
# lint
npm run lint:check
```

### Config
Refer to [config-document](docs/config-document.md)

### Build

```bash
# build by tsc
npm run build
# build by webpack
npm run build:webpack
```

### Production
```bash
# if not pm2, please run `npm i pm2 -g`
# first run `npm run build` or `npm run build:webpack`
npm run prod
```

### With [docker](https://www.docker.com)
```bash
# first run `npm run build` or `npm run build:webpack`
# build docker image
docker build -t <image-name>:<tag> .
```

## Feature
+ Use `typescript`
+ Construct restful api by [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
+ As static server，suport multi `spa`
+ Use [pm2](http://pm2.keymetrics.io) as `nodejs` process manager
+ Login and api authorization(powered by [passportjs](http://www.passportjs.org) and [jwt](https://github.com/auth0/node-jsonwebtoken))
+ Api params validator [validator-document](docs/validator-document.md)
+ [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) supported(powered by [ws](https://github.com/websockets/ws))
+ Logging(powered by [log4js](https://github.com/stritti/log4js))
+ Unit test(powered by [mocha](https://mochajs.org/))
+ `Docker` supported

## Future
+ Params validator for apis
+ Function module customization
+ ...

## Document related
There are docs may be you need when you developing web app with `koa-sail-ts`：

+ koa with mysql, refer to the part `koa with mysql` of [mysql入门](https://github.com/vdfor/docs/blob/master/MySQL%E5%85%A5%E9%97%A8.md)
+ koa with mongodb, refer to the part `koa with mongodb` of [mongodb入门](https://github.com/vdfor/docs/blob/master/MongoDB%E5%85%A5%E9%97%A8.md)
+ [用户登录与访问权限控制设计](https://github.com/vdfor/docs/blob/master/%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E4%B8%8E%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E8%AE%BE%E8%AE%A1.md)

## Thanks
The project's birth and development is inseparable from `koa`, `log4js`, `jsonwebtoken`, `typescript`, and so on. For detail, refer to the part `dependencies` and `devDependencies` of [package.json](package.json).

The project initially generated with [koa-generator](https://github.com/17koa/koa-generator) with `javascripts`, and switch to `typescript` after `0.4.0`. The project has undergone great change with the development of the project, but `koa-generator` is import for the birth of `koa-sail-ts`.

Construct restful api by `class` after `0.7.0`, I referred to [如何使用koa2+es6/7打造高质量Restful API](https://zhuanlan.zhihu.com/p/26216336)。If you prefer style like [express](https://github.com/expressjs/express), please refer to [0.6.x](https://github.com/vdfor/koa-sail-ts/tree/0.6.x) branch.
