/// <reference types="cypress" />

class LoginPageDemo{

    Login(Email , Password){
        cy
       
        .get('#Email').scrollIntoView().should('be.visible').type(Email)
        .get('#Password').scrollIntoView().should('be.visible').type(Password)
        .get('#RememberMe').scrollIntoView().should('be.visible').click()


        .get('form > .buttons > .button-1').scrollIntoView().should('be.visible').click()

    }



}

export default LoginPageDemo
