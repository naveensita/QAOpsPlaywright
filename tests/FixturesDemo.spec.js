const {expect, test, request} = require('@playwright/test');
const {customtest} = require("../utils/fixtures.js");


customtest("Custom fixtures demo test", async({authenticatedPage, createOrder, testDataForOrder})=>{

    authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator("button[routerlink*='myorders']").waitFor();
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
    console.log(testDataForOrder.productName);

}); 