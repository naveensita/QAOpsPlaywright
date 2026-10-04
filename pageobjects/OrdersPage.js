class OrdersPage{
    constructor(page){
        this.page = page;
        this.ordersLink = this.page.locator("button[routerlink*='myorders']");
        this.orderTable = this.page.locator("tbody");
        this.orderTableRow = this.page.locator("tbody tr");
    }

    async goToOrdersPage(){
        await this.ordersLink.click();
        await this.orderTable.waitFor();
    }

    async verifycreatedOrder(orderId){
        const rows = this.orderTableRow;
        for (let i = 0;  i < await rows.count(); i++) {
            const rowOrderId = rows.nth(i).locator("th").textContent();
            if(orderId.includes(rowOrderId)){
            rows.nth(i).locator("button").first().click();
            break;
            }
        }
    }
}
module.exports = {OrdersPage};