import type { Config } from 'jest';
import next from 'next';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    testResultsProcessor: 'jest-sonar-reporter',
};
export default createJestConfig(config);
