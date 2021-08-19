import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
/*******************************************************Given********************************************************************* */



/************************************************ ********When*******************************************************************************/

When('I enter {string}', (feedUrl) => {
    cy.get('input[name="feed_url"]').type(feedUrl);
    cy.get('input[name="submit"]').click();
})

When('I click on the first feed from the list of feeds in Title column', () => {
    cy.get('a[href="/feeds/1"]').should('be.visible').click();
})

When('I click on the first feed item the list of feed items in Title column', () => {
    cy.get('tr > td > a').first().should('be.visible').click();
})

When('I type {string} as comment', (comment) => {
    cy.get('.CodeMirror').should('be.visible').type(comment);
    cy.get('input[name="submit"]').click();
})

When('I click on the feed with {string}', (feedTitle) => {
    cy.get('tr > td > a').contains(feedTitle).click();
})

When('I uncheck the heartSymbol from the feed with {string}', (feedTitle) => {
    cy.get('tr > td > a').contains(feedTitle).click();
    cy.get('[href="/feeds/1/toggle-bookmark/"] > .glyphicon').click();
})
/***********************************************************Then**************************************************************************** */
Then('{string} should be added to My feeds', (feedUrl) => {
    cy.get('a[href="/feeds/my/"]').click();
    cy.contains(feedUrl).should('be.visible');
})

Then('The comment {string} should be added to the feed item successfully', (comment) => {
    cy.contains('Comment added successfully').should('be.visible');
    cy.contains(comment).should('be.visible');
})

Then('I should {string} able to see the feed with {string}', (visiblity, feedTitle) => {
    switch (visiblity) {
        case 'be': cy.get('tr > td > a').contains(feedTitle).should('be.visible'); break;
        case 'not be': cy.contains(feedTitle).should('not.exist'); break;
    }
})