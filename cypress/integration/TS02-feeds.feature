Feature: Follow feeds via crispyApp

    As a user of crispy-succotash (crispyApp) application, I want to be able to add multiple feeds, add comments to their feeds items, bookmark some feeds etc.

    Background: user is logged in
        Given I visit the url of the crispyApp
        When I click on "Login" button
        And I enter "username1" and "p@ssword123" in "PLEASE SIGN IN" form
        Then I should be logged in the crispyApp

    Scenario Outline: check if user can add feeds
        When I click on "New Feed" button
        And I enter "<feedUrl>"
        Then "<feedUrl>" should be added to My feeds
        Examples:
            | feedUrl                                     |
            | http://www.nu.nl/rss/Algemeen               |
            | https://feeds.feedburner.com/tweakers/mixed |

    Scenario: check if user can add comments to a feed item
        When I click on "My Feeds" button
        And I click on the first feed from the list of feeds in Title column
        And I click on the first feed item the list of feed items in Title column
        And I type "nice article" as comment
        Then The comment "nice article" should be added to the feed item successfully

    Scenario Outline: check if user can bookmark feed(s)
        When I click on the feed with "<title>"
        And I click on "heartSymbol" button
        And I click on "Bookmarked" button
        Then I should "be" able to see the feed with "<title>"
        When I uncheck the heartSymbol from the feed with "<title>"
        And I click on "Bookmarked" button
        Then I should "not be" able to see the feed with "<title>"
        Examples:
            | title         |
            | NU - Algemeen |

