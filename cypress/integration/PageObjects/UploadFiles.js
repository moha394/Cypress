/// <reference types="cypress" />

class UploadFile{

uploadFile()
{

    const fileName = 'File.jpg';
    cy.fixture(fileName).then(function(fileContent)
      {
        cy.get('#file')
        .upload({ fileContent, fileName, mimeType: 'application/jpg' });
      })
     cy.get('[data-cy=begin]').scrollIntoView().should('be.visible')
     cy.wait(2000)
     cy.get('[data-cy=begin]').click()

}








}
export default UploadFile