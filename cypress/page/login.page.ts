class LoginPage {
    private Email: string;
    private Password: string;
    private submit: string;           

    constructor() {
        this.Email ="#email";
        this.Password ="#passwd";
        this.submit = "[name=SubmitLogin]";        
    }
    
    public signIn(userEmail :string, userPassword : string): void {
        cy.get(this.Email).type(userEmail)
        cy.get(this.Password).type(userPassword)
        cy.get(this.submit).click()
    }      
}

export { LoginPage }
