// espn.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const sizes = ['iphone-x', 'macbook-15']
//macbook-15

describe('My First Test', () => {
    sizes.forEach((size) => {

        it(`Selects Top NBA Headline - ${size}`, () => {
            cy.viewport(size)

            cy.visit('https://www.espn.com/')

            cy.get('#global-nav-mobile-trigger > span').then(($mobile) => {
                if($mobile.is(`:visible`))
                {
                    $mobile.click()
                    cy.contains('NBA').click()
                }
                else
                {
                    cy.get('[name="&lpos=sitenavdefault+sitenav_nba"]').click()
                }

            })

            
            
            //using data story id to identify here so when the day changes, the top story will change and therefore the story id at the top of the headlines will be different

            //now, uses the first elemnt in the headline stack section
            cy.get('.mobile-tablet-only > .headlineStack').then(($mobile) => {
                //mobile
                if($mobile.is(`:visible`))
                {
                    const screen = cy.get('.mobile-tablet-only > .headlineStack').first();
                    screen.click();
                }
                //laptop
                else
                {
                    const screen = cy.get('.col-three > .headlineStack').first();
                    screen.click();
                }

            })

            //first headline: &lpos=nbanba:feed:xx:coll:headlines:1
            //second headline: &lpos=nbanba:feed:xx:coll:headlines:2



            //#1 sub challenge 1 is to also test on MAcbook 15 inch (cypress preset)
            /*#2 in the future, random class names (no more headline #1,#2,#3 just alpha, etc) 
                    and still want these to run when you go to dynamic classes
    
            */



        })

    })

    //Passing test case
    xit('Does not do much!', () => {
        expect(true).to.equal(true)
    })

    //Failing test case
    xit("Does not do much either", () => {
        expect(true).to.equal(false)
    })


})

