/// <reference types = "cypress"/>
import { Login_resource } from "../resources/Login_objects/object_login";
const loginrs = new Login_resource();

export class Login_actions{
    //customer user login
    login_Customer(customerName){
        loginrs.customerLogin.should('be.visible').and('have.text', 'Customer Login').click()
        loginrs.customerName.should('be.visible').and('have.value', '').select(customerName)
        loginrs.loginButton.should('be.visible').click()
        loginrs.customerWelcomeMessage.should('have.text', customerName)
    }
    //manager login
    login_Manager(actionToPerform){
        loginrs.managerLogin.should('be.visible').and('have.text', 'Bank Manager Login').click()
        switch(actionToPerform){
            case 'Add_customer':
                loginrs.addCustomer.should('be.visible').and('contain', 'Add Customer').click()
                break;
            case 'Open_account':
                loginrs.openAccount.should('be.visible').and('contain', 'Open Account').click()
                break;
            case 'Customers':
                loginrs.customerList.should('be.visible').and('contain', 'Customers').click()
                break;    
            default:
                loginrs.addCustomer.should('be.visible').and('contain', 'Add Customer').click()
                break;
        }

    }



}