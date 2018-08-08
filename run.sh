#!/bin/bash
echo 'start...'
git fetch --all  
git reset --hard origin/master
rm -rf node_modules
npm i yarn -g # 安装yarn
yarn install
yarn run build
docker stop koa-sail-ts
docker rm koa-sail-ts
docker rmi koa-sail-ts:0.8
docker build -t koa-sail-ts:0.8 .
docker run --name koa-sail-ts -p 8183:8181 -v /home/docker/koa-sail-ts/logs:/usr/src/app/logs -d koa-sail-ts:0.8
echo 'finished'
exit 0