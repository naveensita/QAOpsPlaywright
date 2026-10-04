const { test, expect } = require('@playwright/test');
const {customtest} = require('../utils/test-base');
const {pageObjectManager, PageObjectManager} = require('../pageobjects/PageObjectManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/PlaceOrderTestData.json')));


for(const data of dataset){
test(`@web Client App login for ${data.productName}`,async ({page})=>{

    const pageObjectManager = new PageObjectManager(page);

    const loginPage = pageObjectManager.getLoginPage();
    const dashboardPage = pageObjectManager.getDashboardPage();
    const checkoutPage = pageObjectManager.getCheckoutPage();
    const ordersPage = pageObjectManager.getOrdersPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    await dashboardPage.searchProductAddCart(data.productName);
    
    await dashboardPage.navigateToCart();

    await checkoutPage.checkoutAddedProduct(data.productName);
    const orderId = await checkoutPage.placeOrder(data.country, data.username);
    await ordersPage.goToOrdersPage();
    await ordersPage.verifycreatedOrder(orderId);
    
    //await page.pause();
});
}

customtest('Client App login', async ({page, testDataForOrder})=>{

    const pageObjectManager = new PageObjectManager(page);

    const loginPage = pageObjectManager.getLoginPage();
    const dashboardPage = pageObjectManager.getDashboardPage();
    const checkoutPage = pageObjectManager.getCheckoutPage();
    const ordersPage = pageObjectManager.getOrdersPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();

    await checkoutPage.checkoutAddedProduct(testDataForOrder.productName);
});
