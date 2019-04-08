const prog = require('caporal');
const packageInfo = require('../package');
const { before } = require('./hooks');
const createComponent = require('./actions/createComponent');
const createRoute = require('./actions/createRoute');
const createLanguage = require('./actions/createLanguage');
const createSubscription = require('./actions/createSubscriptions');
const createReduxEntity = require('./actions/createReduxEntity');

/**
 * Main app.
 */
function app() {
  prog
    .version(packageInfo.version)
    .description('Shopgate Professional Services CLI tools.')
    // Create component
    .command('create component', 'Creates bootstrapped component in nearest or newly created ./components folder')
    .action((...args) => {
      before();
      createComponent(...args);
    })
    // Create route
    .command('create route', 'Create route components (Route, Page, etc.)')
    .action((...args) => {
      before();
      createRoute(...args);
    })
    // Create language
    .command('create language', 'Adds new language translations')
    .alias('create locale')
    .action((...args) => {
      before();
      createLanguage(...args);
    })
    // Create subscription
    .command('create subscriptions', 'Adds new subscriptions file if there is none yet.')
    .alias('create subscription')
    .action((...args) => {
      before();
      createSubscription(...args);
    })
    // Create redux entity
    .command('create redux entity', 'Adds new redux entity: selectors, actions, reducer')
    .alias('create redux')
    .action((...args) => {
      before();
      createReduxEntity(...args);
    });

  prog.parse(process.argv);
}

module.exports = app;
