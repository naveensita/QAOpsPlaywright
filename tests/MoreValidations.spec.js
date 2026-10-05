const {test,expect} = require('@playwright/test');

//test.describe.configure({mode: 'parallel'});
//test.describe.configure({mode: 'serial'});
test("@web popup validations", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com");
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on('dialog', dialog =>dialog.accept());
    //page.on('dialog', dialog =>dialog.dismiss());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
    //await page.pause();
});

test("Screenshots and Visual Comparision", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path: 'PartialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path : 'Screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
});

test.skip("Visual testing", async ({page})=>{
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot("Landing.png", { maxDiffPixelRatio: 0.05 });

});
