'use strict';

describe('List', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('should have 11 items', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul, '11 items').to.have.length(11);
      });
  });

  it('1st item should be Vivian Harrell', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul.eq(0), 'first item').to.contain('Vivian Harrell');
      });
  });

  it('2nd item should be Rhona Davidson', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul.eq(1), 'second item').to.contain('Rhona Davidson');
      });
  });

  it('5th item should be Michael Bruce', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul.eq(4), 'fifth item').to.contain('Michael Bruce');
      });
  });

  it('10th item should be Serge Baldwin', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul.eq(9), 'tenth item').to.contain('Serge Baldwin');
      });
  });

  it('11th item should be Thor Walton', () => {
    cy.get('ul > li')
      .then(($ul) => {
        expect($ul.eq(10), 'eleventh item').to.contain('Thor Walton');
      });
  });
});
