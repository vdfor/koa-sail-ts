import * as Router from 'koa-router';

const router = new Router();

router.prefix('/api/v0/user');

router.get('/:id', async (ctx) => {
  const { id } = ctx.params;
  ctx.body = {
    id,
    name: 'John',
    age: Math.floor(Math.random() * 100)
  };
});

export default router;
