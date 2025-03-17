#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
#Los Scenarios son los tests (lo que antes era "it")
 Scenario: login succesfull
 Given I do "Vamos a empezar a picar código!"