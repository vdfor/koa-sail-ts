import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as Koa from 'koa';
import config from './config';

export const hashPasswd = (passwd: string) => crypto.createHash('sha256').update(passwd).digest('base64');

export const getToken = (req: Koa.Request) => {
  if (req && req.body && req.body.access_token) {
    return req.body.access_token;
  } else if (req && req.query && req.query.access_token) {
    return req.query.access_token;
  } else if (req && req.headers.authorization) {
    return req.headers.authorization.split(' ')[1];
  } else { // Not access_token found
    return null;
  }
};

export const decodeToken = (token: string) => new Promise((resolve, reject) => {
  // decode token
  try {
    const decoded: any = jwt.verify(token, config.jwtSecret, { ignoreNotBefore: false });
    if (typeof decoded === 'object' && decoded.user && decoded.user.id) {
      // const cacheToken = cache.get(`user-${decoded.user.id}-${token}`);
      // return cacheToken ? decoded.user.id : null;
      return resolve(decoded.user);
    }
    reject(new Error('No uid payload in access_token'));
  } catch (error) {
    reject(error);
  }
});

export const signToken = (user: { [key: string]: string | any }, expiresIn: string | number) => new Promise((resolve, reject) => {
  jwt.sign({ user }, config.jwtSecret, { expiresIn }, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

// normalize a port into a number, string, or false
export const normalizePort = (val: string | number) => {
  const portNum = typeof val === 'number' ? val : parseInt(val, 10);
  if (Number.isNaN(portNum)) {
    // named pipe
    return val;
  }
  if (portNum >= 0) {
    // port number
    return portNum;
  }
  return false;
};
