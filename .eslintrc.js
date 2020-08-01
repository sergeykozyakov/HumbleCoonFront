module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:jest/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'jest', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
  },
};
