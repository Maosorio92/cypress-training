class AdressStepPage {    
    private proceedToCheckoutAdress: string;         

    constructor() {        
        this.proceedToCheckoutAdress = "[type='submit'][name='processAddress']";
	    // Here, this selector can be improved. Using of classes is avoided,
        // attributes are good selectors.
    }

        
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { AdressStepPage }
