import * as Koa from 'koa';
import * as compress from 'koa-compress';
import * as json from 'koa-json';
import * as send from 'koa-send';
// import * as onerror from 'koa-onerror';
import * as bodyparser from 'koa-bodyparser';
import * as statics from 'koa-static';
import * as path from 'path';
import getLogger from './common/logger';
// apis
import test from './api/test';

// app
const app = new Koa();

// log4js
const logger = getLogger('app');

// // error handler
// onerror(app);

// middlewares
app.use(bodyparser({
  // multipart: true,
  enableTypes: ['json', 'form', 'text']
}));

// compress
app.use(compress({
  filter(contentType: any) {
    // html css / js / json
    return /text|javascript|json/i.test(contentType);
  },
  threshold: 1024, // 大于1kb开启压缩
  flush: require('zlib').Z_SYNC_FLUSH
}));

// json
app.use(json());

// static
app.use(statics(path.join(__dirname, './web')));

// // config render
// render(app, {
//   root: path.join(__dirname, './web'),
//   layout: false,
//   viewExt: 'html',
//   cache: false,
//   debug: true
// });

// logger
app.use(async (ctx, next) => {
  try {
    const start = + new Date();
    await next();
    const ms = + new Date() - start;
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

// api 若是api,则后端处理
app.use(test.routes());

// // / /admin /downloads 路由后端处理,其他前端路由处理
// app.use(require('koa-router')().get(/\/downloads\/\/*/, async (ctx) => {
//   // send file
//   // public为根目录,包含downloads目录
//   await send(ctx, ctx.path, { root: path.join(__dirname, './public') });
// }).get(/\/admin\/\/*/, async (ctx) => {
//   // admin
//   await ctx.render('/admin/index');
// }).get('*', async (ctx) => {
//   // 其他情况全部交由前端处理
//   await ctx.render('index');
// })
//   .middleware());

// module.exports = app;

export default app;
