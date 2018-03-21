import * as Router from 'koa-router';
import { signToken } from '../lib/utils';
import passport from '../lib/passport';

const router = new Router();

router.prefix('/api/v0/login');

router.post('/', (ctx, next) => passport.authenticate(
  'local',
  async (err, user) => {
    if (err) {
      throw err;
    }
    let resData;
    if (user) {
      const { id } = user;
      let token;
      try {
        token = await signToken({ id }, '7d');
        // cache.set(`${id}-${token}`, 1, 1 * 60 * 60 * 24 * 7);
      } catch (error) {
        throw error;
      }
      resData = {
        user,
        access_token: token
      };
    }
    ctx.body = resData || {};
  }
)(ctx, next));

export default router;
