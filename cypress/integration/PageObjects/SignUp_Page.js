/// <reference types="cypress" />

class SignUp

{

    FillElements(firstname,lastname,email,password,confirmationPassword)
        {
            cy.get("#firstName").clear()
            cy.get("#firstName").should('be.visible').type(firstname)
            cy.get("#lastName").clear()
            cy.get("#lastName").should('be.visible').type(lastname)
            cy.get("#email").clear()
            cy.get("#email").should('be.visible').type(email)

            // This is very important to find the password Field 
            cy.get("#password").scrollIntoView().should('be.visible')
            cy.wait(500)
            cy.get("#password").clear()
            cy.get("#password").should('be.visible').type(password)
            cy.get("#confirmPassword").clear()
            cy.get("#confirmPassword").scrollIntoView().should('be.visible').type(confirmationPassword)
            cy.get("#terms").scrollIntoView().should('be.visible').click();
            cy.get("[type='submit']").scrollIntoView().should('be.visible')
            cy.wait(500)
            cy.get("[type='submit']").click()
        }

}

export default SignUp