import * as Koa from 'koa';
import { signToken } from '../lib/utils';
import passport from '../lib/passport';

class UserController {
  static login(ctx: Koa.Context) {
    return (passport.authenticate(
      'local',
      async (err, user, { message }) => {
        console.log(message);
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
    ))(ctx, () => new Promise(() => console.log('login')));
  }

  static async getUser(ctx: Koa.Context) {
    const { id } = ctx.params;
    ctx.body = {
      id,
      name: 'John',
      age: Math.floor(Math.random() * 100)
    };
  }

}

export default UserController;
