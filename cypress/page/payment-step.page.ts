class PaymentStepPage {    
    private payment: string;  
    private proceedToCheckoutPayment: string; 
    private confirmation: string;      

    constructor() {        
        this.payment = "[title='Pay by bank wire']";
        this.proceedToCheckoutPayment = ".cart_navigation span";
        this.confirmation = "#center_column > div > p > strong"
    }

        
    public goTopayment(): void {
        cy.get(this.payment).click()
    }

    public goToproceedToCheckoutPayment(): void {
        cy.get(this.proceedToCheckoutPayment).click()
    }

    public getConfirm(): void {
        cy.get(this.confirmation).should(
            "have.text",
            "Your order on My Store is complete.",
        )
    }
}

export { PaymentStepPage }