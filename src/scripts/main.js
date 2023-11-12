'use strict';

const employeesList = document.querySelector('ul');

const sortList = (list) => {
  [...list.querySelectorAll('li')].sort((a, b) =>
    Number(b.dataset.salary.slice(1).split(',').join(''))
  - Number(a.dataset.salary.slice(1).split(',').join('')))
    .map(e => list.append(e));
};

const getEmployees = (list) => {
  const employees = [];

  [...list.querySelectorAll('li')].map(e => employees.push({
    name: e.innerText,
    position: e.dataset.position,
    salary: e.dataset.salary,
    age: e.dataset.age,
  }));

  return employees;
};

getEmployees(employeesList);
sortList(employeesList);
