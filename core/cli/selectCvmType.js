let inquirer = require('inquirer');
let { cvmInfoList } = require('./getValidCVMList')

let choices = cvmInfoList.map(item => {
  return {
    name: item.name,
    value: item.name
  }
})
async function createSelectType() {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'choose cvm type?',
      choices
    }])
  return type
}

module.exports = createSelectType