'use strict';

// write code here
const entryList = [...document.querySelectorAll('li')];

function sortList(list) {
  const result = list
    .map(item => +(item.dataset.salary.shift().split(',').join('')))
    .sort((a, b) => b.datase.salary - a.dataset.salary);

  const employeesList = document.querySelector('ul');

  employeesList.append(result);
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
