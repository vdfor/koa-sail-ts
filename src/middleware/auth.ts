import * as Koa from 'koa';
import { decodeToken, getToken } from '../lib/utils';

interface User {
  id: string | number;
}

const auth = async (ctx: Koa.Context, next: Function) => {
  // get token from ctx.request
  const token = getToken(ctx.request);
  if (token) {
    try {
      // decode token and compare with token in cache => get userid
      const user = await decodeToken(token);
      const { id: uid } = user as User;
      (ctx.request as any).uid = uid;
      // const cacheToken = cache.get(`user-${uid}-token`);
      // if (!cacheToken) {
      //   ctx.throw(401, 'unauthorized');
      // }
    } catch (error) {
      ctx.throw(401, 'unauthorized');
    }
  } else {
    ctx.throw(401, 'unauthorized');
  }
  await next();
};

export default auth;
