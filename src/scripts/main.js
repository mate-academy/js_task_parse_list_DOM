'use strict';

const allEmployees = document.querySelectorAll('li');
const sortedEmployees = getEmployees(allEmployees);

for (const employee of sortedEmployees) {
  document.querySelector('ul').append(employee);
}

function convertSalary(value) {
  return value.replace(/\D/g, '');
}

function sortList(list) {
  return list.sort((emploerA, emploerB) =>
    convertSalary(emploerB.dataset.salary)
    - convertSalary(emploerA.dataset.salary));
}

function getEmployees(list) {
  return sortList([...list]);
}
