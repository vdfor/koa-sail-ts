import * as cors from '@koa/cors';
import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import * as json from 'koa-json';
import * as statics from 'koa-static';
import * as path from 'path';
// apis
import apis from './api-router';
import config from './config';
import { logging } from './middleware';

// app
const app = new Koa();

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

// cors
app.use(cors());

// json
app.use(json());

// static
app.use(statics(path.join(__dirname, config.resource)));

// apis
app.use(apis.routes());

export default app;
