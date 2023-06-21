const fs = require('fs');
const path = require('path');

const basePath = path.resolve(__dirname, '../');
const fileData = fs.readFileSync(path.resolve(basePath, '_redirects'), 'utf8');

fs.writeFileSync(path.resolve(basePath, './dist', '_redirects'), fileData, 'utf8');