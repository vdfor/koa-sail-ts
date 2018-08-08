import { dev, prod } from './env';

const config: { [key: string]: string | any } = process.env.NODE_ENV === 'production' ? prod : dev;

export default config;
