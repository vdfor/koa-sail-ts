import * as Koa from 'koa';
import { decodeToken } from './utils';

const auth = async (ctx: Koa.Context, next: Function) => {
  try {
    // get token from ctx.request, decode token and compare with token in cache => get userid
    const uid = await decodeToken(ctx.request);
    if (uid) {
      (ctx.request as any).uid = uid;
      await next();
      return;
    }
  } catch (error) {
    ctx.throw(401, 'unauthorized');
  }
  ctx.throw(401, 'unauthorized');
};

export default auth;
