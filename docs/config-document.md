# Config Docs

## Above
+ development.json -- config for development environment
+ production.json -- config for production environment

## Detail/Example
```js
{
  // json web token secret, visit https://github.com/auth0/node-jsonwebtoken to know more
  jwtSecret: 'test',
  // config for log4js, visit https://github.com/log4js-node/log4js-node to know more
  log4js: {
    appenders: {
      sail: {
        type: 'file',
        filename: './logs/log', // docker部署时，此项请勿更改，除非你了解docker
        maxLogSize: 20971520, // 1024 * 1024 * 20 -- 20M
        backups: 10
      }
    },
    categories: {
      default: {
        appenders: [
          'sail' // not modify
        ],
        level: 'ERROR' // ALL/TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF
      }
    }
  },
  // config for database
  db: {},
  // config for resources -- base: src/
  resource: '../views',
  // config for port
  port: 3000
}
```
