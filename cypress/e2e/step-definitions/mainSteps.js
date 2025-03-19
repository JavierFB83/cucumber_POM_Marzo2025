import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage} from "../pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();

Given("I check url include the endpoint inventory.html", () => {
  mainPage.checkUrlMainPage();
 });


