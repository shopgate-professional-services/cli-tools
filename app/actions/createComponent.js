const fs = require('fs');
const path = require('path');
const { prompt } = require('enquirer');

async function createComponent() {
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
      required: true,
    },
    {
    type: 'select',
    name: 'type',
    message: 'Class of function?',
    choices: ['class', 'function']
    },
  ]);

  const fileName = response.type === 'class' ? 'classComponent' : 'functionalComponent';
  const componentContent = fs.readFileSync(path.resolve(`${path.dirname(require.main.filename)}/templates/component/${fileName}.js`)).toString();

  if (!fs.existsSync(path.resolve('./components'))) {
    fs.mkdirSync('./components')
  }

  const resultComponent = componentContent.replace(/Name/g, response.name);

  fs.writeFileSync(`./components/${response.name}.jsx`, resultComponent);
}

module.exports = createComponent;
