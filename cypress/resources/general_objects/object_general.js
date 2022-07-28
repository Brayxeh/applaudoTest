///<reference types = "cypress"/>
export class general_objects{

    //main buttons objects
    get home_btn(){
        return cy.get('[ng-click="home()"]')
    }
    get logout_btn(){
        return cy.get('[ng-click="byebye()"]')
    }

    //title objects
    get page_Title(){
        return cy.get('.mainHeading')
    }

}