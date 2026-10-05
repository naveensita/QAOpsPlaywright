# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> Visual testing
- Location: tests\MoreValidations.spec.js:38:1

# Error details

```
Error: A snapshot doesn't exist at E:\PlaywrightTypescriptAutomation\tests\MoreValidations.spec.js-snapshots\Landing-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e24]
  - search [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e36]:
        - combobox "Search" [active] [ref=e43]
        - generic [ref=e45]:
          - button "Search by voice" [ref=e46] [cursor=pointer]
          - button "Search by image" [ref=e49] [cursor=pointer]
      - generic [ref=e53]:
        - button "Google Search" [ref=e54] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e55] [cursor=pointer]
  - generic [ref=e58]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e59] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBY
    - link "বাংলা" [ref=e60] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBc
    - link "తెలుగు" [ref=e61] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBg
    - link "मराठी" [ref=e62] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBk
    - link "தமிழ்" [ref=e63] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBo
    - link "ગુજરાતી" [ref=e64] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBs
    - link "ಕನ್ನಡ" [ref=e65] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCBw
    - link "മലയാളം" [ref=e66] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCB0
    - link "ਪੰਜਾਬੀ" [ref=e67] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_VHC2H_ScyyT__9RLzCkUmZ2nYWM%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjd3PD4vqKXAxUalJUCHWM1Kh0Q2ZgBCB4
  - contentinfo [ref=e69]:
    - generic [ref=e70]: India
    - generic [ref=e71]:
      - generic [ref=e72]:
        - link "Advertising" [ref=e73] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e74] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e75] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e76]:
        - link "Privacy" [ref=e77] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e78] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e82] [cursor=pointer]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | //test.describe.configure({mode: 'parallel'});
  4  | //test.describe.configure({mode: 'serial'});
  5  | test("@web popup validations", async ({page})=>{
  6  | 
  7  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  8  |     //await page.goto("https://www.google.com");
  9  |     // await page.goBack();
  10 |     // await page.goForward();
  11 |     // await page.goBack();
  12 |     await expect(page.locator("#displayed-text")).toBeVisible();
  13 |     await page.locator("#hide-textbox").click();
  14 |     await expect(page.locator("#displayed-text")).toBeHidden();
  15 |     page.on('dialog', dialog =>dialog.accept());
  16 |     //page.on('dialog', dialog =>dialog.dismiss());
  17 |     await page.locator("#confirmbtn").click();
  18 |     await page.locator("#mousehover").hover();
  19 | 
  20 |     const framesPage = page.frameLocator("#courses-iframe");
  21 |     await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  22 |     const textCheck = await framesPage.locator(".text h2").textContent();
  23 |     console.log(textCheck.split(" ")[1]);
  24 |     //await page.pause();
  25 | });
  26 | 
  27 | test("Screenshots and Visual Comparision", async ({page})=>{
  28 | 
  29 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  30 |     await expect(page.locator("#displayed-text")).toBeVisible();
  31 |     await page.locator("#displayed-text").screenshot({path: 'PartialScreenshot.png'});
  32 |     await page.locator("#hide-textbox").click();
  33 |     await page.screenshot({path : 'Screenshot.png'});
  34 |     await expect(page.locator("#displayed-text")).toBeHidden();
  35 |     //await page.pause();
  36 | });
  37 | 
  38 | test("Visual testing", async ({page})=>{
  39 |     await page.goto("https://www.google.com/");
> 40 |     expect(await page.screenshot()).toMatchSnapshot("Landing.png", { maxDiffPixelRatio: 0.03 });
     |                                     ^ Error: A snapshot doesn't exist at E:\PlaywrightTypescriptAutomation\tests\MoreValidations.spec.js-snapshots\Landing-win32.png, writing actual.
  41 | 
  42 | });
  43 | 
```