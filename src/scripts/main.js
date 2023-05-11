'use strict';

// write code here

const employeesList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

function transformToNumber(item) {
  return +item.replace(',', '').replace('$', '');
}

function sortList(items, list) {
  [...items].sort((a, b) =>
    transformToNumber(b.dataset.salary) - transformToNumber(a.dataset.salary))
    .forEach(item => list.append(item));
}

function getEmployees(items) {
  return [...items].map(a => (
    {
      name: a.innerText,
      position: a.dataset.position,
      salary: a.dataset.salary,
      age: a.dataset.age,
    }));
}

sortList(listItems, employeesList);
getEmployees(listItems);
