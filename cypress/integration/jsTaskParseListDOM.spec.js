/// <reference types="cypress" />

describe('Parse list app', () => {
  // before each hook
  beforeEach(() => {
    // Visit the app, but do not fail if status code is not 2xx
    cy.visit('http://localhost:3001/', { failOnStatusCode: false });
  });

  it('should render list', () => {
    // Проверяем наличие контейнера с элементами списка
    cy.get('ul').should('exist');

    // Проверяем, что список не пустой
    cy.get('ul > li').its('length').should('be.gt', 0);

    // Дополнительные проверки для первого элемента
    cy.get('ul > li')
      .first()
      .should('have.attr', 'data-salary')
      .and('match', /^[0-9]+$/);
  });

  it('should contain correct employee data', () => {
    cy.get('ul > li').each(($el) => {
      cy.wrap($el).should('have.attr', 'data-salary');
      cy.wrap($el).should('have.attr', 'data-position');
      cy.wrap($el).should('have.attr', 'data-age');
    });
  });

  it('example skipped test', () => {
    // Тест, который пока пропускаем
    cy.log('This test is skipped temporarily');
  });
});
