import { CommonPage } from "./commonPage";

export class MainPage extends CommonPage{

  checkUrlMainPage () {
    cy.url().should('include', 'inventory.html');
  }

}