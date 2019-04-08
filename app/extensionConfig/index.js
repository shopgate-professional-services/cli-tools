const { read, write } = require('../filesystem');

const getConfig = () => {
  return JSON.parse(read('./extension-config.json'));
};

const saveConfig = (newConfig) => {
  write('./extension-config.json', JSON.stringify(newConfig, null, 2));
}

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

  saveConfig(extensionConfig);
}

/**
 * Adds new step to extension-config.json.
 * @param {Object} element Extension-config valid steps object.
 */
function addStep(element) {
  const extensionConfig = getConfig();
  if (!extensionConfig.steps) {
    extensionConfig.steps = [];
  }

  extensionConfig.steps.push(element);

  saveConfig(extensionConfig);
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
  addStep,
};
