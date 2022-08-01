class ShopingCartPage {    
    private proceedToCheckoutSummary: string;     

    constructor() {        
        this.proceedToCheckoutSummary =".cart_navigation [title='Proceed to checkout']";
	    // Here, this selector was improved. I could not avoid classes,
        // but this one is more clear for the one who is reading it, besides an attribute is more recommended than a tag (span).
    }
    
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutSummary).click()
    }
}

export { ShopingCartPage }
