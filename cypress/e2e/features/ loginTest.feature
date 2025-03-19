#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
#Los Scenarios son los tests (lo que antes era "it")
 Scenario: login happy path
  Given I type standar user in login page
  And I type the correct password in login page
  And I check that url doesn't contain the endpoint inventory.html
  When I click on the login button
  Then I check url include the endpoint inventory.html
