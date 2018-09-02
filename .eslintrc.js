const path = require('path')

module.exports = {
  extends: ['react-app'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
}
