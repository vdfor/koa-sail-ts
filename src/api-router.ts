import * as Router from 'koa-router';
import config from './config';
import { validator } from './middleware';
import { testCtrl, userCtrl } from './controller';

const router = new Router();

const { prefix } = config;

interface AppRoutes {
  [key: string]: {
    [key: string]: {
      action: Router.IMiddleware;
      policies: Array<Router.IMiddleware>;
    }
  };
}

const routes: AppRoutes = {

  '/test': {
    get: {
      action: testCtrl.index,
      policies: []
    },
    post: {
      action: userCtrl.login,
      policies: []
    }
  },

  '/user': {
    get: {
      action: userCtrl.find,
      policies: [validator({ query: ['role'] })]
    }
  },
  '/user/:id': {
    get: {
      action: userCtrl.findOne,
      policies: []
    }
  }
  
};

router.prefix(prefix);

Object.keys(routes).forEach(k => {
  const keys = Object.keys(routes[k]);
  if (keys.length > 0) {
    keys.forEach(c => {
      const { policies, action } = routes[k][c];
      (router as any)[c](k, ...policies, action);
    });
  }
});

export default router;
