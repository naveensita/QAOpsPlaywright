const {test, expect} = require('@playwright/test');


test('Browser context Playwright test', async ({browser,})=> 
{
   //Playwright code
   const context = await browser.newContext();
   const page = await context.newPage();
   //page.route('**/*.{jpg,png,jpeg}', route=> route.abort());
   const username = page.locator("#username");
   const signInBtn = page.locator("#signInBtn");
   const cardTitles = page.locator(".card-body a");
   page.on('request', request=> console.log(request.url()));
   page.on('response', response=> console.log(response.url(), response.status()));
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await page.title());
   await username.fill('rahulshetty');
   await page.locator("[type='password']").fill('Learning@830$3mK2');
   await page.locator("#signInBtn").click();
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   console.log(await page.locator('[style*="block"]').textContent());
   await username.fill("");
   await username.fill('rahulshettyacademy');
   await signInBtn.click();
   console.log(await page.url());
   console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(1).textContent());
   //await page.waitForLoadState('networkidle');
   //or we can use below method if above one is flekky
   await page.locator(".card-body a").first().waitFor();
   const allTitles = await cardTitles.allTextContents();
   console.log(allTitles);
   await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
   
});

test('Page Playwright test', async ({page})=> 
{
   //Playwright code
   //const context = await browser.newContext();
   //const page = await context.newPage();
   await page.goto('https://google.com');
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");
 
});

test('@web UI Controls test', async ({browser})=> 
{
   //Playwright code
   const context = await browser.newContext();
   const page = await context.newPage();
   const username = page.locator("#username");
   const password = page.locator("[type='password']");
   const ocuupationSelectBox = page.locator("select.form-control");
   const signInBtn = page.locator("#signInBtn");
   const cardTitles = page.locator(".card-body a");
   const adminRadioBtn = page.locator(".radiotextsty").first();
   const userRadioBtn = page.locator(".radiotextsty").last();
   const radioBtnPopupOkayBtn = page.locator("#okayBtn");
   const termsCheckBox = page.locator("#terms");
   const documentLink = page.locator("[href*='documents-request']");
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await username.fill('rahulshettyacademy');
   await password.fill('Learning@830$3mK2');
   await userRadioBtn.click();
   await radioBtnPopupOkayBtn.click();
   await ocuupationSelectBox.selectOption("consult");
   await termsCheckBox.waitFor();
   await termsCheckBox.isEnabled();
   await termsCheckBox.click();
   await expect(userRadioBtn).toBeChecked();
   await expect(termsCheckBox).toBeChecked();
   console.log(await userRadioBtn.isChecked());
   console.log(await termsCheckBox.isChecked());
   await termsCheckBox.uncheck();
   //await page.pause();
   expect(await termsCheckBox.isChecked()).toBeFalsy();
   await expect(documentLink).toHaveAttribute("class", "blinkingText");
   //await page.pause();
   
});

test('Child window Handling', async ({browser})=> 
{
   //Playwright code
   const context = await browser.newContext();
   const page = await context.newPage();
   const documentLink = page.locator("[href*='documents-request']");
   const username = page.locator("#username");
   const password = page.locator("[type='password']");
   const ocuupationSelectBox = page.locator("select.form-control");
   const signInBtn = page.locator("#signInBtn");
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      documentLink.click()
   ]);
   const text = await newPage.locator(".red").textContent();
   console.log(text);
   const domain = text.split("@")[1].split(" ")[0];
   console.log(domain);
   await username.fill(domain);
   console.log(await username.inputValue());
   await password.fill("Learning@830$3mK2");
   await signInBtn.click();
   await page.waitForLoadState('networkidle');

});