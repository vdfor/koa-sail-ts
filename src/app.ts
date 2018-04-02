import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as compress from 'koa-compress';
import * as json from 'koa-json';
import * as bodyparser from 'koa-bodyparser';
import logging from './middleware/logging';
// apis
import apis from './router';

// app
const app = new Koa();

// router
const router = new Router();

// logging(include handle error)
app.use(logging());

// bodyparser
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

// apis
app.use(apis.routes());

export default app;
