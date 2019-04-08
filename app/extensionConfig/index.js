const { read, write } = require('../filesystem');

/**
 * Adds a component to extension-config.json
 * @param {Object} element Extension-config.json valid components object.
 */
function addComponent(element) {
  const extensionConfig = JSON.parse(read('./extension-config.json'));
  if (!extensionConfig.components) {
    extensionConfig.components = [];
  }
  extensionConfig.components.push(element);

  write('./extension-config.json', JSON.stringify(extensionConfig, null, 2));
}

module.exports = {
  addComponent,
};
