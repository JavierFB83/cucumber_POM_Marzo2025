#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
# Los Scenarios son los tests (lo que antes era "it")
 Scenario: login happy path
  Given I type standar user in login page
  And I type the correct password in login page
  And I check that url doesn't contain the endpoint inventory.html
  When I click on the login button
  Then I check url include the endpoint inventory.html

Scenario: simple login
  Given I login with valid user and password

 Scenario: Better login
  Given I type the user name "standard_user"
  And I type the password "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

 Scenario: The very best login test
  Given I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

