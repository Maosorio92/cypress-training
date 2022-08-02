class ProductslistPage {
    private productList: string;
    private proceedToCheckoutProduct: string;     

    constructor() {
        this.productList ="a[title='Add to cart']";	    
        this.proceedToCheckoutProduct ="a[title='Proceed to checkout']";	    
    }

    
    public goToProductList(): void {
        cy.get(this.productList).click()
    }
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutProduct).click()
    }
}

export { ProductslistPage }
