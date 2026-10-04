class ApiUtils{
    constructor(apiContext, loginPayload ){
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
    
    async createOrder(orderPayload){
        let response = {};
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
module.exports = {ApiUtils};