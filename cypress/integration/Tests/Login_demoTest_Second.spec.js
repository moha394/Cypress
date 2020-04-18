/// <reference types="cypress" />
import HomePage_Demo  from '../PageObjects/HomePage_Demo'
import LoginPageDemo from '../PageObjects/LoginPageDemo'
describe('Login Member', function(){

before(function(){

    cy.visit('https://demo.nopcommerce.com/')



})

it('This is Login Test',function(){

    const HomePageObject = new HomePage_Demo()
    HomePageObject.OpenLoginPage()

    const LoginPageDemoObject = new LoginPageDemo()
    LoginPageDemoObject.Login("moha12345@gmail.com","Bm0123456789")
    

})



})