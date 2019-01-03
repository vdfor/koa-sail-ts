import * as Koa from 'koa';
import { logger as getLogger } from '../utils';

const logger = getLogger('app');

const logging = () => async (ctx: Koa.Context, next: () => void) => {
  try {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  } catch (error) {
    logger.error(error);
    // ctx.app.emit('error', error);
    ctx.body = { error: error.message || 'server error' };
    ctx.status = error.status || 500;
    // throw error;
  }
};

export default logging;
