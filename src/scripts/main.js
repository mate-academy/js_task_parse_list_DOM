'use strict';

const employeeListElement = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function parseSalary(salaryStr) {
  return +salaryStr.slice(1).split(',').join('.');
}

function sortEmployees(array) {
  array.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  employeeListElement.innerHTML = '';
  array.forEach((item) => employeeListElement.appendChild(item));
}

sortEmployees(employees);
