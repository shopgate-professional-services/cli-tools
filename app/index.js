const prog = require('caporal');
const package = require('../package');
const createComponent = require('./actions/createComponent');
const createRoute = require('./actions/createRoute');

function app() {
  prog
    .version(package.version)
    .description('Shopgate Professional Services CLI tools.')
    // Create component
    .command('create component', 'Creates bootstrapped component in nearest or newly created ./components folder')
    .action(createComponent)
    // Create route
    .command('create route', 'Create route components (Route, Page, etc.)')
    .action(createRoute);

  prog.parse(process.argv);
}

module.exports = app;
