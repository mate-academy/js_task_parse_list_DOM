'use strict';

const entryList = [...document.querySelectorAll('li')];

const toNumber = (item) => item.dataset.salary.slice(1).split(',').join('');

function sortList(list) {
  const employeesList = document.querySelector('ul');

  employeesList.append(...list.sort((a, b) => toNumber(b) - toNumber(a)));
}

function getEmployees(list) {
  const employeesObject = list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employeesObject;
}

sortList(entryList);
getEmployees(entryList);
