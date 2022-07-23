describe('Header', () => {
  beforeEach(() => cy.visit('/'))

  it('links to the correct pages', () => {
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySelLike('nav-link-home-page-Home').click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })

  it('the search bar returns the correct search results', () => {
    cy.getBySel('search-input').eq(0).type('tshirt-stack-overflow{enter}')

    cy.getBySel('product-card')
      .should('be.visible')
      .within(() => {
        cy.getBySel('product-name').should('contain', 'tshirt-stack-overflow')
        cy.getBySel('product-price').should('contain', '$25.00 USD')
      })
  })
})

describe('Shopping Cart', () => {
  it('users can add products to the cart', () => {
    cy.visit('/')
    cy.getBySel('product-tag')
  })
})
