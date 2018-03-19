import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as Koa from 'koa';
import config from './config';

export const hashPasswd = (passwd: string) => crypto.createHash('sha256').update(passwd).digest('base64');

export const getToken = (req: Koa.Request) => new Promise((resolve, reject) => {
  if (req && req.body && req.body.access_token) {
    resolve(req.body.access_token);
  } else if (req && req.query && req.query.access_token) {
    resolve(req.query.access_token);
  } else if (req && req.headers.authorization) {
    resolve(req.headers.authorization.split(' ')[1]);
  } else {
    reject(new Error('No access_token found'));
  }
});

export const decodeToken = (token: string) => new Promise((resolve, reject) => {
  jwt.verify(
    token,
    config.jwtSecret,
    {
      ignoreNotBefore: false
    },
    (err, decoded: string | { [key: string]: string | any }) => {
      if (err) {
        reject(err);
      } else if (typeof decoded === 'string') {
        resolve(decoded);
      } else if (decoded.user) {
        resolve(decoded.user);
      } else {
        reject(new Error('No user payload in access_token'));
      }
    });
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
