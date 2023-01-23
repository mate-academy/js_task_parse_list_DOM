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
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(arrOfList);
getEmployees(arrOfList);
