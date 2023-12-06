import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open login page', ()=> {
    cy.visit('https://www.jamtangan.com/login')
    cy.wait(10000);
})

When('I submit login', ()=> {
    //fill email
    cy.get("input[name='username']").type('mhdnurfaizzy@gmail.com', { delay: 100 })
    cy.pause()
    //fill password
    cy.get("input[name='password']").type("Apaiya01-")

    //click submit
    cy.get(".mw-ripple-effect.btn.rounded.text-sm.relative.overflow-hidden.w-full.btn-filled.text-neutral-1000.bg-primary-1.uppercase.qa-login-button").click()
})

Then('I should see home page', ()=> {
    cy.get(".text-neutral-300.font-bold.tracking-wide.text-xs.name-wrap.cursor-pointer.mr-4").should('be.visible')
})