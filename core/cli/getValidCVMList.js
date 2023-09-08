const config = require('../../utils/base/configLoader');
let cvmTypeList = require('../products/cvm')

let cvmInfoList = (config && config.planList && config.planList.length) ? config.planList : cvmTypeList

module.exports = {
    cvmInfoList
}