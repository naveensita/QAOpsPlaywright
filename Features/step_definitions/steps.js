const { Given, When, Then } = require('@cucumber/cucumber');
const {PageObjectManager} = require('../../pageobjects/PageObjectManager');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');

Given('the user is logged into the Ecommerce application with {string} and {string}', {timeout: 100*1000}, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = this.pageObjectManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('the user adds {string} to the cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const dashboardPage = this.pageObjectManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();
});

Then('{string} should be displayed in the cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.checkoutPage = this.pageObjectManager.getCheckoutPage();
    await this.checkoutPage.checkoutAddedProduct(productName);
});

When('the user enters valid checkout details {string} and {string} and places the order', async function (country, username) {
    // Write code here that turns the phrase above into concrete actions
    this.orderId = await this.checkoutPage.placeOrder(country, username);
    console.log(this.orderId);
});

Then('the order should be present in the order history', async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersPage = this.pageObjectManager.getOrdersPage();
    await ordersPage.goToOrdersPage();
    await ordersPage.verifycreatedOrder(this.orderId);
});

Given('the user is logged into the Ecommerce2 application with {string} and {string}', async function (email, password) {
   // Write code here that turns the phrase above into concrete actions
   const username = this.page.locator("#username");
   await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await this.page.title());
   await username.fill(email);
   await this.page.locator("[type='password']").fill(password);
   await this.page.locator("#signInBtn").click();

});

Then('Verify error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrects');
    console.log(await this.page.locator('[style*="block"]').textContent());

});