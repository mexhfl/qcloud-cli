const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.HOME || process.env.USERPROFILE, 'qcloud-cli.conf.json');

const initConfig = () => {
    if (!fs.existsSync(configPath)) {
        const defaultConfig = {
            credential: {
                secretId: '',
                secretKey: ''
            },
            defaultInfo: {
                password: ''
            },
            planList: [
                {
                    //这里用于存储一些预设的服务器配置信息，可以从[生成 API Explorer 最佳实践脚本]里边复制配置信息，保存至payload即可，name为预设配置的名称
                    name: "hk-2c-2g",
                    payload: {}
                }
            ]
        };

        fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
        console.log('已经创建')
    }
}
module.exports = {
    initConfig
}