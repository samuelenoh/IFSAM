export default class AssetModal{

    settingsTab = "Settings"
    assetModalLink = "Asset Models"
    createBtn = "Create New"
    form = "form"
    saveBtn = "button[type='submit']"
    uploadField = "input[type='file']"
    noteField = "textarea[placeholder='Add a note (optional)']"
    tableRow1 = "tbody tr:nth-child(1)"
    kebabMenu = "#menu-button-0"
    edit = "Edit"
    delete = "Delete"
    button = "button[type='submit']"
    searchField = "input[placeholder='Search...']"


    verify_creation_assetModal(){
      cy.contains(this.settingsTab).click()
      cy.contains(this.assetModalLink).click()
      cy.findByText(this.createBtn).should("be.visible").click()
      cy.get(this.form).findByPlaceholderText("Name").should("be.empty").type("HDMI Cabel")
      cy.findAllByPlaceholderText("Select Manufacturer").should("be.empty").type("Dell Ghana")
      cy.get(this.form).findByText("Dell Ghana").click()
      cy.findAllByPlaceholderText("Select Category").should("be.empty").type("Printer")
      cy.get(this.form).findByText("Printer Ink").click({force:true})
      cy.findAllByPlaceholderText("Model Number").should("be.empty").type("AAS8675121")
      cy.findAllByPlaceholderText("Select Depreciation").should("be.empty").type("Do not depreciated")
      cy.get(this.form).findByText("Do not depreciated").click()
      cy.get(this.form).find(this.noteField).should("be.empty").type("Adding a new asset")
      cy.get(this.form).find(this.uploadField).selectFile('cypress/fixtures/laptop.jpg')
      cy.get(this.saveBtn).contains("Save").click()
    }

    searching_asset_model(){
      cy.get(this.searchField).type("HDMI Cabel").clear({delay:5000})
  }

    updating_assertmodal(){

     cy.get(this.tableRow1).find(this.kebabMenu ).click({force:true})
     cy.findByText(this.edit).click({force:true})
     cy.get(this.form).findByPlaceholderText("Name").clear().type("Wireless Keyboards")
     cy.get(this.button).contains("Save").click()
    }

    deleting_asset_modal(){
      cy.get(this.tableRow1).find(this.kebabMenu ).click()
      cy.findByText(this.delete).click({force:true})
      cy.get('div.px-6').should("contain","Delete Asset Model").find("button[type='submit']").contains("Delete").click({force:true})
    }
}