// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("assertCMD",()=>{
    cy.visit('https://xevenskills.com/')
    cy.url().should('include', 'xevenskills')
    .and('eq', 'https://xevenskills.com/')
    // cy.get('[class="paoc-popup-margin paoc-popup-mheading"]').should('be.visible')
    // cy.get('[class="paoc-close-popup paoc-popup-close"]').click()
    // cy.get('[class="logo-unit"]').should('be.visible')

    
    let expText= 'Announcement'
    var chkPop= cy.get('[class="paoc-popup-margin paoc-popup-mheading"]');
    (chkPop).then((popUp)=>{
        cy.get(popUp).click()
        let actText= popUp.text()
        // cy.log(actText)
        expect(actText).to.eq(expText)
        assert(actText, expText)
        cy.get('[class="paoc-close-popup paoc-popup-close"]').click()
    })
    cy.get('[class="header-login-button sign-up"]').click()
    cy.get('[id="stm-lms-register"]').should('be.visible')
    cy.xpath('//label[contains(text(), "Date of Birth")]//parent::div//input').type('08-01-1992')
    cy.get('[class="form-control disable-select"]').select('Male')
    

})

