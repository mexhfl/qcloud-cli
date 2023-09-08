function queryPrice(params) {
  return new Promise((resolve, reject) => {
    let client = require('../lib/client')(params)
    client.InquiryPriceRunInstances(params).then(
      (data) => {
        resolve(data);
      },
      (err) => {
        reject(err);
      }
    )
  })
}

module.exports = queryPrice