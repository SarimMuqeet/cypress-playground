// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// espn.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const sizes = ['iphone-x', 'macbook-15']
//macbook-15

describe('Logging in to a Website', () => {
    it("Incorrect Password - GitHub", () => {
        
        cy.visit('https://github.com/')

        cy.get('div.d-flex.flex-justify-between > .d-flex > .btn-link > .octicon').click()

        cy.contains('Sign in').click()

        cy.get('#login_field').type('SarimMuqeet')

        cy.get('#password').type('HelloWorld')

        cy.get('.btn').click()

        expect('#js-flash-container > .flash')

    })



    it('Correct Password - Facebook', () => {
    
        const email = `nurosenetestacc@gmail.com`;
        const password = `NuroTest2021`;

        cy.visit('https://www.facebook.com/')

        cy.get('[data-testid=royal_email]').type('nurosenetestacc@gmail.com')

        cy.get('[data-testid=royal_pass]').type('NuroTest2021')

        cy.get('[data-testid=royal_login_button]').click()
    })


})

