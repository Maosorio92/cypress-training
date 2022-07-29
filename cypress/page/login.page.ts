class LoginPage {
    private email: string;
    private password: string;
    private submit: string;           

    constructor() {
        this.email ="#email";
        this.password ="#passwd";
        this.submit = "[name=SubmitLogin]";        
    }
    
    public signIn(a :string, b : string): void {
        cy.get(this.email).type(a)
        cy.get(this.password).type(b)
    }
    public goToSubmit(): void {
        cy.get(this.submit).click()
    }    
}

export { LoginPage }
