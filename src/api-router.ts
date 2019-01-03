import * as Router from 'koa-router';
import apis from './api';
import config from './config';

const router = new Router();

const { prefix } = config;

router.prefix(prefix);

Object.keys(apis).forEach(k => {
  apis[k].forEach(api => {
    const { action, method, path, policies } = api;
    (router as any)[method](path, ...(policies || []), action);
  });
});

export default router;
