// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 30 * 1000,
  retries: 2,
  //workers:5,
  //fullyparallel:true
  expect: {
    timeout: 10000
  },
  // 1. Add allure-playwright to the reporter list:
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    actionTimeout: 10*1000,
    navigationTimeout: 30*1000,
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    //screenshot: 'retain-on-failure',
    trace: 'on'
  },
});
module.exports = config;

