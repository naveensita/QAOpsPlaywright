const base = require('@playwright/test');
const {ApiUtils} = require('../utils/ApiUtils');
const {request} = require('@playwright/test');
const loginPayload = {userEmail: "naveenpathak715@gmail.com", userPassword: "Sonu123@#"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let response;

exports.customtest = base.test.extend({
    authenticatedPage : async({browser}, use)=>{

        const context = await browser.newContext();
        const page = await context.newPage();

        const username = page.locator("#userEmail");
        const password = page.locator("#userPassword");
        const loginBtn = page.locator("#login");

        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

        await username.fill("naveenpathak715@gmail.com");
        await password.fill("Sonu123@#");
        await loginBtn.click();
        await page.waitForLoadState('networkidle');
        await use(page);
        await context.close();

    },

    createOrder : async({}, use)=>{
        const apiContext = await request.newContext();
        const apiUtils = new ApiUtils(apiContext, loginPayload);
        const response = await apiUtils.createOrder(orderPayload);
        await use(response);
        await apiContext.dispose();

    },

    testDataForOrder : {
        productName : 'ADIDAS ORIGINAL'
    }

}
);