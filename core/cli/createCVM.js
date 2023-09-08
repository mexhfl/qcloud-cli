let selectCvmType = require('../cli/selectCvmType')
let selectSystem = require('../cli/selecSystem')
let { cvmInfoList } = require('./getValidCVMList')
let createCvm = require('../lib/create')
const queryInst = require("../lib/queryInst");
const { sleep } = require("../../utils/common");
const queryPrice = require("../lib/queryPrice");
const cmdConfirm = require("./cmdConfirm");
const config = require('../../utils/base/configLoader');

async function createCVM() {
  let type = await selectCvmType()
  console.log('select type:', type)
  let os = await selectSystem()
  console.log('select os:', os)
  let param = cvmInfoList.find(item => item.name === type).payload
  param.LoginSettings = { Password: config.defaultInfo.password }
  param.ImageId = os

  let priceInfo = await queryPrice(param)
  console.log('-----query price success----')
  console.log(priceInfo)

  let confirmResult = await cmdConfirm()
  if (!confirmResult) {
    console.log('--------exit-------')
    return
  }
  let cvmInfo = await createCvm(param)
  console.log('-----CVM create success!----')
  console.log(cvmInfo)
  await getInstDetail(param, cvmInfo)
  console.log('--------exit-------')
}

async function getInstDetail(param, cvmInfo) {
  console.log('query public ip ...')
  await sleep(5000)
  let cvmDetail = await queryInst(param, cvmInfo.InstanceIdSet)
  let cvmDetail0 = cvmDetail.InstanceSet[0]
  if (!cvmDetail0.PublicIpAddresses || !cvmDetail0.PublicIpAddresses.length) {
    await getInstDetail(param, cvmInfo)
  } else {
    console.log(cvmDetail0)
    console.log(cvmDetail0.PublicIpAddresses)
  }
}

module.exports = createCVM