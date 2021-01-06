'use strict';

// write code here

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function getNumOfStr(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(listProp) {
  listProp.sort((a, b) =>
    getNumOfStr(b.dataset.salary) - getNumOfStr(a.dataset.salary));

  ul.append(...listProp);
}

function getEmployees(listProp) {
  return listProp.map(value => ({
    name: value.innerText,
    position: value.dataset.position,
    salary: value.dataset.salary,
    age: value.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
