const { read, write } = require('../filesystem');

const getConfig = () => {
  return JSON.parse(read('./extension-config.json'));
};

/**
 * Adds a component to extension-config.json
 * @param {Object} element Extension-config.json valid components object.
 */
function addComponent(element) {
  const extensionConfig = getConfig();
  if (!extensionConfig.components) {
    extensionConfig.components = [];
  }
  extensionConfig.components.push(element);

  write('./extension-config.json', JSON.stringify(extensionConfig, null, 2));
}

/**
 * Returns an extension official name (e.x. @shopgate-project/myExtension
 * @returns {string}
 */
function getExtensionName() {
  const extensionConfig = getConfig();

  return extensionConfig.id;
}

module.exports = {
  addComponent,
  getExtensionName,
};
