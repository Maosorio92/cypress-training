class ShopingCartPage {    
    private proceedToCheckoutSummary: string;     

    constructor() {        
        this.proceedToCheckoutSummary =".cart_navigation span";
    }
    
    public goToproceedToCheckoutSummary(): void {
        cy.get(this.proceedToCheckoutSummary).click()
    }
}

export { ShopingCartPage }