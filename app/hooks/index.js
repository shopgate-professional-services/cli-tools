const colors = require('colors');
const { exists } = require('../filesystem');

/**
 * Function that is called before every action.
 */
function before() {
  if (!(exists('frontend'))) {
    console.log('⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ ERROR ⛔️⛔️⛔️⛔️⛔️⛔️');
    console.log('\r\n');
    console.log('⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬');
    console.log('\r\n');
    console.log(colors.bgRed('🔥 Looks like you are trying to do something while not being in the extension root folder. Aborting'));
    console.log('\r\n');
    console.log('⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫⏫');
    throw new Error('Not in the extension');
  }
}

module.exports = {
  before,
};
