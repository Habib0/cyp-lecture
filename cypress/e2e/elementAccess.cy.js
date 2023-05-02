/// <reference types="cypress" />

describe('assertion explicit, implicit assertion',()=>{
    it('element access',()=>{
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.get('[id="get-input"]').within(()=>{
            cy.get('[type="text"]').type('hello world')
            cy.contains('button', 'Show Message').click()
        })
        // cy.get('[type="text"]').type('hello world')
    })
})














