'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList() {
  [...employees].sort((employee1, employee2) =>
    getNumberSalary(employee2.dataset.salary)
    - getNumberSalary(employee1.dataset.salary))
    .forEach(employee => list.append(employee));
}

function getEmployees() {
  return [...employees].map(employee => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function getNumberSalary(salary) {
  return +salary.slice(1).replaceAll(',', '');
}

sortList();
getEmployees();
