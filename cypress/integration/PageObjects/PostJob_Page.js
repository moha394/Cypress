/// <reference types="cypress" />

class PostJob
{
    PostJob() {
        cy.contains("Post Job").scrollIntoView()
        cy.wait(2000)
        cy.contains("Post Job").should('be.visible').click() 
    }

}
export default PostJob