import Router from 'koa-router';

export interface IApi {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  prefix?: string;
  action: Router.IMiddleware;
  policies?: Router.IMiddleware[];
  path: string;
}
