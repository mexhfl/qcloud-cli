const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.HOME || process.env.USERPROFILE, 'qcloud-cli.conf.json');

let config = {};

if (fs.existsSync(configPath)) {
    const configFileContent = fs.readFileSync(configPath, 'utf8');
    config = JSON.parse(configFileContent);
}

module.exports = config;