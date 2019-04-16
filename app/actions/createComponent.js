const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read,
  write,
  mkdirSafe,
  exists,
} = require('../filesystem');

/**
 * Creates new component.
 */
async function createComponent() {
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
      required: true,
    },
    {
      type: 'select',
      name: 'type',
      message: 'Class of function?',
      choices: ['class', 'function'],
    },
    {
      type: 'confirm',
      name: 'withStyles',
      message: 'With styles?',
      initial: true,
    },
    {
      type: 'confirm',
      name: 'withConnector',
      message: 'With connector?',
      initial: true,
    },
  ]);

  if (exists(`./frontend/components/${response.name}`)) {
    throw new Error(`./frontend/components/${response.name} already exists. Aborting`);
  }

  mkdirSafe('./frontend/components');
  mkdirSafe(`./frontend/components/${response.name}`);

  const index = twig({
    data: read('/templates/component/index.js.twig', true),
  });

  const resultComponent = await index.render(response);
  write(`./frontend/components/${response.name}/index.jsx`, resultComponent);

  if (response.withStyles) {
    const styles = twig({
      data: read('/templates/component/styles.js.twig', true),
    });
    write(`./frontend/components/${response.name}/styles.js`, await styles.render(response));
  }

  if (response.withConnector) {
    const connector = twig({
      data: read('/templates/component/connector.js.twig', true),
    });
    write(`./frontend/components/${response.name}/connector.js`, await connector.render(response));
  }
}

module.exports = createComponent;
