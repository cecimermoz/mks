//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    semi: ['off', 'never'],
    indent: ['warn', 2],
  },
}