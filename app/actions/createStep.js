const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read, write, mkdirSafe,
} = require('../filesystem');
const { addStep } = require('../extensionConfig');

/**
 * Creates step
 */
async function createStep() {
  const options = await prompt([
    {
      type: 'input',
      name: 'hooks',
      message: 'Hooks for this step (comma separated list, e.x "shopgate.catalog.getProductsByIds.v1:afterFetchProducts")',
      required: true,
    },
    {
      type: 'input',
      name: 'name',
      message: 'Step name (filename)',
      required: true,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Ste description (optional)',
    },
  ]);

  mkdirSafe('./extension');
  mkdirSafe('./extension/steps');

  write(`./extension/steps/${options.name}.js`, twig({
    data: read('./templates/step.js.twig', true),
  }).render(options));

  addStep({
    hooks: options.hooks.split(','),
    path: `extension/steps/${options.name}.js`,
    description: options.description || '',
    input: [],
    output: [],
  });
}

module.exports = createStep;
