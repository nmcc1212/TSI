import type { Config } from 'jest';
import next from 'next';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './test', // Specify the directory containing test files
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    testResultsProcessor: 'jest-sonar-reporter',
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Nial's Amazing Test Report"
        }]
    ]
};
export default createJestConfig(config);
