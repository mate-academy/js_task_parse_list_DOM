'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function strToNum(str) {
  return +str.slice(1).split(',').join('');
}

function getEmployees(listEmployees) {
  return [...listEmployees].map(
    item => {
      return {
        name: item.innerText,
        position: item.dataset.position,
        salary: item.dataset.salary,
        age: item.dataset.age,
      };
    }
  );
}

function sortList(listSort) {
  const listArr = [...list].sort(
    (a, b) => strToNum(b.dataset.salary) - strToNum(a.dataset.salary));

  return listArr;
}

ul.append(...sortList(list));

getEmployees(list);
