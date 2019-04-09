const prog = require('caporal');
const packageInfo = require('../package');
const { before } = require('./hooks');
const createComponent = require('./actions/createComponent');
const createRoute = require('./actions/createRoute');
const createLanguage = require('./actions/createLanguage');
const createSubscription = require('./actions/createSubscriptions');
const createReduxEntity = require('./actions/createReduxEntity');
const createStep = require('./actions/createStep');
const createPipeline = require('./actions/createPipeline');
const createPortal = require('./actions/createPortal');
/**
 * Main app.
 */
function app() {
  prog
    .version(packageInfo.version)
    .description('Shopgate Professional Services CLI tools.')
    // Create component
    .command('add component', 'Creates bootstrapped component in nearest or newly created ./components folder')
    .action((...args) => {
      before();
      createComponent(...args);
    })
    // Create route
    .command('add route', 'Create route components (Route, Page, etc.)')
    .action((...args) => {
      before();
      createRoute(...args);
    })
    // Create language
    .command('add language', 'Adds new language translations')
    .alias('add locale')
    .action((...args) => {
      before();
      createLanguage(...args);
    })
    // Create subscription
    .command('add subscriptions', 'Adds new subscriptions file if there is none yet.')
    .alias('add subscription')
    .action((...args) => {
      before();
      createSubscription(...args);
    })
    // Create redux entity
    .command('add redux entity', 'Adds new redux entity: selectors, actions, reducer')
    .alias('add redux')
    .action((...args) => {
      before();
      createReduxEntity(...args);
    })
    // Create step (hook)
    .command('add hook', 'Adds new extension backend pipeline step (hook)')
    .action((...args) => {
      before();
      createStep(...args);
    })
    .command('add pipeline', 'Adds new pipeline')
    .action((...args) => {
      before();
      createPipeline(...args);
    })
    .command('add portal', 'Adds new portal position component')
    .action((...args) => {
      before();
      createPortal(...args);
    });

  prog.parse(process.argv);
}

module.exports = app;
