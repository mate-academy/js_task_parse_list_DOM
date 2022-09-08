'use strict';

const employeeList = document.querySelector('ul');
const employeePoint = document.querySelectorAll('li');

function sortList(list) {
  const sorted = [...list].sort((emp1, emp2) =>
    +(emp2.dataset.salary.split('$').join('').split(',').join(''))
    - +(emp1.dataset.salary.split('$').join('').split(',').join('')));

  employeeList.append(...sorted);
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(employeePoint);
getEmployees(employeePoint);
