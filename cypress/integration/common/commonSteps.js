import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
/*********************************************Given************************************** */
Given('I visit the url of the crispyApp', () => {
    cy.visit('http://localhost:8000/');
})

/**********************************************When*************************************** */
When('I click on {string} button', (button) => {
    switch (button) {
        case 'Login': cy.get('a[href="/accounts/login/"]').click(); break;
        case 'Sign Up': cy.get('a[href="/accounts/register/"]').click(); break;
        case 'New Feed': cy.get('a[href="/feeds/new/"]').should('be.visible').click(); break;
        case 'My Feeds': cy.get('a[href="/feeds/my/"]').should('be.visible').click(); break;
        case 'heartSymbol': cy.get('[href="/feeds/1/toggle-bookmark/"] > .glyphicon').click(); break;
        case 'Bookmarked': cy.get('a[href="/feeds/bookmarked/"]').should('be.visible').click(); break;
    }
})

When('I enter {string} and {string} in {string} form', (username, password, formType) => {
    switch (formType) {
        case 'PLEASE SIGN IN':
            cy.get('#id_username').type(username).type('{enter}');
            cy.get('#id_password').type(password).type('{enter}'); break;
        case 'SIGN UP':
            cy.get('input[name="username"]').type(username);
            cy.get('#id_password1').type(password);
            cy.get('#id_password2').type(password);
            cy.get('input[name="submit"]').should('be.visible').click();
    }


})
/**********************************************Then***************************************** */
Then('I should be logged in the crispyApp', () => {
    cy.get('a[href="/accounts/logout/"]').should('be.visible');
})