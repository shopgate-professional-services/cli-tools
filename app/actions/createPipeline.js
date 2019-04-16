const { prompt } = require('enquirer');
const { twig } = require('twig');
const {
  read, write, mkdirSafe,
} = require('../filesystem');
const { getExtensionName } = require('../extensionConfig');

/**
 * Creates empty pipeline.
 */
async function createPipeline() {
  const options = await prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Pipeline id (e.x. myOrg.foo.bar)',
      required: true,
    },
  ]);

  mkdirSafe('./pipelines');
  write(`./pipelines/${options.id}.json`, twig({
    data: read('./templates/pipeline.json.twig', true),
  }).render({
    ...options,
    extensionName: getExtensionName(),
  }));
}

module.exports = createPipeline;
