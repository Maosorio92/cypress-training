class LoginPage {
    private userEmail: string;
    private userPassword: string;
    private submit: string;           

    constructor() {
        this.userEmail ="#email";
        this.userPassword ="#passwd";
        this.submit = "[name=SubmitLogin]";        
    }
    
    public signIn(a :string, b : string): void {
        cy.get(this.userEmail).type(a)
        cy.get(this.userPassword).type(b)
        cy.get(this.submit).click()
    }      
}

export { LoginPage }
