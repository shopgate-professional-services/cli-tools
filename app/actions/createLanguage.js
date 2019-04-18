const { prompt } = require('enquirer');
const {
  read, write, listFiles, mkdirSafe,
} = require('../filesystem');
const { addComponent } = require('../extensionConfig');

/**
 * Creates new locale.
 */
async function createLanguage() {
  const options = await prompt([
    {
      type: 'input',
      name: 'iso',
      message: 'Language code: e.x. pl-PL',
      required: true,
    },
  ]);

  mkdirSafe('./frontend/locale');
  const existingFiles = listFiles('./frontend/locale');

  let template;
  if (existingFiles.length) {
    template = existingFiles.find(el => el === 'en-US.json');
    if (!template) {
      [template] = existingFiles;
    }
  }

  let newLocaleContent = '{}';
  if (template) {
    newLocaleContent = read(`./frontend/locale/${template}`);
  }

  write(`./frontend/locale/${options.iso}.json`, newLocaleContent);
  addComponent({
    type: 'translations',
    path: `frontend/locale/${options.iso}.json`,
    id: `locale/${options.iso}`,
  });
}

module.exports = createLanguage;
