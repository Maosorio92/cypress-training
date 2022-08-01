class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
	    // Here, this selector was improved in order to avoid the position of the list.
        // Besides, an attribute is being used.
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }
}

export { MenuContentPage }
