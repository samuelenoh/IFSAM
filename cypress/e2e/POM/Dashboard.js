export default class Dashboard{

    profileIcon = "img[alt='profile']"
    superAdmin = "Super-Admin"
    settings = "Settings"

    
    verifying_userProfile(){
      cy.get(this.profileIcon).should("be.visible").click()
      cy.findAllByText(this.superAdmin).click()
    }

    clicking_settings_tab(){
        cy.contains(this.settings).click()
    }

}