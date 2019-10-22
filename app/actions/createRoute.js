const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read, write, mkdirSafe, append,
} = require('../filesystem');
const { addComponent } = require('../extensionConfig');

/**
 * Creates route.
 */
async function createRoute() {
  const options = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Route/Page name',
      required: true,
    },
    {
      type: 'input',
      name: 'pattern',
      message: 'Route pattern',
      required: true,
    },
  ]);

  addComponent({
    id: options.name,
    path: `frontend/pages/${options.name}/index.jsx`,
    target: 'app.routes',
    type: 'portals',
  });

  mkdirSafe('./frontend/pages');
  mkdirSafe(`./frontend/pages/${options.name}`);

  const pageComponent = twig({
    data: read('/templates/Page.js.twig', true),
  }).render(options);
  write(`./frontend/pages/${options.name}/index.jsx`, pageComponent);

  append('./frontend/constants.js', `export const ${options.name.toUpperCase()}_PATTERN = '${options.pattern}';`);
  append('./frontend/constants.js', '\n');
}

module.exports = createRoute;
