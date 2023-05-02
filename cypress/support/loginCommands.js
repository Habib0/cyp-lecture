import loginPage from "../pageObjects/loginPage"
const loginObjects = new loginPage()
Cypress.Commands.add("loginDemo",()=>{
   // cy.session("login",()=>{
    cy.visit('/')
    cy.get(loginObjects.uName).type(Cypress.env('userName'))
    cy.get(loginObjects.pass).type(Cypress.env('password'))
    cy.contains('button', 'Submit').click()
    cy.get('[id="error"]').should('have.text', 'Your username is invalid!')
    cy.contains('Your username is invalid!').should('exist')
   //  cy.getCookie().should('')
   // }) 
})
Cypress.Commands.add("logout",()=>{
   cy.contains('a', 'Log out').click()
})



//  textpassword{selectall}{backspace}', {delay:100}

