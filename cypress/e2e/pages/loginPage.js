import { CommonPage } from "./commonPage";

const usernameLocator = '[data-test="username"]'

export class LoginPage extends CommonPage{

  typeStandarUser() {
    cy.get(usernameLocator).type('standard_user');
  }

  typeCorrectPassword() {
    cy.get('[data-test="password"]').type('secret_sauce');
  }

  checkUrlIsNotMainPage() {
    cy.url().should('not.include', 'inventory.html');
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  correctLogin() {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
  }

  //BETTER PRACTICES


 typeUser (user) {
  cy.get('[data-test="username"]').type(user);
 }

 typePassword (password) {
  cy.get('[data-test="password"]').type(password);
 }
}