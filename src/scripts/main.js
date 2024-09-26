'use strict';

const listOfEmployees = document.querySelector('ul');
const arrOfEmployees = [...document.querySelectorAll('li')];

const convertToNumber = value => +value.slice(1).split(',').join('');

function sortList(list) {
  return list.sort((a, b) => convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary));
}

listOfEmployees.append(...sortList(arrOfEmployees));

function getEmployees(item) {
  return item.map(el => ({
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
  }));
}

getEmployees(arrOfEmployees);
