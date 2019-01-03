import * as Koa from 'koa';

interface IOptions {
  query?: string[];
  body?: string[];
}

const validator = (opts: IOptions) => {

  return async (ctx: Koa.Context, next: () => void) => {

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
