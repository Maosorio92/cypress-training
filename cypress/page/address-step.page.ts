class AdressStepPage {    
    private proceedToCheckoutAdress: string;         

    constructor() {        
        this.proceedToCheckoutAdress = ".cart_navigation span";
    }

        
    public goToproceedToCheckoutAdress(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { AdressStepPage }