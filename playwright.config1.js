// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  projects : [
  {
    name : 'safari',
    use: {
    actionTimeout: 10*1000,
    navigationTimeout: 30*1000,
    browserName: 'webkit',
    headless: false,
    screenshot: 'on',
    //screenshot: 'only-on-failure',
    trace: 'on',
    //trace: 'retain-on-failure',
    //...devices['iPhone 17'],
    ignoreHttpsErrors: true,
    Permissions: ['geolocation'],
    },
  },
  {
    name : 'chrome',
    use: {
    actionTimeout: 10*1000,
    navigationTimeout: 30*1000,
    browserName: 'chromium',
    headless: false,
    video: 'retain-on-failure',
    screenshot: 'on',
    //screenshot: 'only-on-failure',
    //trace: 'retain-on-failure',
    trace: 'on',
    //viewport: {width:720, height:720}
    },
  }
]
  
});
module.exports = config;

