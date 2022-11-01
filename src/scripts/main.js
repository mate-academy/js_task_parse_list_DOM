'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list) {
  const sorted = [...list].sort((emp1, emp2) =>
    +(emp2.dataset.salary
      .split('$')
      .join('')
      .split(',')
      .join(''))
    - +(emp1.dataset.salary
      .split('$')
      .join('')
      .split(',')
      .join('')));

  employeesList.append(...sorted);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(employees);
getEmployees(employees);
