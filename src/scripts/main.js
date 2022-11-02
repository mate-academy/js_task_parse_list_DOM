'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function fixSalaryString(string) {
  return string.split('$')
    .join('')
    .split(',')
    .join('');
}

function sortList(list) {
  const sorted = [...list].sort((emp1, emp2) =>
    Number(fixSalaryString(emp2.dataset.salary))
    - Number(fixSalaryString(emp1.dataset.salary)));

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
