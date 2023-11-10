export default class{

    createBtn = "Create New"
    form = "form"
    category_name = "Name"
    type_field = "Select a type"
    saveBtn = "Save"

    creating_category(){

        cy.contains("Categories").click()
        cy.findByText(this.createBtn).should("be.visible").click()
        cy.get(this.form).findByPlaceholderText(this.category_name).should("be.empty").type("Docker")
        cy.get(this.form).findByPlaceholderText(this.type_field).click()
        cy.contains("Accessory").click()
        cy.get(this.form).findByText(this.saveBtn).should("be.visible").click()
    }
    

}