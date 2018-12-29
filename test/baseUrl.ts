// import * as fs from 'fs';
// import * as path from 'path';
import config from '../src/config'

// const config = JSON.parse(fs.readFileSync(path.join(__dirname, `../src/config/${process.env.NODE_ENV}.json`)).toString());

const { port } = config;

const baseUrl = `http://localhost:${port}/api/v0`;

export default baseUrl;
