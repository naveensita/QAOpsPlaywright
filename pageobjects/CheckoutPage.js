const { expect } = require('@playwright/test');
class CheckoutPage{
    constructor(page){
        this.page = page;
        this.product = this.page.locator("div li").first();
        this.checkoutBtn = this.page.locator("text=Checkout");
        this.countrySelectBox = this.page.locator("[placeholder='Select Country']");
        this.countryDropdownArea = this.page.locator(".ta-results");
        this.actualEmailId = this.page.locator(".user__name [type='text']").first();
        this.placeOrderBtn = this.page.locator(".action__submit");
        this.confirmationMsg = this.page.locator(".hero-primary");
        this.orderId = this.page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async checkoutAddedProduct(productNameText){
        await this.product.waitFor();
        await expect(this.page.locator("h3:has-text('"+productNameText+"')")).toBeVisible();
        await this.checkoutBtn.click();
    }

    async placeOrder(country, emailId){
        await this.countrySelectBox.pressSequentially(country, {delay:150});
        await this.countryDropdownArea.waitFor();
        const optionsCount = await this.countryDropdownArea.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.countryDropdownArea.locator("button").nth(i).textContent();
            if(text.toLowerCase().trim()===country){
                await this.countryDropdownArea.locator("button").nth(i).click();
                break;
        }
    }
        expect(await this.actualEmailId).toHaveText(emailId);
        await this.placeOrderBtn.click();
        expect(await this.confirmationMsg).toHaveText(" Thankyou for the order. ");
        const orderId = await this.orderId.textContent();
        console.log(orderId);
        return orderId;

    }

}
module.exports = {CheckoutPage};