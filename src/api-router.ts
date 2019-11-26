import * as Router from 'koa-router';
import * as apis from './api';
import { IApi } from './api/type';
import config from './config';

interface IApis {
  [key: string]: IApi[];
}

const router = new Router();

const { prefix } = config;

Object.keys(apis).forEach((k) => {
  (apis as IApis)[k].forEach((api) => {
    const {
      action, method, path, policies, prefix: customPrefix,
    } = api;
    router[method]((customPrefix || prefix) + path, ...(policies || []), action);
  });
});

export default router;
