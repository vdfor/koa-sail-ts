module.exports = {
  development: {
    appenders: {
      sail: {
        type: 'console'
      }
    },
    categories: {
      default: {
        appenders: [
          'sail'
        ],
        level: 'all'
      }
    }
  },
  production: {
    appenders: {
      sail: {
        type: 'file',
        filename: './logs/log',
        maxLogSize: 1024 * 1024 * 20, // 20m
        backups: 4
      }
    },
    categories: {
      default: {
        appenders: [
          'sail'
        ],
        level: 'error'
      }
    }
  }
}