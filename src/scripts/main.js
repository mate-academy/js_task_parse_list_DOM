'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

function sortList(arr) {
  const sorted = arr.sort((a, b) =>
    converter(b) - converter(a));

  ul.append(...sorted);

  return sorted;
}

function converter(item) {
  return item.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(arr) {
  const listOfEmployees = arr.map(el => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return listOfEmployees;
}

sortList(list);
getEmployees(list);
