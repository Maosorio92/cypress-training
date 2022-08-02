class AdressStepPage {    
    private proceedToCheckoutAdress: string;         

    constructor() {        
        this.proceedToCheckoutAdress = "button[name='processAddress']";	    
    }

        
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { AdressStepPage }
