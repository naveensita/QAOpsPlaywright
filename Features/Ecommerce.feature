Feature: Ecommerce Validation

  @Regression
  Scenario: Placing the order
    Given the user is logged into the Ecommerce application with "naveenpathak715@gmail.com" and "Sonu123@#"
    When the user adds "ZARA COAT 3" to the cart
    Then "ZARA COAT 3" should be displayed in the cart
    When the user enters valid checkout details "india" and "naveenpathak715@gmail.com" and places the order
    Then the order should be present in the order history

  @Validation
  Scenario Outline: Sign In with incorrect username/password and verify the login error.
    Given the user is logged into the Ecommerce2 application with "<username>" and "<password>"
    Then Verify error message is displayed
    Examples:
        | username         | password     |
        | naveenpathak     | Sonu123@#    |
        | hello@gmail.com  | Iamhello@12  |