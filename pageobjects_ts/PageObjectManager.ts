import { LoginPage } from "./LoginPage";
import {CheckoutPage} from "./CheckoutPage";
import { DashboardPage } from "./DashboardPage";
import { OrdersPage } from "./OrdersPage";
import { Page } from "@playwright/test";


export class PageObjectManager{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    checkoutPage: CheckoutPage;
    ordersPage: OrdersPage;
    page: Page;

    constructor(page: Page){
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