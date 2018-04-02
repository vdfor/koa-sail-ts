import * as fs from 'fs';
import * as path from 'path';

const config = JSON.parse(fs.readFileSync(path.join(__dirname, `../config/${process.env.NODE_ENV}.json`)).toString());

const { port } = config;

const baseUrl = `http://localhost:${port}/api/v0`;

export default baseUrl;
