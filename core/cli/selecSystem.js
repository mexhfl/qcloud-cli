let inquirer = require('inquirer');

async function createSelectSystem() {
  const {os} = await inquirer.prompt([
    {
      type: 'list',
      name: 'os',
      message: 'choose cvm operate system?',
      choices: [
        {
          name: 'centos7.9',
          value: 'img-l8og963d'
        },
        {
          name: 'win2016',
          value: 'img-9id7emv7'
        }
      ]
    }])
  return os
}

module.exports = createSelectSystem