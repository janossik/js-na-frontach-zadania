module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']

  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    semi: [1, 'always'],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off'
  }
};
