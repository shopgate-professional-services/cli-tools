const fs = require('fs');
const path = require('path');

const read = (filePath, root = false) => {
  if (!root) {
    return fs.readFileSync(path.resolve(`./${filePath}`)).toString();
  }

  return fs.readFileSync(path.resolve(`${path.dirname(require.main.filename)}/${filePath}`)).toString();
}

const write = (path, content) => {
  fs.writeFileSync(path, content);
}

const mkdirSafe = (dirname) => {
  if (fs.existsSync(path.resolve(dirname))) {
    return;
  }

  fs.mkdirSync(dirname)
}

const exists = (pathname) => {
  return fs.existsSync(path.resolve(pathname));
}

const append = (pathname, content) => {
  return fs.appendFileSync(pathname, content);
}

const listFiles = (pathname) => {
  return fs.readdirSync(path.resolve(pathname));
}

module.exports = {
  read,
  write,
  mkdirSafe,
  exists,
  append,
  listFiles,
}
