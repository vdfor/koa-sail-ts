import * as Router from 'koa-router';
import * as fs from 'fs';

const router = new Router();

router.prefix('/api/v0/test');

router.get('/', async (ctx) => {
  let a;
  try {
    a = fs.createReadStream('not exist');
  } catch (error) {
    console.log(111);
    throw error;
  }
  ctx.body = a;
  // ctx.body = {
  //   result: 'test'
  // };
});

export default router;
