import { Locator, Page } from "@playwright/test";

export class OrdersPage{
    page: Page;
    ordersLink: Locator;
    orderTable: Locator;
    orderTableRow: Locator;
    constructor(page:Page){
        this.page = page;
        this.ordersLink = this.page.locator("button[routerlink*='myorders']");
        this.orderTable = this.page.locator("tbody");
        this.orderTableRow = this.page.locator("tbody tr");
    }

    async goToOrdersPage(){
        await this.ordersLink.click();
        await this.orderTable.waitFor();
    }

    async verifycreatedOrder(orderId: any){
        let rows: Locator;
        let rowOrderId: any;
        rows = this.orderTableRow;
        for (let i = 0;  i < await rows.count(); i++) {
            rowOrderId = rows.nth(i).locator("th").textContent();
            if(orderId.includes(rowOrderId)){
            rows.nth(i).locator("button").first().click();
            break;
            }
        }
    }
}
module.exports = {OrdersPage};