import Authentication  from "../POM/Authentication"
import Dashboard from "../POM/Dashboard";
import Statuslabel from "../POM/statusLabelPage";
import AssetModal from "../POM/AssetModalPage";
import CategoryPage from "../POM/CategoryPage";

describe('End to end test', () => {

  const loginAuth = new Authentication
  const dashboard = new Dashboard
  const status = new Statuslabel
  const assetModal = new AssetModal
  const category = new CategoryPage

  let personal; 
  before(() => {
   
    cy.fixture("AdminInfo.json").then((data)=>{
      personal   = data
    })
    cy.viewport(1280, 720);
    cy.visit("/")

  })

    it("navigating to the super admin page",()=>{
      //navigating to the super admin dashboard
      
    loginAuth.login(personal.email,personal.password)
    dashboard.verifying_userProfile()
    dashboard.clicking_settings_tab()
    status.clicking_status_inSetting_sidebar()
    status.creating_new_status_label()
    status.searching_status_label()
    status.updating_status_label()
    status.verify_deletion_statusLable()
    assetModal.verify_creation_assetModal()
    assetModal.searching_asset_model()
    assetModal.updating_assertmodal() 
    assetModal.deleting_asset_modal()
    dashboard.clicking_settings_tab()
    category.creating_category()

      // cy.get("img[alt='profile']").should("be.visible").click()
      // cy.findAllByText("Super-Admin").click()
      // cy.contains("Settings").click()

      // verifying the creation of a status label
      // cy.contains("Status label").click()
      // cy.findByText("Create New").should("be.visible").click()
      // cy.get("form").findByPlaceholderText("Name").should("be.empty").type("Urgent")
      // cy.get("form").findByPlaceholderText("Select a type").click()
      // cy.findByPlaceholderText("Select a type").type("PENDING")
      // cy.get("form").findByText("PENDING").click()
      // cy.get("input[placeholder='color']").clear().type("#c44141ff")
      // cy.findByPlaceholderText("Note").should("be.empty").type('About to work on this issue')
      // cy.get("form").findByText("Save").should("be.visible").click()


      // verifying the search functionality
      // cy.get("input[placeholder='Search...']").type("dev ops").clear({delay:5000})
      

      // // Verifying the created status label can be updated
      // cy.get("tbody tr:nth-child(1)").find('[title="Urgent"]').should("have.text","Urgent")
      // cy.get("tbody tr:nth-child(1)").find("#menu-button-0").find("rect").click({force:true})
      // cy.get("button[type='button']").eq(1).click()
      // cy.get("input[placeholder='color']").clear().type("#c221c2ff")
      // cy.get("form").findByText("Save").should("be.visible").click({delay:5000})


      // cy.wait(2000)
      // // verifying the deletion of the created status label
      // cy.get("tbody tr:nth-child(1)").find('[title="Urgent"]').should("have.text","Urgent")
      // cy.get("tbody tr:nth-child(1)").find("#menu-button-0").find("rect").click({force:true})
      // cy.contains("Delete").click()
      // cy.get('div.px-6').should("contain","Delete Status Label").find("button[type='submit']").contains("Delete").click()

      // cy.wait(2000)


      //  verifying the creation of the Asset modal
      // cy.contains("Settings").click()
      // cy.contains("Asset Models").click()
      // cy.findByText("Create New").should("be.visible").click()
      // cy.get("form").findByPlaceholderText("Name").should("be.empty").type("HDMI Cabel")
      // cy.findAllByPlaceholderText("Select Manufacturer").should("be.empty").type("Dell Ghana")
      // cy.get("form").findByText("Dell Ghana").click()
      // cy.findAllByPlaceholderText("Select Category").should("be.empty").type("Printer")
      // cy.get("form").findByText("Printer Ink").click({force:true})
      // cy.findAllByPlaceholderText("Model Number").should("be.empty").type("AAS8675121")
      // cy.findAllByPlaceholderText("Select Depreciation").should("be.empty").type("Do not depreciated")
      // cy.get("form").findByText("Do not depreciated").click()
      // cy.get("form").find("textarea[placeholder='Add a note (optional)']").should("be.empty").type("Adding a new asset")
      // cy.get("form").find("input[type='file']").selectFile('cypress/fixtures/laptop.jpg')
      // cy.get("button[type='submit']").contains("Save").click()

      // cy.wait(2000)
     // verifying that the created asset modal can be updated
    //  cy.get("tbody tr:nth-child(1)").find("#menu-button-0").find("rect").click({force:true})
    //  cy.contains("Edit").click()
    //  cy.get("form").findByPlaceholderText("Name").clear().type("USB Cabel")
    //  cy.get("button[type='submit']").contains("Save").click()
    
    //  cy.get("tbody tr:nth-child(1)").find("[title='USB Cabel']").should("have.text","USB Cabel")
    //  cy.get("tbody tr:nth-child(1)").find("#menu-button-0").find("rect").click()
      // cy.contains("Delete").click()
      // cy.get('div.px-6').should("contain","Delete Asset Modal").find("button[type='submit']").contains("Delete").click()
    })
    // it("Verify the creation of a status label",()=>{
      
    // })
})