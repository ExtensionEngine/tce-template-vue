module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: '@extensionengine',
  rules: {
    'no-eval': 'off',
    'vue/multi-word-component-names': 'off'
  }
};
