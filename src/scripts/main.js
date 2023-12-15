'use strict';

const employees = document.querySelectorAll('li');
const list = document.querySelector('ul');
const employeesList = [...employees];

function getSalary(person) {
  return person.dataset.salary.slice(1).replaceAll(',', '');
}

function sortList() {
  return employeesList.sort((a, b) => getSalary(b) - getSalary(a))
    .forEach(person => list.append(person));
}

function getEmployees() {
  return employeesList.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList();
getEmployees();
