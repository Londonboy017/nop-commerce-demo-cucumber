Feature: Register
  As user I want to register into nop commerce website
  @Sanity@Regression@check
  Scenario: verify User Should Navigate To Register Page Successfully
    Given I am on homepage
    When I click on register link
    Then Verify the register text
  @Smoke@Regression
  Scenario Outline: verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory
    Given I am on homepage
    When I click on register link
    And I click on register button
    Then Verify the all error messages of field "<fieldName>"as "<errorMessage>"
    Examples:
      | fieldName       | errorMessage            |
      | FirstName       | First name is required. |
      | LastName        | Last name is required.  |
      | Email           | Email is required.      |
      | Password        | Password is required.   |
      | ConfirmPassword | Password is required.   |

  @Regression
  Scenario Outline: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I select "<gender>"
    And I enter firstname "<firstName>"
    And I enter lastname "<lastName>"
    And I select "<day>","<month>","<year>" of DOB
    And I enter email "<email>" for register
    And I enter password "<password>"for register
    And I enter confirm password "<confirmPassword>"for register
    And I click on register button
    Then Verify registration successful
    Examples:
      | gender | firstName | lastName | day | month  | year | email            | password | confirmPassword |
      | Male   | Jyvala    | Van      | 11  | August | 2000 | jwy113@gmail.com | Joy123   | Joy123          |
      | Female | Sira      | Karry    | 14  | July   | 1998 | amol1@gmail.com  | Amol12   | Amol12          |
