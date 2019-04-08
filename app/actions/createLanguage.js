const { prompt } = require('enquirer');
const { twig } = require('twig');
const { read, write, mkdirSafe, append, listFiles } = require('../filesystem');
const { addComponent } = require('../extensionConfig');

async function createLanguage() {
  const options = await prompt([
    {
      type: 'input',
      name: 'iso',
      message: 'Language code: e.x. pl-PL',
      required: true,
    }
  ]);


  const existingFiles = listFiles('./frontend/locale');
  let template;
  if (existingFiles.length) {
    template = existingFiles.find(el => el === 'en-US.json');
    if (!template) {
      template = existingFiles[0];
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
    id: 'locale/de-DE'
  });
}

module.exports = createLanguage;
