'use strict';

const employees = document.querySelectorAll('li');
const sortedEmployees = getEmployees(employees);

for (const employee of sortedEmployees) {
  document.querySelector('ul').append(employee);
}

function convertToNumber(salary) {
  return salary.slice(1).replace(/,/g, '');
}

function sortList(list) {
  return list.sort((previous, next) =>
    convertToNumber(next.dataset.salary)
    - convertToNumber(previous.dataset.salary));
}

function getEmployees(list) {
  return sortList([...list]);
}
