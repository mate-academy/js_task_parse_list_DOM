'use strict';

describe('Parse list app ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('should have 11 items', () => {
    cy.get('ul > li').should('have.length', 11);
  });

  it('should be sorted by salary DSC', () => {
    cy.get('ul > li').then(($ul) => {
      const list = [...$ul].map((row) =>
        row.dataset.salary.replace('$', '').replace(',', ''),
      );
      let counter = 0;

      for (let i = 0; i < list.length; i++) {
        if (Number(list[i + 1]) <= Number(list[i])) {
          counter += 1;
        }
      }

      expect(counter).to.equal(list.length - 1);
    });
  });
});
