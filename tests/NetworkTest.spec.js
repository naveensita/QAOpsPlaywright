const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('../utils/ApiUtils');

const loginPayload = { userEmail: "naveenpathak715@gmail.com", userPassword: "Sonu123@#" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
let response;
const fakePayloadOrders = { data: [], message: "No Orders" };

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});

test('Place Order', async ({ page }) => {

    //javascript code to inject token in local storage of browser
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    //await page.pause();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/63c5fcb0568c3e9fb1f9b2ee",
        async route => {
            //Intercepting response - API response-> {Playwright fake response}->browser
            const reponse = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePayloadOrders);
            route.fulfill({
                response,
                body,
            });
        });

    await page.locator("button[routerlink*='myorders']").click();
    //await page.pause();
    console.log(await page.locator(".mt-4").textContent());
});