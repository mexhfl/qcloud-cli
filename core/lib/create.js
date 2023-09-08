// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
function createCVM(params) {
  return new Promise((resolve, reject)=>{
    let client = require('../lib/client')(params)
    client.RunInstances(params).then(
      (data) => {
        resolve(data)
      },
      (err) => {
        reject(err)
      }
    );
  })
}

module.exports = createCVM