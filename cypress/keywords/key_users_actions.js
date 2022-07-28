/// <reference types ="cypress"/>
import { object_user_account } from "../resources/account_objects/object_user_account";
const objects = new object_user_account();
let balance
let final_balance
export class users_action{
    

    makeDeposit(accountNo,amount){
        objects.account_selector.should('be.visible').select(accountNo)
        objects.deposit_btn.should('be.visible').and('contain', 'Deposit').click()
        objects.account_info.then(($amount) => { 
            balance = $amount.text(); 
            objects.amount_input.should('have.value', '').type(amount).should('have.value', amount)
            objects.submitdeposit_btn.should('be.visible').click()
            objects.deposit_message.should('be.visible').should('have.text', 'Deposit Successful')
            final_balance = Number(balance) + Number(amount)
            objects.account_info.should('have.text', final_balance)
        })
    }
    makeWithdraw(accountNo, amountToWithdraw){
        objects.account_selector.should('be.visible').select(accountNo)
        objects.withdrawl_btn.should('be.visible').and('contain', 'Withdrawl').click()
        objects.account_info.then(($amount) => { 
            balance = $amount.text(); 
            objects.amount_input.should('have.value', '').type(amountToWithdraw).should('have.value', amountToWithdraw)
            objects.submitwithdrawl_btn.should('be.visible').click()
            if(parseInt(balance) > parseInt(amountToWithdraw)) {
            final_balance = Math.max(0, parseInt(balance) - parseInt(amountToWithdraw))
            objects.account_info.should('have.text', final_balance)
            objects.withdrawl_message.should('be.visible').should('have.text', 'Transaction successful')
            } else {
                objects.withdraw_not_possible.should('be.visible').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
            }
        })

    }



}