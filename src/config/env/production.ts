const prod = {
  jwtSecret: 'test',
  log4js: {
    appenders: {
      sail: {
        type: 'datefile', // console/file/datefile
        filename: 'logs/log',
        alwaysIncludePattern: true,
        pattern: '-yyyyMMdd.log',
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
  port: 8181
};

export default prod;
