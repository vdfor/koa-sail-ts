# Validator Docs

## Usage
```ts
// router.ts
import * as Router from 'koa-router';
import testCtrl from './controller/test';
import validator from './middleware/validator';

const router = new Router();

router.prefix('/api/v0');

router
  .post('/test', validator({ body: ['name', 'type'] }), testCtrl.add)
  .get('/test', validator({ query: ['type'] }), testCtrl.get);

export default router;
```

## Options

```ts
interface Options {
  query?: Array<string>;
  body?: Array<string>;
}
```

+ `query` -- check `ctx.query.params`
+ `body` -- check `ctx.request.body`
