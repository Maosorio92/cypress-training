class ShippingStepPage {
    private check: string;    
    private proceedToCheckoutAdress: string;         

    constructor() {
        this.check = "#uniform-cgv";
        this.proceedToCheckoutAdress = "button[name='processCarrier']";	    
    }

    
    public acceptTerms(): void {
        cy.get(this.check).click()
    }
    
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { ShippingStepPage }
