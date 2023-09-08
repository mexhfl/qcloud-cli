const createCVM = require("./createCVM");
const { initConfig } = require("../../utils/base/checkConfig")
const config = require('../../utils/base/configLoader');
const { program } = require('commander');

async function initFlow(args) {
  console.log('--------init-------')
  initConfig()
  program
    .name('qcloud-cli')
    .usage('[command]')
    .helpOption(false)
    .addHelpCommand(false)
    .command('create')
    .description('创建CVM云主机（退还请去控制台操作）')
    .action(async () => {
      if (!config.credential.secretId || !config.credential.secretKey || !config.defaultInfo.password) {
        console.log('请配置家目录下[qcloud-cli.conf.json]文件中的配置信息！')
        return
      }
      await createCVM()
    })
  program.parse(process.argv);


}

module.exports = initFlow