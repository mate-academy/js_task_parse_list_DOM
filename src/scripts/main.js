'use strict';

const list = document.body.querySelector('ul');
const workers = document.querySelectorAll('li');

function sortList(array) {
  return [...array]
    .sort((x, y) =>
      convertCashToNum(y.dataset.salary) - convertCashToNum(x.dataset.salary));
}

function convertCashToNum(str) {
  return +str
    .replace('$', '')
    .split(',')
    .join('');
}

function getEmployees(array) {
  return [...array].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: convertCashToNum(person.dataset.salary),
    age: +person.dataset.age,
  }));
}

list.append(...sortList(workers));
getEmployees(workers);
