import * as Koa from 'koa';
import { IApi } from './type';

const testApi: IApi[] = [
  {
    method: 'get',
    path: '/test',
    prefix: '/api/v1',
    action: (ctx: Koa.Context) => {
      ctx.body = {
        title: 'Hello, Test!'
      };
    }
  }
];

export default testApi;
