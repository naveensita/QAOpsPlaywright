const {test, expect} = require('@playwright/test');

let webCOntext;
const emailIdText = "naveenpathak715@gmail.com";

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginBtn = page.locator("#login");
    const allProducts = page.locator(".card-body b");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await username.fill(emailIdText);
    await password.fill("Sonu123@#");
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    await allProducts.first().waitFor();
    await context.storageState({path : 'state.json'});
    webCOntext = await browser.newContext({storageState : 'state.json'});

});

test("Client App Login and place order through API.", async ()=>{
    const page = await webCOntext.newPage();
    
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    const allProducts = page.locator(".card-body b");
    const cartBtn = page.locator("[routerlink*='cart']");
    const checkOutBtn = page.locator("text=Checkout");
    const emailId = page.locator(".user__name input").nth(0);
    const countrySelectBox = page.locator("[placeholder='Select Country']");
    const actualEmailId = page.locator(".user__name [type='text']").first();
    const placeOrderBtn = page.locator(".action__submit");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const productTitles = await allProducts.allTextContents();
    console.log(productTitles);
    const count = await products.count();
    console.log(count);
    console.log(await products.nth(1).locator("b").textContent());
    for (let i = 0; i < count; ++i) {
        if(await products.nth(i).locator("b").textContent()==productName){
            await products.nth(i).locator("text='Add To Cart'").click();
            break;
        }
    }
    await cartBtn.click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await checkOutBtn.click();

    await countrySelectBox.pressSequentially("ind", {delay:150});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text.trim()==="India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await placeOrderBtn.click();
    expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");
    for (let i = 0;  i < await rows.count(); i++) {
        const rowOrderId = rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId)){
            rows.nth(i).locator("button").first().click();
            break;
        }
    }
});