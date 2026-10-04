const {Before, After, BeforeStep, AfterStep, Status, BeforeAll, AfterAll} = require('@cucumber/cucumber');
const {PageObjectManager} = require('../../pageobjects/PageObjectManager');
const playwright = require('@playwright/test');
const path = require('node:path');


// BeforeAll(async function () {
//   // Launch browser once for the test run
//   //this.browser = await playwright.chromium.launch({ headless: false });
// });

// AfterAll(async function () {
//   // Close the browser when all tests finish
// //   await this.browser.close();
// });

// Before({tags: "@Regression or @Validaion"}, async function(){
Before(async function(){
    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pageObjectManager = new PageObjectManager(this.page);

});

After("@Regression or @Validation", async function(){
    console.log("I am last to execute.");
});

BeforeStep(async function(){

});

AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'screeshot1.png'});
    }
});

