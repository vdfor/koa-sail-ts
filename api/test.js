const router = require('koa-router')()

router.prefix('/api/v0/test')

router.get('/', (ctx) => {
  ctx.body = {
    test: 'test'
  }
})

router.get('/data', (ctx) => {
  ctx.body = {
    data: ['test1', 'test2']
  }
})

module.exports = router
