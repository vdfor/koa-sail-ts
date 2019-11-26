import { RouterContext } from 'koa-router';
import { IApi } from './type';

const testApi: IApi[] = [
  {
    method: 'get',
    path: '/test',
    prefix: '/api/v1',
    action: (ctx: RouterContext) => {
      ctx.body = {
        title: 'Hello, Test!',
      };
    },
  },
];

export default testApi;
