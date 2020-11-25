'use strict';

describe('List', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('should have 11 items', () => {
    cy.get('ul > li').should('have.length', 11);
  });

  it('should be sorted by salary DSC', () => {

    cy.get('ul > li').then(($ul) => {
      const list = [...$ul].map((row) => row.dataset.salary
        .replace('$', '').replace(',', ''));
      let prev = list[0];

      for (let i = 1; i < list.length; i++) {
        if (list[i] < prev) { 
          prev = list[i];
        };
      };

      expect(prev).to.equal(list[list.length - 2]);
    });
  });
});
