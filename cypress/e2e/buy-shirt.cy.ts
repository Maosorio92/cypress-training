import {
  MenuContentPage,
  ProductslistPage,
  ShopingCartPage,
  LoginPage,
  AdressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductslistPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const adressStepPage = new AdressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.goToProductList();
    productsListPage.proceedToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");
    adressStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.goToPayment();
    paymentStepPage.proceedToCheckout();
    paymentStepPage.getConfirm().should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
