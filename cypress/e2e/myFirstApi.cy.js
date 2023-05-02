/// <reference types="cypress" />
import 'cypress-plugin-api'
describe('get, post, update, delete',()=>{
    it.only('get data',()=>{
        cy.api({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                "authorization": "Bearer e9298223617de9a75ee90cd77e91a7710f465bb286f42d5ad46a565aa77d445f"
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(200)
        })
    })
    it('post data',()=>{
        cy.api({
            method: "POST",
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                "authorization": "Bearer e9298223617de9a75ee90cd77e91a7710f465bb286f42d5ad46a565aa77d445f"
            },
            body:{
                
                    "name": "automated07",
                    "email": "automated007@predovic.info",
                    "gender": "male",
                    "status": "active"
               
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(201)
            expect(resp.body.name).to.eq('automated07')
        })
    })
    it('put data',()=>{
        cy.request({
            method: "PATCH",
            url: 'https://gorest.co.in/public/v2/users/4405',
            headers:{
                "authorization": "Bearer e9298223617de9a75ee90cd77e91a7710f465bb286f42d5ad46a565aa77d445f"
            },
            body:{
                
                      "name": "cypAutomation",
                      
               
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(200)
        })
    })
    it('delete data',()=>{
        cy.request({
            method: "DELETE",
            url: 'https://gorest.co.in/public/v2/users/4403',
            headers:{
                "authorization": "Bearer e9298223617de9a75ee90cd77e91a7710f465bb286f42d5ad46a565aa77d445f"
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(204)
        })
    })
})