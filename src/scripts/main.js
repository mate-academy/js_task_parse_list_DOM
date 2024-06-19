'use strict';

/**
 * @function getNumberFromAttribute
 * @param {Element} element
 * @returns {number}
 */
const getNumberFromAttribute = (element, attribute) => {
  return +element.getAttribute(attribute).slice(1).replace(/,/g, '');
};

/**
 * @function sortList
 * @param {string} attribute
 * @returns {void}
 *
 */
const sortList = (attribute, parentsElement) => {
  const dataAttribute = `[${attribute}]`;

  const elements = [...document.querySelectorAll(dataAttribute)];
  const parents = document.querySelector(parentsElement);

  elements.sort((a, b) => {
    return (
      getNumberFromAttribute(b, attribute) -
      getNumberFromAttribute(a, attribute)
    );
  });

  elements.forEach((elem) => parents.append(elem));
};

sortList('data-salary', 'ul');

/**
 * @function getEmployees
 * @param {string} attribute
 * @returns {object[]} employees
 *
 */

const getEmployees = (attribute) => {
  const dataAttribute = `[${attribute}]`;
  const elements = [...document.querySelectorAll(dataAttribute)];

  return elements.map((elem) => {
    const { position, salary, age } = elem.dataset;

    return {
      name: elem.innerText,
      position,
      salary,
      age,
    };
  });
};

getEmployees('data-salary');
