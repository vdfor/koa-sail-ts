const router = require('koa-router')();

router.prefix('/api/v0/test');

router.get('/', async (ctx) => {
  ctx.body = {
    result: 'test'
  };
});

module.exports = router;
