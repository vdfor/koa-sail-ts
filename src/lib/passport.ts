import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { hashPasswd } from './utils';

// 序列化ctx.login()触发
passport.serializeUser((user, done) => {
  // console.log('serializeUser: ', user);
  done(null, user);
});
// // 反序列化（请求时，session中存在"passport":{"user":"1"}触发）
// passport.deserializeUser(async (id, done) => {
//   console.log('deserializeUser: ', id)
//   var user = {id: 1, username: 'admin', password: '123456'}
//   done(null, user)
// })
// 提交数据(策略)
passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'passwd'
  },
  (async (username, passwd, done) => {
    let dbUser = {
      id: 'testid',
      username: 'testname',
      passwd: 'testpasswd'
    };
    if (username === dbUser.username && hashPasswd(passwd) === dbUser.passwd) {
      const user = { id: dbUser.id, username: dbUser.username };
      done(null, user, { message: 'success' });
    } else {
      done(null, false, { message: 'incorrect' });
    }
  })));

export default passport;
