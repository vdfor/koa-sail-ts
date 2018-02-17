const log4js = require('log4js');

log4js.configure(require('../config/config').log4js);

const logger = type => log4js.getLogger(type);

module.exports = logger;
