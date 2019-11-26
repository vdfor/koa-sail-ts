import { RouterContext } from 'koa-router';
import { validator } from '../middleware';
import { IApi } from './type';

const userApi: IApi[] = [
  { // find
    method: 'get',
    path: '/user',
    policies: [validator({ query: ['role'] })],
    action: (ctx: RouterContext) => {
      const { role } = ctx.query;
      ctx.body = [
        { id: 1, name: 'John', role },
        { id: 2, name: 'Lucy', role },
      ];
    },
  },

  { // findOne
    method: 'get',
    path: '/user/:id',
    action: (ctx: RouterContext) => {
      // console.log(ctx.router.stack.map((i: any) => i.regexp));
      const { id } = ctx.params;
      ctx.body = {
        id,
        name: 'John',
        age: Math.floor(Math.random() * 100),
      };
    },
  },
];

export default userApi;
