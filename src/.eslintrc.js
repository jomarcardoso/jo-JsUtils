module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
    'browser': true,
    'node': true
  },
  'rules': {
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'linebreak-style': 'off'
  },
  'globals': {
    "fetch": false,
    'document': false
  }
}
