const dev = {
  jwtSecret: 'test',
  log4js: {
    appenders: {
      sail: {
        type: 'console',
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
