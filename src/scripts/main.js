'use strict';

const listEmployees = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(employees) {
  employees.sort((x, y) => salaryConverter(y) - salaryConverter(x));
  list.append(...employees);
}

function salaryConverter(employee) {
  return +employee.dataset.salary
    .slice(1)
    .split(',')
    .join('');
}

function getEmployees(people) {
  return people.map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

sortList(listEmployees);
getEmployees(listEmployees);
