/// <reference types = "cypress"/>
export class Login_resource {

    //Account type page objects
    get customerLogin(){
      return cy.get('[ng-click="customer()"]')
    }
    get managerLogin(){
      return cy.get('[ng-click="manager()"]')
    }

    //Customer name page objects
    get customerName(){
      return cy.get('[ng-model="custId"]')
    }
    get loginButton(){
        return cy.get('button').contains('Login')
    }
    get customerWelcomeMessage(){
      return cy.get('.fontBig')
    }

    //manager actions page objects

    get addCustomer(){
        return cy.get('[ng-click="addCust()"]')
    }
    get openAccount(){
        return cy.get('[ng-click="openAccount()"]')
    }
    get customerList(){
        return cy.get('[ng-click="showCust()"]')
    }



}