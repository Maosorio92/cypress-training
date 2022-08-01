class ShippingStepPage {
    private check: string;    
    private proceedToCheckoutAdress: string;         

    constructor() {
        this.check = "[name=cgv]";
        this.proceedToCheckoutAdress = "[type='submit'][name='processCarrier']";
	    // Here, this selector was improved. Using of classes is avoided,
        // attributes are good selectors.
    }

    
    public acceptTerms(): void {
        cy.get(this.check).click()
    }
    
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { ShippingStepPage }
