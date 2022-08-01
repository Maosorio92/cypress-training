class ProductslistPage {
    private productList: string;
    private proceedToCheckoutProduct: string;     

    constructor() {
        this.productList ="#center_column> ul > li > div a[title='Add to cart']";
	    // Here, this selector was improved in order to avoid using classes.
        this.proceedToCheckoutProduct ="[style*='display: block;'] [title='Proceed to checkout']";
	    // Here, this selector was improved in order to avoid using classes.
        // Besides, this is more clear for the one who is reading it.
    }

    
    public goToProductList(): void {
        cy.get(this.productList).click()
    }
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutProduct).click()
    }
}

export { ProductslistPage }
