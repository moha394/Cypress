/// <reference types="cypress" />

class LoginPage
{

   fillElements(email,password)
   {
        cy.get("#email").should('be.visible').type(email)
        cy.get("#password").should('be.visible').type(password)
        cy.get("[type='submit']").scrollIntoView().should('be.visible').click()
        
   }


}
export default LoginPage