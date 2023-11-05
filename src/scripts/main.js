'use strict';

const employees = [...document.querySelector('ul').children];

function sortHelpFn(a, b) {
  return +b.dataset.salary.slice(1).split(',').join('')
  - +a.dataset.salary.slice(1).split(',').join('');
}

function sortList(listOfEmployees) {
  return listOfEmployees.sort((a, b) => sortHelpFn(a, b)).forEach(employee => {
    document.querySelector('ul').append(employee);
  });
}

function getEmployees(listOfEmployees) {
  return listOfEmployees.map(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employees);

getEmployees(employees);
