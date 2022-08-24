'use strict';

const employees = [...document.querySelectorAll('li')];

const number = str => +str.slice(1).split(',').join('');

function sortList(list) {
  return list.sort((a, b) => (
    number(b.dataset.salary) - number(a.dataset.salary)));
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);

employees.forEach(employee => document.querySelector('ul').append(employee));
