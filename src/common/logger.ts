import { configure, getLogger } from 'log4js';
import config from './config';

configure(config.log4js);

// const getLogger = (type: string) => getLogger(type);

export default getLogger;
