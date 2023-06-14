export default {
    testEnvironment: 'node',
    transform: {},
    extensionsToTreatAsEsm: ['.js'],
    testResultsProcessor: "./node_modules/jest-html-reporter",
    reporters: [
      "default",
      ["./node_modules/jest-html-reporter", {
        pageTitle: "Test Report"
      }]
    ],

  setupFiles: ["<rootDir>/src/setupTests.js"],
 testRegex: "/*.test.js$",
 collectCoverage: true,
 coverageReporters: ["lcov"],
 coverageDirectory: "test-coverage",
 coverageThreshold: {
  global: {
  branches: 0,
  functions: 0,
  lines: 0,
  statements: 0
  }
 },
 moduleDirectories: ["node_modules", "src"]
    
    
  };
  