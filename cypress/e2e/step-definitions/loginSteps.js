import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

Given("I type standar user in login page", () => {
  loginPage.typeStandarUser();
 });

Given("I type the correct password in login page", () => {
  loginPage.typeCorrectPassword();
});

Given("I check that url doesn't contain the endpoint inventory.html", () => {
  loginPage.checkUrlIsNotMainPage();
});

Given("I click on the login button", () => {
  loginPage.clickLoginButton();
});

Given("I login with valid user and password", () => {
  loginPage.correctLogin();
});





