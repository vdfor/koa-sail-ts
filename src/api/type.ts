import * as Router from 'koa-router';

export interface IApi {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  action: Router.IMiddleware;
  policies?: Router.IMiddleware[];
  path: string;
}
