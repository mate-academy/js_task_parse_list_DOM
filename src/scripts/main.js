'use strict';

const listOfEmpoyees = document.querySelector('ul');
const itemsOfEmployees = document.querySelectorAll('li');

function toMakeNumber(param) {
  return Number(param.split('').filter(val => !isNaN(val)).join(''));
}

function sortList(items, list) {
  [...items]
    .sort((a, b) =>
      toMakeNumber(b.dataset.salary) - toMakeNumber(a.dataset.salary))
    .forEach(item => list.append(item));
}

function getEmployees(items) {
  const employees = [];

  [...items].forEach(item => employees.push(
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  ));

  return employees;
}

sortList(itemsOfEmployees, listOfEmpoyees);
getEmployees(itemsOfEmployees);
