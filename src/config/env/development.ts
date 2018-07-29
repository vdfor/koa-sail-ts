const dev = {
  jwtSecret: 'test',
  log4js: {
    appenders: {
      sail: {
        type: 'console',
        filename: 'logs/log',
        maxLogSize: 20971520,
        backups: 10
      }
    },
    categories: {
      default: {
        appenders: [
          'sail'
        ],
        level: 'ALL'
      }
    }
  },
  db: {},
  resource: '../views',
  port: 3000
};

export default dev;
