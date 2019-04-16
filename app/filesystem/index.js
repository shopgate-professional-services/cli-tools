const fs = require('fs');
const path = require('path');

/**
 * Reads a file and returns it's content as string.
 * @param {string} filePath relative pathname.
 * @param {bool} [root=false] Whether should read from main programm directory.
 * @returns {string}
 */
const read = (filePath, root = false) => {
  if (!root) {
    return fs.readFileSync(path.resolve(`./${filePath}`)).toString();
  }

  return fs.readFileSync(path.resolve(`${path.dirname(require.main.filename)}/${filePath}`)).toString();
};

/**
 * Writes to a given pathname.
 * @param {string} pathname Relative path to a current cwd.
 * @param {string} content File content.
 */
const write = (pathname, content) => {
  fs.writeFileSync(pathname, content);
};

/**
 * Checks whether directory exists and if not creates a new one.
 * @param {string} dirname Relative dir pathname.
 */
const mkdirSafe = (dirname) => {
  if (fs.existsSync(path.resolve(dirname))) {
    return;
  }

  fs.mkdirSync(dirname);
};

/**
 * Checks if entity (filename or directory) exists.
 * @param {string} pathname Pathname.
 * @returns {bool}
 */
const exists = pathname => fs.existsSync(path.resolve(pathname));

/**
 * Appends string to the file.
 * @param {string} pathname Relive pathname.
 * @param {string} content Content to append.
 * @returns {void}
 */
const append = (pathname, content) => fs.appendFileSync(pathname, content);

/**
 * Lists files in the requested directory.
 * @param {string} pathname Relative pathname.
 * @returns {Array<string>}
 */
const listFiles = pathname => fs.readdirSync(path.resolve(pathname));

module.exports = {
  read,
  write,
  mkdirSafe,
  exists,
  append,
  listFiles,
};
