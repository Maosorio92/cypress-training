class ProductslistPage {
    private productList: string;
    private proceedToCheckoutProduct: string;     

    constructor() {
        this.productList ="#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckoutProduct ="[style*='display: block;'] .button-container > a";
    }

    
    public goToProductList(): void {
        cy.get(this.productList).click()
    }
    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutProduct).click()
    }
}

export { ProductslistPage }
