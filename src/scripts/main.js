'use strict';

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const sortList = () => {
  [...listItems]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .map((employee) => list.append(employee));
};

const toNumber = (salary) => +salary.replace(/[$,]/g, '');

const getEmployees = () => {
  [...listItems].map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList();
getEmployees();
