class LoginPage {
    private email: string;
    private password: string;
    private submit: string;           

    constructor() {
        this.email ="#email";
        this.password ="#passwd";
        this.submit = "[name=SubmitLogin]";        
    }
    
    public signIn(userEmail :string, userPassword : string): void {
        cy.get(this.email).type(userEmail)
        cy.get(this.password).type(userPassword)
        cy.get(this.submit).click()
    }      
}

export { LoginPage }
