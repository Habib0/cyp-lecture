/// <reference types="cypress" />
import 'cypress-file-upload';
describe('upload file, keyboard keys',()=>{
    it('upload file',()=>{
        cy.visit('http://127.0.0.1:5500/firstTest.html')
        cy.get('[name="comments"]').type('{enter}hello{enter}how are you{selectall}{backspace}', {delay:100})


        cy.get('[name="filename"]').attachFile('download.png')
    })
})