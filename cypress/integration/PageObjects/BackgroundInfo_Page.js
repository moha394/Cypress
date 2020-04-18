/// <reference types="cypress" />

class BackgroundInfo{


fillElements(job_title,job_description,job_Min_Salary,job_Max_Salary,job_skill,job_category,job_date)
{

    cy.wait(500)
    cy.get("#jobTitle").scrollIntoView().should('be.visible').type(job_title) //Job_title
    cy.get("#jobDescription").should('be.visible').type(job_description) //Job_description
   
    cy.get('#skills').scrollIntoView().should('be.visible')//Job_Skills
    cy.wait(500)
    cy.get("#skills").click()
    cy.get("li[role = 'option']").contains(job_skill).click();

    cy.get('.ant-notification-close-icon.anticon.anticon-close').click() //close the verify account message

   
    cy.get('#jobCategoryId').scrollIntoView().should('be.visible') //scroll to the jobcategory element
    //must wait
    cy.wait(500)
    cy.get("#jobCategoryId").click()//Job Category
    cy.get("li[role = 'option']").contains(job_category).click();
    


    //click the date picker so the text field appear to type an input then press enter
    cy.get('.ant-calendar-picker-input.ant-input').click()
    cy.get('.ant-calendar-input').type(job_date+'{enter}')
    



    //This section is about working with slider 
    cy.get('[role=slider]').eq(0).invoke("attr","aria-valuenow").then(function (value)
        {
            
            var stepForMinValue =(job_Min_Salary-value)/100
            if(stepForMinValue>0)
                {
                    cy.get('[role=slider]').eq(0).click()
                    for(let n = 0; n < stepForMinValue; n ++){cy.get('[role=slider]').eq(0).type('{rightarrow}')}
                }
            else
                {
                    cy.get('[role=slider]').eq(0).click()
                    for(let n = 0; n < -(stepForMinValue); n ++){cy.get('[role=slider]').eq(0).type('{leftarrow}')}
                }
            
        });
        
    cy.get('[role=slider]').eq(1).invoke("attr","aria-valuenow").then(function (value)
        {
            var stepForMaxValue = (job_Max_Salary-value)/100 
            if(stepForMaxValue>0)
            {
                cy.get('[role=slider]').eq(1).click()
                for(let n = 0; n < stepForMaxValue; n ++){cy.get('[role=slider]').eq(1).type('{rightarrow}')}
            }
            else
            {
                cy.get('[role=slider]').eq(1).click()
                for(let n = 0; n < -(stepForMaxValue); n ++){cy.get('[role=slider]').eq(1).type('{leftarrow}')}
            }
        });

                 
        cy.contains("Next").should('be.visible').click() 
        cy.wait(3000)

}

ClientLogOut()
{
    
    cy.get(".header-buttons > svg").scrollIntoView().should('be.visible')
    cy.wait(2000)
    cy.get(".header-buttons > svg").click()
    cy.contains("Logout").should('be.visible').click()

}




}
export default BackgroundInfo