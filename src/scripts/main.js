'use strict';

const ul = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const sorted = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  ul.append(...sorted);
}

function convertToNumber(number) {
  return parseInt(number.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  const employeesList = list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employeesList;
};

sortList(employees);
getEmployees(employees);
