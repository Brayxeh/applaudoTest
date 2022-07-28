///<reference types = "cypress"/>
import { general_objects } from "../resources/general_objects/object_general";
const ob = new general_objects();
export class general_keywords{

    Addcustomer_Alert(){
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains('Customer added successfully with customer id :');
         })
    }
    Openaccount_Alert(){
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains('Account created successfully with account Number :');
         })
    }
    GoToHome(){
        ob.home_btn.should('be.visible').click()
    }


}