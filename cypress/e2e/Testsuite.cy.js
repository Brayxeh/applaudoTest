/// <reference types = "cypress"/>
import { users_action } from "../keywords/key_users_actions";
import { Login_actions } from "../keywords/Key_Login";
import { general_keywords } from "../keywords/key_general";
import { manager_actions } from "../keywords/key_manager_actions";
const general = new general_keywords();
const users_ac = new users_action();
const managers_ac = new manager_actions();
const login_ac = new Login_actions();
describe('E1- Making a deposit into user account', function () {
    beforeEach('Upload data', function () {
        cy.fixture('bankofdata').then(function (sdata) {
            this.data = sdata;
        })
    })
    it('Login to user account', function () {
        cy.visit('/')
        login_ac.login_Customer(this.data.user.customer)
    });
    it('Submit a deposit into user account and verify if the amount was applied', function () {
        users_ac.makeDeposit(this.data.account.number1, this.data.deposit.amount3)
    });
    describe('E2 - Make a withdraw from user accounts', function () {
        it('Login to user account', function () {
            general.GoToHome()
            login_ac.login_Customer(this.data.user.customer)
        });
        it('Submit a withdaw from the user account and verify that amount was debited', function () {
            users_ac.makeWithdraw(this.data.account.number1, this.data.deposit.amount3)
        });
        describe('E3 - Add a customer to bank database using manager account', () => {
            it('Login to Manager account and redirecting to add customer feature', function () {
                general.GoToHome()
                login_ac.login_Manager('Add_customer')
            });
            it('Adding a customer into bank database', function () {
                managers_ac.addcustomer(this.data.addcustomer.firstname, this.data.addcustomer.lastname, this.data.addcustomer.postalcode)
            });
            describe('E4 - Add a bank account to an existing customer using manager account', function () {
                it('Going to open account feature', function () {
                    general.GoToHome()
                    login_ac.login_Manager('Open_account')
                });
                it('Submitting a new account for an exisiting customer', function () {
                    managers_ac.openaccount(this.data.user.customer, this.data.currency.dollar)
                });
            });
        });
    });
});


