import * as Router from 'koa-router';
import userCtrl from './controller/user';
import auth from './middleware/auth';

const router = new Router();

router.prefix('/api/v0');

router
  .post('/user/login', userCtrl.login)
  .get('/user/:id', userCtrl.getUser)
  .get('/users', auth, userCtrl.getUsers);

export default router;
