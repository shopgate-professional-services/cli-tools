const { twig } = require('twig');
const {
  read, write, mkdirSafe, exists,
} = require('../filesystem');
const { addComponent } = require('../extensionConfig');

/**
 * Creates subscriptions file.
 */
async function createSubscriptions() {
  if (exists('./frontend/subscriptions/index.js')) {
    throw new Error('Subscriptions file already exists. Aborting.');
  }

  mkdirSafe('./frontend/subscriptions');

  const subscriptionsFileContent = twig({
    data: read('./templates/Subscriptions.js.twig', true),
  }).render();

  write('./frontend/subscriptions/index.js', subscriptionsFileContent);
  addComponent({
    id: 'Subscribers',
    path: 'frontend/subscriptions/index.js',
    type: 'subscribers',
  });
}

module.exports = createSubscriptions;
