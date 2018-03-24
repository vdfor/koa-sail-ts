import * as Koa from 'koa';

interface Options {
  query?: Array<string>;
  body?: Array<string>;
}

const validator = (opts: Options) => {

  return async (ctx: Koa.Context, next: Function) => {

    if (opts.query) {
      opts.query.forEach(ele => {
        if (!ctx.query[ele]) {
          ctx.throw(`params errors:「${ele} 」is necessary`);
        }
      });
    }

    if (opts.body) {
      opts.body.forEach(ele => {
        if (!ctx.request.body[ele]) {
          ctx.throw(`params errors:「${ele} 」is necessary`);
        }
      });
    }

    await next();
  };
};

export default validator;
