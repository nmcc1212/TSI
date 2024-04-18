import type { Config } from 'jest';
import next from 'next';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    testMatch: ['**/test/**/*.[jt]s?(x)'],
    testResultsProcessor: 'jest-sonar-reporter',
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Nial's Amazing Test Report"
        }]
    ]
};
export default createJestConfig(config);
