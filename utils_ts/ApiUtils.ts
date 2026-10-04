// Define or export the login payload shape
export interface LoginPayload {
  userEmail: string;
  userPassword: string;
}
export interface OrderPayload {
  orders: Array<{
    country: string;
    productOrderedId: string;
  }>;
  [key: string]: any;    
}

export class ApiUtils{
    apiContext: any;
    loginPayload: LoginPayload;

    constructor(apiContext: any, loginPayload: LoginPayload ){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken(){
        const appUrl = "https://rahulshettyacademy.com/api/ecom/auth/login";
        const loginResponse = await this.apiContext.post(appUrl,
            {     
                data : this.loginPayload
            });
        const loginResponseJson = await loginResponse.json();
        console.log(loginResponseJson);
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }
    
    async createOrder(orderPayload: OrderPayload){
        let response = {token: String, orderId: String};
        response.token = await this.getToken();
        console.log(response.token);
        const createOrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
                data : orderPayload,
                headers:{
                    'Authorization' : response.token,
                    'Content-Type' : 'application/json'
                }
            });
        const orderResponseJson = await createOrderResponse.json();
        console.log(orderResponseJson);
        
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }
}