const log4js = require('log4js')

log4js.configure(require('./config/log4js')[process.env.NODE_ENV])
const logger = (type) => log4js.getLogger(type)

module.exports = logger
