Feature: Login to JAMTANGAN

    As a valid user
    I want to log in to JAMTANGAN

    Scenario: Valid Login
    Given I open login page
    When I submit login 
    Then I should see home page
