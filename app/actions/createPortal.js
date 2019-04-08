const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read,
  write,
  mkdirSafe,
  exists,
} = require('../filesystem');
const { addComponent } = require('../extensionConfig');
const toPascalCase = require('../helpers/portalNameToPascalCase');

/**
 * Creates portal.
 */
async function createPortal() {
  const options = await prompt([
    {
      type: 'input',
      name: 'name',
    },
  ]);

  const opts = {
    ...options,
    namePascalCase: toPascalCase(options.name),
  };

  mkdirSafe('./frontend/portals');
  mkdirSafe(`./frontend/portals/${opts.namePascalCase}`);
  write(`./frontend/portals/${opts.namePascalCase}/index.jsx`, twig({
    data: read('./templates/PortalComponent.js.twig', true),
  }).render(opts));

  addComponent({
    id: opts.namePascalCase,
    path: `frontend/portals/${opts.namePascalCase}/index.jsx`,
    target: opts.name,
    type: 'portals',
  });
}

module.exports = createPortal;
