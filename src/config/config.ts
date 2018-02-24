import * as fs from 'fs';
import * as path from 'path';

const config = JSON.parse(fs.readFileSync(path.join(__dirname, `./${process.env.NODE_ENV}.json`)).toString());

export default config;
