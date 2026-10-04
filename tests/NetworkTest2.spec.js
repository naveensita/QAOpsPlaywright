const {test, expect} = require('@playwright/test');



test("Security test request intercept", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginBtn = page.locator("#login");
    const allProducts = page.locator(".card-body b");
    //login
    await username.fill("naveenpathak715@gmail.com");
    await password.fill("Sonu123@#");
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    await allProducts.first().waitFor();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url : "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6aba38e02be7a4bc2b757455"})
    );

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("button:has-text('View')").first().click();
    expect(await page.locator(".blink_me")).toHaveText("You are not authorize to view this order");

});