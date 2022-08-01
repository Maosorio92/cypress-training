class ShopingCartPage {    
    private proceedToCheckoutSummary: string;     

    constructor() {        
        this.proceedToCheckoutSummary =".cart_navigation span";
    }
    
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutSummary).click()
    }
}

export { ShopingCartPage }
