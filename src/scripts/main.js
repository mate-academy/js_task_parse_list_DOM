'use strict';

const employeeList = document.querySelectorAll('li');
const employeesSorted = sortList(employeeList);
const ul = document.querySelector('ul');

updateList(ul, employeesSorted);

function sortList(list) {
  return [...list].sort((a, b) => salaryToNum(b) - salaryToNum(a));
};

function salaryToNum(salaryStr) {
  return +salaryStr.dataset.salary.slice(1).split(',').join('.');
};

function updateList(list, employees) {
  employees.forEach(employee => list.append(employee));
}
