'use strict';

const allPeople = document.querySelectorAll('li');
const listElement = document.querySelector('ul');

[...allPeople]
  .sort(
    (a, b) =>
      getNumberFromSalary(b) - getNumberFromSalary(a)
  )
  .forEach(elem => listElement.appendChild(elem));

function getNumberFromSalary(elem) {
  return +elem.dataset.salary.slice(1).split(',').join('');
}
