import * as Koa from 'koa';

class TestController {

  static async index(ctx: Koa.Context) {
    ctx.body = {
      title: 'Hello, Test!'
    };
  }

}

export default TestController;
