'use strict';
/// <reference types="cypress" />

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
     
      const list = $ul.map((row) => row.dataset.salary.replace('$', '').replace(',', ''));
      const listCopy = [...list];
      let counter = 0;
      const arrCopy = [];
      const sortedList = [];

      for (let i = 0; i < list.length; i++) {
        arrCopy.push(list[i].replace('$', '').replace(',', ''))
        sortedList.push(listCopy[i].replace('$', '').replace(',', ''))
      }

      sortedList.sort((a,b) => b - a);

      for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i] === sortedList[i]) {
          counter += 1;
        }
      }

      expect(counter).to.equal(arrCopy.length);
    });
  });
});
