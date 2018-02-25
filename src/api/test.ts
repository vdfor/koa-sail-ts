import * as Router from 'koa-router';
import * as fs from 'fs';

const router = new Router();

router.prefix('/api/v0/test');

router.get('/', async (ctx) => {
  ctx.body = {
    result: 'test'
  };
});

export default router;
