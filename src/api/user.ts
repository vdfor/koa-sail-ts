import * as Koa from 'koa';
import { validator } from '../middleware';
import { IApi } from './type';

const userApi: IApi[] = [
  { // find
    method: 'get',
    path: '/user',
    policies: [validator({ query: ['role'] })],
    action: (ctx: Koa.Context) => {
      const { role } = ctx.query;
      ctx.body = [
        { id: 1, name: 'John', role },
        { id: 2, name: 'Lucy', role }
      ];
    }
  },

  { // findOne
    method: 'get',
    path: '/user/:id',
    action: (ctx: Koa.Context) => {
      // console.log(ctx.router.stack.map((i: any) => i.regexp));
      const { id } = ctx.params;
      ctx.body = {
        id,
        name: 'John',
        age: Math.floor(Math.random() * 100)
      };
    }
  }
];

export default userApi;
