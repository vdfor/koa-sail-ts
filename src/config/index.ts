import dev from './env/development';
import prod from './env/production';

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default config;
