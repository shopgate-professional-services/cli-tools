const { prompt } = require('enquirer');
const { twig } = require('twig');
const { read, write, mkdirSafe, append } = require('../filesystem');

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
    }
  ]);

  const extensionConfig = JSON.parse(read('./extension-config.json'));
  if (!extensionConfig.components) {
    extensionConfig.components = [];
  }
  extensionConfig.components.push({
    id: options.name,
    path: `frontend/routes/${options.name}/index.jsx`,
    target: 'app.routes',
    type: 'portals'
  });

  write('./extension-config.json', JSON.stringify(extensionConfig, null, 2));

  mkdirSafe('./frontend/routes');
  mkdirSafe(`./frontend/routes/${options.name}Route`)

  mkdirSafe('./frontend/pages')
  mkdirSafe(`./frontend/pages/${options.name}Page`)

  const routeComponent = twig({
    data: read('/templates/Route.js.twig', true)
  }).render(options);
  write(`./frontend/routes/${options.name}Route/index.jsx`, routeComponent);

  const pageComponent = twig({
    data: read('/templates/Page.js.twig', true)
  }).render(options);
  write(`./frontend/pages/${options.name}Page/index.jsx`, pageComponent);

  append('./frontend/constants.js', `export const ${options.name.toUpperCase()}_PATTERN = '${options.pattern}';`);
}

module.exports = createRoute;
