const Koa = require('koa');
const compress = require('koa-compress');
const json = require('koa-json');
const render = require('koa-ejs');
const send = require('koa-send');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const statics = require('koa-static');
const path = require('path');

// app
const app = new Koa();

// log4js
const logger = require('./common/logger')('app');

// api
const test = require('./api/test');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  // multipart: true,
  enableTypes: ['json', 'form', 'text']
}));

// compress
app.use(compress({
  filter(contentType) {
    // html css / js / json
    return /text|javascript|json/i.test(contentType);
  },
  threshold: 1024, // 大于1kb开启压缩
  flush: require('zlib').Z_SYNC_FLUSH
}));

// json
app.use(json());

// static
app.use(statics(path.join(__dirname, './web_dist')));

// config render
render(app, {
  root: path.join(__dirname, './web_dist'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});

// logger
app.use(async (ctx, next) => {
  try {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

// api 若是api,则后端处理
app.use(test.routes(), test.allowedMethods());

// 非api/public下 路由交由前端处理,后端不处理路由 render html
app.use(require('koa-router')().get(/\/downloads\/*/, async (ctx) => {
  // send file
  // public为根目录,包含downloads目录
  await send(ctx, ctx.path, { root: path.join(__dirname, './public') });
}).get('*', async (ctx) => {
  // 其他情况全部交由前端处理
  await ctx.render('index');
}).middleware());

module.exports = app;
