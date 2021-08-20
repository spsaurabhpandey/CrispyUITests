Feature: Creation of user account and login

    I want to sign up and then be able to login to crispy-succotash application


    #@ignore tag is used to ignore a particular scenario during test run.
    #@ignore
    Scenario Outline: sign up of new user(s) in the crispyApp
        Given I visit the url of the crispyApp
        When I click on "Sign Up" button
        And I enter "<username>" and "<password>" in "SIGN UP" form
        Then I should be logged in the crispyApp
        Examples:
            | username  | password    |
            | username1 | p@ssword123 |


    Scenario: check if user can login using valid credentials
        Given I visit the url of the crispyApp
        When I click on "Login" button
        And I enter "username1" and "p@ssword123" in "PLEASE SIGN IN" form
        Then I should be logged in the crispyApp