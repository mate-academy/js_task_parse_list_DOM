/* eslint-disable max-len */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
'use strict';

function salaryNormilaze(salary) {
  return parseInt(salary.slice(1).split(',').join(''));
}

function sortList(list) {
  list.sort((a, b) => {
    return salaryNormilaze(b.dataset.salary) - salaryNormilaze(a.dataset.salary);
  });
  return list;
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.dataset.name,
    position: employee.dataset.position,
    salary: salaryNormilaze(employee.dataset.salary),
    age: parseInt(employee.dataset.age),
  }));
}

const ul = document.getElementsByTagName('ul')[0];
const listItems = Array.from(ul.getElementsByTagName('li'));

const sortedItems = sortList(listItems);

ul.innerHTML = '';
sortedItems.forEach(item => ul.appendChild(item));

const employees = getEmployees(sortedItems);

console.log(employees);
