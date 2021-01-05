'use strict';

const employeesCollection = document.querySelector('ul');

const employeesList = document.querySelectorAll('li');

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(list) {
  const sorted = [...list].sort((employeeA, employeeB) =>
    (convertToNumber(employeeB.dataset.salary)
    - convertToNumber(employeeA.dataset.salary)));

  employeesCollection.append(...sorted);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
