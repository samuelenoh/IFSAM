export default class Statuslabel{

        form = "form"
        status_name = "Name"
        statusType = "Select a type"
        createBtn = "Create New"
        colorPicker = "input[placeholder='color']"
        noteField =  "Note"
        saveBtn = "Save"
        searchField = "input[placeholder='Search...']"
        tableRow1 = "tbody tr:nth-child(1)"
        editBtn = "button[type='button']"
        colorPicker = "input[placeholder='color']"
        kebabMenu = '[data-testid="action-dropdown-0"]'

    clicking_status_inSetting_sidebar(){
        cy.contains("Status label").click()
    }

    creating_new_status_label(){

        cy.findByText(this.createBtn).should("be.visible").click()
        cy.get(this.form).findByPlaceholderText(this.status_name).should("be.empty").type("Urgent")
        cy.get(this.form).findByPlaceholderText(this.statusType).click()
        cy.findByPlaceholderText(this.statusType).type("PENDING")
        cy.get(this.form).findByText("PENDING").click()
        cy.get(this.colorPicker).clear().type("#c44141ff")
        cy.findByPlaceholderText(this.noteField).should("be.empty").type('About to work on this issue')
        cy.get(this.form).findByText(this.saveBtn).should("be.visible").click()
    }
    searching_status_label(){
        cy.get(this.searchField).type("dev ops").clear({delay:5000})
    }
    updating_status_label(){
        cy.get(this.tableRow1).find('[title="Urgent"]').should("have.text","Urgent")
        cy.get(this.tableRow1).find("#menu-button-0").find("rect").click({force:true})
        cy.get(this.editBtn).eq(1).click()
        cy.get(this.colorPicker).clear().type("#c221c2ff")
        cy.get(this.form).findByText(this.saveBtn).should("be.visible").click({delay:5000})
    }

    verify_deletion_statusLable(){
        cy.get(this.tableRow1).find('[title="Urgent"]').should("have.text","Urgent")
        cy.get(this.kebabMenu).click()
        cy.contains("Delete").click()
        cy.get('div.px-6').should("contain","Delete Status Label").find("button[type='submit']").contains("Delete").click({force:true})
    }
}