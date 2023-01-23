'use strict';

const listOfSalary = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const arrOfList = [...listOfSalary];

function getSalary(str) {
  return +str.replace(/\D/g, '');
}

function sortList(list) {
  const createList = list.sort((a, b) =>
    getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  ul.append(...createList);
}

function getEmployees(list) {
  return list.map(item => ({
    ...item.dataset,
    'name': item.textContent,
  }));
}

sortList(arrOfList);
getEmployees(arrOfList);
