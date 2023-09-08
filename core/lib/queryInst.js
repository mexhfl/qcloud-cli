function queryInst(params, InstanceIds) {
  return new Promise((resolve, reject) => {
    let client = require('../lib/client')(params)
    
    let payload = {
      InstanceIds
    }
    
    client.DescribeInstances(payload).then(
      (data) => {
        resolve(data)
      },
      (err) => {
        reject(err)
      }
    );
  })
}

module.exports = queryInst