const originalRules = require('@shopgate/eslint-config');
module.exports = {
  ...originalRules,
  rules: {
    ...originalRules.rules,
    "no-console": 0
  }
};
