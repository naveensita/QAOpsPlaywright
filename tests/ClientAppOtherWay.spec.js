const { test, expect } = require('@playwright/test');

test('Client App login',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const emailIdText = "naveenpathak715@gmail.com";
    const productName = "ZARA COAT 3";
    const username = page.getByPlaceholder("email@example.com");
    const password = page.getByPlaceholder("enter your passsword");
    const loginBtn = page.getByRole("button",{name:"Login"});
    const forgotPasswordLink = page.locator(".forgot-password-link");
    const newRegistrationLink = page.locator(".login-wrapper-footer-text");
    const blinkingText = page.locator(".blink_me");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const phoneNumber = page.locator("#userEmail");
    const occupation = page.locator("select[formcontrolname='occupation']");
    const genderMale = page.locator("input[value='Male']");
    const genderFemale = page.locator("input[value='Female']");
    const passwordTextBox = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const ageCheckBox = page.locator("input[type='checkbox']");
    const registerBtn = page.locator("input[value='Register']");
    const loginHereBtn = page.locator(".login-wrapper-footer-text");
    const products = page.locator(".card-body");
    const allProducts = page.locator(".card-body b");
    const cartBtn = page.locator("[routerlink*='cart']");
    const checkOutBtn = page.locator("text=Checkout");
    const creditCardNumber = page.locator(".form__cc input");
    const expiryDateMonth = page.locator("select[class='input ddl']").first();
    const expiryDateYear = page.locator("select[class='input ddl']").last();
    const cvvCode = page.locator("//div[@class='field small']/input[@class='input txt']");
    const nameOnCard = page.locator("input[type='text'].text-validated").first();
    const applyCoupon = page.locator("[name='coupon']");
    const applyCouponBtn = page.locator("[type='submit']");
    const emailId = page.locator(".user__name input").nth(0);
    const countrySelectBox = page.locator("[placeholder='Select Country']");
    const actualEmailId = page.locator(".user__name [type='text']").first();
    const placeOrderBtn = page.locator(".action__submit");

    await username.fill(emailIdText);
    await password.fill("Sonu123@#");
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    await allProducts.first().waitFor();
    const productTitles = await allProducts.allTextContents();
    console.log(productTitles);
    const count = await products.count();
    console.log(count);
    console.log(await products.nth(1).locator("b").textContent());

    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
    .getByRole("button",{name:"Add To Cart"}).click();
    
    await page.getByRole("listitem").getByRole("button", {name:"Cart"}).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind", {delay:150});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    await page.getByRole("button",{name:"India"}).nth(1).click();
    //await page.pause();

    expect(await actualEmailId).toHaveText(emailIdText);
    await page.getByText("PLACE ORDER").click();
    
    await expect(await page.getByText("Thankyou for the order.")).toBeVisible();

});
