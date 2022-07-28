///<reference types = "cypress"/>
export class object_user_account{

    //account number selector
    get account_selector(){
        return cy.get('[ng-model="accountNo"]')
    }
    //account information
    get account_info(){
        return cy.get('.ng-binding').eq(2)
    }
    //actions buttons
    get transactions_btn(){
        return cy.get('[ng-click="transactions()"]')
    }
    get deposit_btn(){
        return cy.get('[ng-click="deposit()"]')
    }
    get withdrawl_btn(){
        return cy.get('[ng-click="withdrawl()"]')
    }

    //input (amounts)
    get amount_input(){
        return cy.get('[ng-model="amount"]')
    }

    //submit deposit, withdrawl buttons
    get submitdeposit_btn(){
        return cy.get('[value=""]').contains('Deposit')
    }
    get submitwithdrawl_btn(){
        return cy.get('[value=""]').contains('Withdraw')
    }

    //deposit, withdrawl message sucessful
    get deposit_message(){
        return cy.get('[ng-show="message"]').contains('Deposit Successful')
    }
    get withdrawl_message(){
        return cy.get('[ng-show="message"]').contains('Transaction successful')
    }
    get withdraw_not_possible(){
        return cy.get('[ng-show="message"]').contains('Transaction Failed. You can not withdraw amount more than the balance.')
    }
}