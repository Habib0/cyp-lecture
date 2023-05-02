/// <reference types="cypress" />
describe("iframe",()=>{
    it.skip("iframe access",()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        
        cy.get('#frame')
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap).find('[class="glyphicon glyphicon-chevron-right"]').click()



        // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()
    })
    it.skip("iframe access second way",()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        
        cy.get('#frame')
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)
        .within(()=>{
            cy.wait(1000)
            cy.get('[class="glyphicon glyphicon-chevron-right"]').click().wait(1000)
            cy.get('[class="glyphicon glyphicon-chevron-right"]').click()
        })



        // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()
    })
    it("iframe access third way",()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        
        cy.get('#frame').then(($iframe)=>{
            const $body= $iframe.contents().find('body')
            cy.wrap($body).should('be.visible')
            cy.wrap($body).find('[class="glyphicon glyphicon-chevron-right"]').click()
        })
        



        // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()
    })
})