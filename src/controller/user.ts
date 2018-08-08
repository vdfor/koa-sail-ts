import * as Koa from 'koa';
import { passport, tools } from '../utils';

const { signToken } = tools;

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

  static async findOne(ctx: Koa.Context) {
    const { id } = ctx.params;
    ctx.body = {
      id,
      name: 'John',
      age: Math.floor(Math.random() * 100)
    };
  }

  static async find(ctx: Koa.Context) {
    // console.log((ctx.request as any).uid);
    const { role } = ctx.query;
    ctx.body = [
      { id: 1, name: 'John', role },
      { id: 2, name: 'Lucy', role }
    ];
  }

}

export default UserController;
