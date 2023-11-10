class Authentication{
    
   login(email,Password){
    
    const emailField = "input[placeholder='Email']"
    const passwordField = "input[placeholder='Password']"
    const signInBtn = "button[type='submit']"

    cy.get(emailField).should("be.empty").type(email)
    cy.get(passwordField).should("be.empty").type(Password)

    cy.get(signInBtn).should("be.enabled").click()
   }

}
export default Authentication;