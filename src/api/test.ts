import * as Koa from 'koa';
import { IApi } from './type';

const testApi: IApi[] = [
  {
    method: 'get',
    path: '/test',
    action: (ctx: Koa.Context) => {
      ctx.body = {
        title: 'Hello, Test!'
      };
    }
  }
];

export default testApi;
