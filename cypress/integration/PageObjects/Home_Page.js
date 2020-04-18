

class HomePage

{
    // This method for Open the SignUp page
    Open_SignUp_Page(){ 
        cy.contains("sign up").scrollIntoView().should('be.visible')
        cy.wait(500)
        cy.contains("sign up").click()
    }

    // This method for Open the Login page
    Open_Login_Page()
    {   cy.contains("log in").should('be.visible').click()}
}
export default HomePage