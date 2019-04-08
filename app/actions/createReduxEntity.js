const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read, write, mkdirSafe, append,
} = require('../filesystem');
const { addComponent, getExtensionName } = require('../extensionConfig');

const toCamelCase = (string) => {
  return string.map()
}
/**
 * Creates route.
 */
async function createReduxEntity() {
  const options = await prompt([
    {
      type: 'input',
      name: 'entityName',
      message: 'Entity name',
      required: true,
    },
  ]);
  const extensionName = getExtensionName();
  const { entityName } = options;
  const entityNameCamel = entityName[0].toLowerCase() + entityName.slice(1);

  addComponent({
    id: `${entityNameCamel}Reducer`,
    path: `frontend/reducers/${entityNameCamel}Reducer.js`,
    type: 'reducers',
  });

  const twigOptions = {
    entityName,
    extensionName,
    entityNameCamel,
  };

  const reducer = twig({
    data: read('./templates/redux/reducer.js.twig', true),
  }).render(twigOptions);
  const action = twig({
    data: read('./templates/redux/action.js.twig', true),
  }).render(twigOptions);
  const selectors = twig({
    data: read('./templates/redux/selectors.js.twig', true),
  }).render(twigOptions);

  mkdirSafe('./frontend/reducers');
  mkdirSafe('./frontend/selectors');
  mkdirSafe('./frontend/actions');

  write(`./frontend/reducers/${entityNameCamel}Reducer.js`, reducer);
  write(`./frontend/actions/${entityNameCamel}Actions.js`, action);
  write(`./frontend/selectors/${entityNameCamel}Selectors.js`, selectors);

  append('./frontend/constants.js', `export const REQUEST_${entityName.toUpperCase()} = 'REQUEST_${entityName.toUpperCase()}';\n`);
  append('./frontend/constants.js', `export const RECEIVE_${entityName.toUpperCase()} = 'RECEIVE_${entityName.toUpperCase()}';\n`);
}

module.exports = createReduxEntity;
