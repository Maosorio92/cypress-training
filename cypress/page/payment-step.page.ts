class PaymentStepPage {    
    private payment: string;  
    private proceedToCheckoutPayment: string; 
    private confirmation: string;      

    constructor() {        
        this.payment = "[title='Pay by bank wire']";
        this.proceedToCheckoutPayment = ".cart_navigation [type='submit']";	    
        this.confirmation = "#center_column > div > p > strong"
    }

        
    public goToPayment(): void {
        cy.get(this.payment).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutPayment).click()
    }

    public getConfirm(): any {
        return cy.get(this.confirmation)
    }
}

export { PaymentStepPage }
