class ShopingCartPage {    
    private proceedToCheckoutSummary: string;     

    constructor() {        
        this.proceedToCheckoutSummary =".cart_navigation [title='Proceed to checkout']";	   
    }
    
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutSummary).click()
    }
}

export { ShopingCartPage }
