const prog = require('caporal');
const package = require('../package');
const createComponent = require('./actions/createComponent');

function app() {
  prog.version(package.version);

  prog
    .command('create component')
    .action(createComponent)

  prog.parse(process.argv);
}

module.exports = app;
