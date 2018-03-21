import * as Router from 'koa-router';
import auth from '../lib/auth';

const router = new Router();

router.prefix('/api/v0/users');

router.get('/', auth, async (ctx) => {
  console.log((ctx.request as any).uid);
  ctx.body = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Lucy' }
  ];
});

export default router;
