import {MenuContentPage} from "../page/index";
import {ProductslistPage} from "../page/index";
import {ShopingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AdressStepPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {PaymentStepPage} from "../page/index";

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
    productsListPage.goToproductList();
    productsListPage.goToproceedToCheckout();
    shopingCartPage.goToproceedToCheckoutSummary();
    loginPage.writeEmail("aperdomobo@gmail.com");
    loginPage.writePassword("WorkshopProtractor");
    loginPage.goToSubmit();
    adressStepPage.goToproceedToCheckoutAdress();
    shippingStepPage.getCheck();
    shippingStepPage.goToproceedToCheckoutShipping();
    paymentStepPage.goTopayment();
    paymentStepPage.goToproceedToCheckoutPayment();
    paymentStepPage.getConfirm();

    // cy.get("[style*=' display: block;'] .button-container > a").click();
    // cy.get(".cart_navigation span").click();

    // El resto del flujo de la prueba....
  });
});


