const prog = require('caporal');
const package = require('../package');
const createComponent = require('./actions/createComponent');

function app() {
  prog
    .version(package.version)
    .description('Shopgate Professional Services CLI tools.')

  prog
    .command('create component', 'Creates bootstrapped component in nearest or newly created ./components folder')
    .action(createComponent)

  prog.parse(process.argv);
}

module.exports = app;
