module.exports = {
  development: {
    appenders: {
      sail: {
        type: 'console',
        filename: './logs/log',
        maxLogSize: 20480,
        backups: 4
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
        maxLogSize: 20480,
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