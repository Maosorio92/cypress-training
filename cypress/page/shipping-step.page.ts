class ShippingStepPage {
    private check: string;    
    private proceedToCheckoutAdress: string;         

    constructor() {
        this.check = "[name=cgv]";
        this.proceedToCheckoutAdress = ".cart_navigation span";
    }

    
    public getCheck(): void {
        cy.get(this.check).click()
    }
    
    public goToproceedToCheckoutShipping(): void {
        cy.get(this.proceedToCheckoutAdress).click()
    }
}

export { ShippingStepPage }