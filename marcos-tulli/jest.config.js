module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@config$': '<rootDir>/src/config/index.ts',
    '^@types$': '<rootDir>/src/types/index.ts', 
    '^@services$': '<rootDir>/src/services/index.ts',
  },
  modulePaths: [
    "<rootDir>"
  ]
};