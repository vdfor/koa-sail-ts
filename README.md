# koa-sail-ts

## Introduction
Seed of koa(2.x) with typescript

The project initially generated with [koa-generator](https://github.com/17koa/koa-generator)

## Start
```bash
npm i
# use ts-node
npm start
```

## Build
```bash
# build by tsc
npm run build
# build by webpack
npm run build:webpack
```

## Production
```bash
# first run `npm run build` or `npm run build:webpack`
npm run prod
```

## Config
Refer to [config docs]('./config/README.md')

## With docker
```bash
# first run `npm run build` or `npm run build:webpack`
# build docker image
docker build -t <image-name>:<tag> .
```
