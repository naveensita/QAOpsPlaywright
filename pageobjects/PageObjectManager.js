const {CheckoutPage} = require("./CheckoutPage");
const {DashboardPage} = require("./DashboardPage");
const {LoginPage} = require("./LoginPage");
const {OrdersPage} = require("./OrdersPage");

class PageObjectManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.ordersPage = new OrdersPage(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getOrdersPage(){
        return this.ordersPage;
    }

}
module.exports = {PageObjectManager};