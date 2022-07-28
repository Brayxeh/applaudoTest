///<reference types ="cypress"/>
import { manager_resources } from "../resources/manager_objects/object_manager";
import { general_keywords } from "./key_general";
const managerrs = new manager_resources();
const general = new general_keywords();

export class manager_actions{

    addcustomer(firstName,lastName,postalCode){
        managerrs.add_first_name.should('have.value', '').type(firstName).and('have.value', firstName)
        managerrs.add_last_name.should('have.value', '').type(lastName).and('have.value', lastName)
        managerrs.add_post_code.should('have.value', '').type(postalCode).and('have.value', postalCode)
        managerrs.add_submitform.should('be.visible').click()
        //asserting alert
        general.Addcustomer_Alert()
    }
    openaccount(customer, currency){
        managerrs.open_customer.should('have.value', '').select(customer)
        managerrs.open_currency.should('have.value', '').select(currency)
        managerrs.open_submitform.should('be.visible').click()
        //asserting alert
        general.Openaccount_Alert()
        
    }
    deleteaccount(firstName,lastname){
        managerrs.search.should('have.value', '').type(firstName+ ' ' +lastName)
        


    }


}
