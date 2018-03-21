import * as Router from 'koa-router';
import userCtrl from './controllers/user';
import auth from './lib/auth';

const router = new Router();

router.prefix('/api/v1');

router
  .post('/user/login', userCtrl.login)
  .get('/user/:id', userCtrl.getUser)
  .get('/users', auth, userCtrl.getUsers);

export default router;
