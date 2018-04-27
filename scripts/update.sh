#!/usr/bin/env bash
cd ../
npm run clean
rm -rf node_modules
npm remove -D jsonwebtoken koa koa-bodyparser koa-compress koa-json koa-passport koa-router log4js passport-local ws
npm remove -D @types/jsonwebtoken @types/koa @types/koa-bodyparser @types/koa-compress @types/koa-json @types/koa-passport @types/koa-router @types/mocha @types/node @types/passport-local @types/supertest @types/ws cross-env externals-dependencies mocha nodemon supertest ts-loader ts-node tsconfig-paths-webpack-plugin tslint typescript webpack webpack-cli
rm -rf package-lock.json
npm i -S jsonwebtoken koa koa-bodyparser koa-compress koa-json koa-passport koa-router log4js passport-local ws
npm i -D @types/jsonwebtoken @types/koa @types/koa-bodyparser @types/koa-compress @types/koa-json @types/koa-passport @types/koa-router @types/mocha @types/node @types/passport-local @types/supertest @types/ws cross-env externals-dependencies mocha nodemon supertest ts-loader ts-node tsconfig-paths-webpack-plugin tslint typescript webpack webpack-cli
echo $(date '+%H:%M:%S') 'Finished'
exit 0