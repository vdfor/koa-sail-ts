import { configure, getLogger } from 'log4js';
import config from '../config';

configure(config.log4js);

export default getLogger;
