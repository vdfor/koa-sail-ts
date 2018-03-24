import * as Koa from 'koa';

class UsersController {

  static async index(ctx: Koa.Context) {
    // console.log((ctx.request as any).uid);
    const { type } = ctx.query;
    ctx.body = [
      { id: 1, name: 'John', type },
      { id: 2, name: 'Lucy', type }
    ];
  }

}

export default UsersController;
