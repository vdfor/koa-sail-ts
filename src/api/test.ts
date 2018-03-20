import * as Router from 'koa-router';
import * as fs from 'fs';
import auth from '../lib/auth';

const router = new Router();

router.prefix('/api/v0/test');

router.get('/', auth, async (ctx) => {
  console.log((ctx.request as any).uid);
  ctx.body = {
    title: 'Welcome to react-sail'
  };
});

export default router;
