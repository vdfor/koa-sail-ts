import * as Router from 'koa-router';
// import auth from '../middleware/auth';
import validator from '../middleware/validator';
import testCtrl from '../controller/test';
import userCtrl from '../controller/user';

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

export default routes;
