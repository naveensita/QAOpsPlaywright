import { test, expect } from '@playwright/test';
import {customTest} from '../utils_ts/test-base';
import {PageObjectManager} from '../pageobjects_ts/PageObjectManager';

const dataset = JSON.parse(JSON.stringify(require('../utils_ts/PlaceOrderTestData.json')));


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
    let orderId: any;
    orderId = await checkoutPage.placeOrder(data.country, data.username);
    await ordersPage.goToOrdersPage();
    await ordersPage.verifycreatedOrder(orderId);
    
    //await page.pause();
});
}

customTest('Client App login', async ({page, testDataForOrder})=>{

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
