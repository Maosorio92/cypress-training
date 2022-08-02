import {
  MenuContentPage,
  ProductslistPage,
  ShopingCartPage,
  LoginPage,
  AdressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage : MenuContentPage;
  let productsListPage : ProductslistPage;
  let shopingCartPage : ShopingCartPage;
  let loginPage : LoginPage;
  let adressStepPage : AdressStepPage;
  let shippingStepPage : ShippingStepPage;
  let paymentStepPage : PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductslistPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage();
    adressStepPage = new AdressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then should be bought a t-shirt", () => {
    const userEmail="aperdomobo@gmail.com";
    const userPassword="WorkshopProtractor";
    menuContentPage.visitMenuContentPage();

    menuContentPage.goToTShirtMenu();
    productsListPage.goToProductList();
    productsListPage.proceedToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.signIn(userEmail, userPassword);
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
