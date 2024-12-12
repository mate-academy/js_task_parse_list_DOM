/* eslint-disable no-unused-vars */
'use strict';

function getSalaryFromData(item) {
  return parseInt(item.dataset.salary, 10);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalaryFromData(b) - getSalaryFromData(a));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: getSalaryFromData(item),
    age: parseInt(item.dataset.age, 10),
  }));
}

const employeeList = document.querySelector('#employee-list');

sortList(employeeList);

const employees = getEmployees(employeeList);
