module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
  },
};
