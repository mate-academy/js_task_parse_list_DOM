'use strict';

const employees = document.querySelectorAll('li');
const employeesSorted = sortList(employees);
const ul = document.querySelector('ul');

getEmployees(ul, employeesSorted);

function sortList(list) {
  return [...list].sort((a, b) => salaryToNumber(b) - salaryToNumber(a));
};

function salaryToNumber(string) {
  return +string.dataset.salary.slice(1).split(',').join('.');
};

function getEmployees(where, afterElements) {
  afterElements.forEach(item => where.append(item));
}
