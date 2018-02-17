const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, `./${process.env.NODE_ENV}.json`)));

module.exports = config;
