Feature: Error Validation

  @Validation
  Scenario Outline: Sign In with incorrect username/password and verify the login error.
    Given the user is logged into the Ecommerce2 application with "<username>" and "<password>"
    Then Verify error message is displayed
    Examples:
        | username         | password     |
        | naveenpathak     | Sonu123@#    |
        | hello@gmail.com  | Iamhello@12  |