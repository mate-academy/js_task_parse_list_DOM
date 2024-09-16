'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');
const newListOfEmployees = [...employees];

function getSalary(salaryString) {
  return Number(salaryString.slice(1).replaceAll(',', ''));
}

function sortList() {
  return newListOfEmployees
    .sort((a, b) => getSalary(b.dataset.salary) - getSalary(a.dataset.salary))
    .forEach((employee) => listOfEmployees.append(employee));
}

function getEmployees() {
  return newListOfEmployees.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList();
getEmployees();
