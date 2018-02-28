import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as compress from 'koa-compress';
import * as json from 'koa-json';
import * as send from 'koa-send';
import * as views from 'koa-views';
import * as bodyparser from 'koa-bodyparser';
import * as statics from 'koa-static';
import * as path from 'path';
import onerror = require('koa-onerror');
// get logger
import getLogger from './common/logger';
// apis
import users from './api/users';

// app
const app = new Koa();

// router
const router = new Router();

// log4js
const logger = getLogger('app');

// error handler
onerror(app);

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

// koa-views
app.use(views(path.join(__dirname, './web'), {
  map: {
    html: 'underscore'
  }
}));

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

// apis
app.use(users.routes());

// /admin /downloads => The back-end route to deal
app.use(router.get(/\/downloads\/\/*/, async (ctx) => {
  // send file
  // ./public/downloads
  await send(ctx, ctx.path, { root: path.join(__dirname, './public') });
}).get(/\/admin\/\/*/, async (ctx) => {
  // admin
  await ctx.render('/admin/index');
}).get('*', async (ctx) => {
  // The front-end route to deal
  await ctx.render('index');
})
  .middleware());

export default app;
