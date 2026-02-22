'use strict';

const targetHeading = [...document.querySelectorAll('h1')].find(
  (h) => h.textContent === 'List of employees',
);

let targetList = targetHeading?.nextElementSibling;

while (targetList && targetList.tagName !== 'UL') {
  targetList = targetList.nextElementSibling;
}

const listOfEmployees = targetList
  ? [...targetList.querySelectorAll('li')]
  : [];

/**
* @param {String} string

* @returns {Number}
*/
function convertStringToNumber(string) {
  return Number(string.slice(1).split(',').join(''));
}

/**
 * @param {HTMLLIElement[]} list
 * @returns {void}
 */
function sortList(list) {
  list
    .sort(
      (person1, person2) =>
        convertStringToNumber(person2.dataset.salary) -
        convertStringToNumber(person1.dataset.salary),
    )
    .forEach((person) => list[0]?.closest('ul').append(person));
}

/**
 * @param {HTMLLIElement[]} list
 * @returns {Object[]}
 */
function getEmployees(list) {
  return list.map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: convertStringToNumber(person.dataset.salary),
    age: Number(person.dataset.age),
  }));
}

sortList(listOfEmployees);

// eslint-disable-next-line no-unused-vars
const jobs = getEmployees(listOfEmployees);
