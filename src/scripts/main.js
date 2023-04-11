'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const formated = (str) => str.replace(/[$,]/g, '');

const sortList = (list) => employeesList
  .append(...list
  .sort((a, b) => formated(b.dataset.salary) - formated(a.dataset.salary)));

const getEmployees = (list) => list
  .map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });

sortList(employees);
getEmployees(employees);
