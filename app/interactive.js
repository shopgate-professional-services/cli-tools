const { Select } = require('enquirer');
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

before();

console.log(`${packageInfo.description}\nv.${packageInfo.version}\n\n`);

const areas = {
  engage: {
    component: createComponent,
    route: createRoute,
    language: createLanguage,
    subscription: createSubscription,
    redux: createReduxEntity,
    hook: createStep,
    pipeline: createPipeline,
    portal: createPortal,
  },
  connect: {
    pipeline: createPipeline,
    'pipeline step': createStep,
  },
};

new Select({
  name: 'context',
  message: 'Choose area of commands',
  choices: Object.keys(areas).map(area => ({
    message: area,
    value: area,
  })),
}).run()
  .then((area) => {
    new Select({
      name: 'context',
      message: 'Select command to execute',
      choices: Object.keys(areas[area]).map(command => ({
        message: `add ${command}`,
        value: command,
      })),
    })
      .run()
      .then(command => areas[area][command] && areas[area][command]())
      .catch(console.error);
  })
  .catch(console.error);
