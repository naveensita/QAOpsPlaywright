const {test, expect} = require('@playwright/test');

test("Playwright special locators",async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    const checkMeCheckBox = page.getByLabel("Check me out if you Love IceCreams!");
    const employmentStatusRadioBtn = page.getByLabel("Employed");
    const genderSelectBox = page.getByLabel("Gender");
    const name = page.locator("input.form-control[name='name']");
    const email = page.locator("input[name='email']");
    const password = page.getByPlaceholder("Password");
    const dateOfBirth = page.locator("input[name='bday']");
    const submitBtn = page.getByRole("button", {name:'Submit'});
    const successMsg = page.getByText("The Form has been submitted successfully!.");
    const shopLink = page.getByRole("link",{name:'Shop'});

    await name.fill("Naveen Chandra Pathak");
    await email.fill("abcd@gmail.com");
    await password.fill("abc123345");
    await dateOfBirth.pressSequentially("28021988", {delay:150});
    await checkMeCheckBox.check();
    await employmentStatusRadioBtn.check();
    await genderSelectBox.selectOption("Female");
    await submitBtn.click();
    console.log(await successMsg.isVisible());
    await expect(successMsg).toBeVisible({timeout:10000});
    await shopLink.click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
    //await page.pause();
    
});

test("Playwright Test level timeout",async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    test.setTimeout(60000);
    const slownessExpect = expect.configure({timeout:10000});
    page.setDefaultTimeout(10000);

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    const checkMeCheckBox = page.getByLabel("Check me out if you Love IceCreams!");
    const employmentStatusRadioBtn = page.getByLabel("Employed");
    const genderSelectBox = page.getByLabel("Gender");
    const name = page.locator("input.form-control[name='name']");
    const email = page.locator("input[name='email']");
    const password = page.getByPlaceholder("Password");
    const dateOfBirth = page.locator("input[name='bday']");
    const submitBtn = page.getByRole("button", {name:'Submit'});
    const successMsg = page.getByText("The Form has been submitted successfully!.");
    const shopLink = page.getByRole("link",{name:'Shop'});

    await name.fill("Naveen Chandra Pathak");
    await email.fill("abcd@gmail.com");
    await password.fill("abc123345");
    await dateOfBirth.pressSequentially("28021988", {delay:150});
    await checkMeCheckBox.check();
    await employmentStatusRadioBtn.check();
    await genderSelectBox.selectOption("Female");
    await submitBtn.click();
    console.log(await successMsg.isVisible());
    //await expect(successMsg).toBeVisible({timeout:10000});
    await slownessExpect(successMsg).toBeVisible();
    
    await shopLink.click({timeout:15000});
    await slownessExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
    slownessExpect(await page.locator());

});