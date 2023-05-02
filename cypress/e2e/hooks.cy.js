/// <reference types="cypress" />
describe('',()=>{
  // before
  // before each
  // after
  // after each
  before(()=>{
    cy.log('execute before hook')
  })
  beforeEach(()=>{
    cy.session('login',()=>{
      cy.visit('/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.contains('button', 'Login').click()
    })
  
   
  })
   it("first it block",()=>{
    cy.visit('/login')
    cy.contains('Admin').click()
    cy.log('first block run')
   })
   it("second block",()=>{
    cy.visit('/login')
    cy.contains('Dashboard').click()
    cy.log('second block run')
   })
   after(()=>{
    cy.log('execute after hook')
   })
   afterEach(()=>{
    cy.log('execute after each hook')
   })
})