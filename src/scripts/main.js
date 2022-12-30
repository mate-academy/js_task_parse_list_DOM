'use strict';

const employees = document.querySelector('ul');
const listArray = [...document.querySelectorAll('li')];

const helper = (personSalary) =>
  Number(personSalary.dataset.salary.split(',').join('').slice(1));

const sortList = (list) =>
  employees.append(...list.sort((min, max) => helper(max) - helper(min)));

const getEmployees = (list) =>
  list.map(e => ({
    name: e.innerText,
    ...e.dataset,
  }));

sortList(listArray);
getEmployees(listArray);
