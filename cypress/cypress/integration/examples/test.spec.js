
context('Traversal', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/js_task_parse_list_DOM/src/index.html')
    })

    it('.should() - make an assertion about the current subject', () => {
        cy.get('ul li:first').should('have.text', '\n        Airi Satou\n      ')
        cy.get('ul li:last').should('have.text', '\n        Colleen Hurst\n      ')     
        cy.get('ul>li').eq(3).should('have.text', '\n        Prescott Bartlett\n      ')      
        })
    })