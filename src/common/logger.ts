import { configure, getLogger } from 'log4js';
import config from '../config/config';

configure(config.log4js);

const logger = (type: string) => getLogger(type);

export default logger;