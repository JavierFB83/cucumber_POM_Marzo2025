Feature: Main test suite

Background:
  Given I visit "https://www.saucedemo.com/"
  When I login with valid user and password

  Scenario: Add a product to cart from products overview
    Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
    When I click on the element with data-test "add-to-cart-sauce-labs-backpack"
    And I check that the element with data-test "shopping-cart-badge" should "be.visible" 
    And I check that the element with data-test "shopping-cart-badge" contain the text "1"
    And I click on the element with data-test "shopping-cart-link"
    And I check that the url include the endpoint "cart.html"
    Then I check that the element with data-test "inventory-item-name" contain the text "Sauce Labs Backpack"

