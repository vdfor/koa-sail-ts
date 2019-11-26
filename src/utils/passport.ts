import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getEncryptedPasswd } from './tools';

// submit data(strategy)
passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  (async (username, passwd, done) => {
    // get user info from db
    const dbUser = {
      id: 'testid',
      username: 'testname',
      passwd: 'testpasswd',
    };
    if (username === dbUser.username && getEncryptedPasswd(passwd) === dbUser.passwd) {
      const user = { id: dbUser.id, username: dbUser.username };
      done(null, user, { message: 'success' });
      return;
    }
    done(null, false, { message: 'incorrect' });
  }),
));

export default passport;
