const {test, expect,request} = require('@playwright/test');
const {ApiUtils} = require('../utils/ApiUtils');

const loginPayload = {userEmail: "naveenpathak715@gmail.com", userPassword: "Sonu123@#"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let response;

test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});

test('Place Order',async ({browser})=>{
    
    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const context = await browser.newContext();
    const page = await context.newPage();

    //javascript code to inject token in local storage of browser
    page.addInitScript(value =>{
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='myorders']").waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");
    for (let i = 0;  i < await rows.count(); i++) {
        const rowOrderId = rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId)){
            rows.nth(i).locator("button").first().click();
            break;
        }
    }
});