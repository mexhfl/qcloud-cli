const config = require('../../utils/base/configLoader');

module.exports = {
  clientConfig: {
    credential: {
      secretId: config.credential.secretId,
      secretKey: config.credential.secretKey,
    },
    region: null,
    profile: {
      httpProfile: {
        endpoint: "cvm.tencentcloudapi.com",
      },
    },
  }
}