class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private tDressesMenu: string;

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";	
        this.tDressesMenu = "#block_top_menu > ul > li > a[title='Dresses']";	    
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }
    public goToDressesMenu(): void {
        cy.get(this.tDressesMenu).click()
    }
}

export { MenuContentPage }
