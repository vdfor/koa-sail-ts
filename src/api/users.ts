import * as Router from 'koa-router';
import * as fs from 'fs';

const router = new Router();

router.prefix('/api/v0/users');

router.get('/', async (ctx) => {
  ctx.body = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Lucy' }
  ];
});

export default router;
