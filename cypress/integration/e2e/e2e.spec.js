describe('Test', function () {
  it('running successfully', () => {
    // Making sure it runs successfully
    
    // Visit page url
    cy.visit('http://localhost:8080')

    // Loaded site screenshot
    cy.screenshot()

    //making share header is visible
    cy.get('.header')
      .should('be.visible')
   
    cy.wait(2000)
    
    //making share items is visible
    cy.get('.item:first-child')
      .should('be.visible').should('contain', 'Id: 1')
      .click()
      .should('be.visible').should('contain', 'user Id: 1')
    
    cy.get('.item:last-child')
      .should('be.visible').should('contain', 'Id: 100')
      .click()
      .should('be.visible').should('contain', 'user Id: 10')
   
    //making sure items count is 100
    cy.get('.json-generator').children().should('have.length', 100)
  })

})
