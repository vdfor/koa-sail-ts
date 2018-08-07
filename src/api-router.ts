import * as Router from 'koa-router';
import config from './config';

const router = new Router();

const { routes, prefix } = config;

router.prefix(prefix);

Object.keys(routes).forEach(k => {
  const keys = Object.keys(routes[k]);
  if (keys.length > 0) {
    keys.forEach(c => {
      const { policies, action } = routes[k][c];
      (router as any)[c](k, ...policies, action);
    });
  }
});

export default router;
