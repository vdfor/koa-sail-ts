const prod = {
  jwtSecret: 'test',
  log4js: {
    appenders: {
      sail: {
        type: 'file',
        filename: 'logs/log',
        maxLogSize: 20971520,
        backups: 15
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
  port: 8181,
  prefix: '/v0'
};

export default prod;
