///<reference types = "cypress"/>
export class manager_resources{

    //input fields for add_customers
    get add_first_name(){
        return cy.get('[ng-model="fName"]')
    }
    get add_last_name(){
        return cy.get('[ng-model="lName"]')

    }
    get add_post_code(){
        return cy.get('[ng-model="postCd"]')
    }
    //buttons for add_customers
    get add_submitform(){
        return cy.get('button').last().contains('Add Customer')
    }
    //selection fields for open_account
    get open_customer(){
        return cy.get('[ng-model="custId"]')
    }
    get open_currency(){
        return cy.get('[ng-model="currency"]')
    }
    //buttons for open_customers
    get open_submitform(){
        return cy.get('button').contains('Process')
    }
    //input field for customers
    get search(){
        return cy.get('[ng-model="searchCustomer"]')
    }
    //customer information
    get first_name(){
        return cy.get('.ng-binding').eq(1)
    }
    get last_name(){
        return cy.get('.ng-binding').eq(2)
    }
    get postal_code(){
        return cy.get('.ng-binding').eq(3)
    }
    get account_number(){
        return cy.get('[ng-repeat="account"]')
    }
}