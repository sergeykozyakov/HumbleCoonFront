module.exports = {
  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  rootDir: './',

  roots: ['<rootDir>'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  transform: { '^.+\\.jsx?$': 'babel-jest', '^.+\\.tsx?$': 'ts-jest' },

  verbose: true,
};
