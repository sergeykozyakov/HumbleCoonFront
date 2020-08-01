module.exports = {
  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov'],

  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  rootDir: './',

  roots: ['<rootDir>'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  transform: { '^.+\\.[jt]sx?$': 'babel-jest' },

  verbose: true,
};
