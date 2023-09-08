const tencentcloud = require("tencentcloud-sdk-nodejs");
const {clientConfig} = require('../config/index')

function createClient(params) {
  const CvmClient = tencentcloud.cvm.v20170312.Client;
  let regionArr = params.Placement.Zone.split('-')
  clientConfig.region = `${regionArr[0]}-${regionArr[1]}`
  const client = new CvmClient(clientConfig);
  return client
}

module.exports = createClient