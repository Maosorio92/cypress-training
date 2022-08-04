import { contains } from "cypress/types/jquery";

class ProductslistPage {
    private productList: string;
    private proceedToCheckoutProduct: string;  
    private shirtsList : string;   

    constructor() {
        this.productList ="a[title='Add to cart']";	    
        this.proceedToCheckoutProduct ="a[title='Proceed to checkout']";	
        this.shirtsList = ".product-container";    
    }

    
    public addTShirtToCart(name:string): void {
        this.findProductByName(name).find(this.productList).click()        
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutProduct).click()
    }
    
    private findProductByName(name:string): any {
        return cy.get(this.shirtsList).filter(`:contains('${name}')`)
    }
}

export { ProductslistPage }
