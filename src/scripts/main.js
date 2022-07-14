'use strict';

const listElement = document.querySelector('ul');
const listOfEmployees = [...document.querySelectorAll('li')];

function convertToNum(value) {
  return +value.replace(/\D/g, '');
}

function sortList(list) {
  list.sort((a, b) =>
    convertToNum(b.dataset.salary) - convertToNum(a.dataset.salary))
    .forEach(item => listElement.append(item));
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => employees.push({
    name: item.textContent.trim(),
    ...item.dataset,
  }));

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
