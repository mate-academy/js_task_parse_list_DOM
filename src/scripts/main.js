'use strict';

const listLi = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

const makeNumber = val =>
  +val.dataset.salary.slice(1).split(',').join('');

function sortList(arr, callback) {
  const arr2 = arr.sort((a, b) => callback(b) - callback(a));

  return listUl.append(...arr2);
}

function getEmployees(list) {
  return [...list].map(el => {
    const obj = {};

    obj.name = el.innerText;
    obj.position = el.dataset.position;
    obj.salary = el.dataset.salary;
    obj.age = el.dataset.age;

    return obj;
  });
}

sortList(listLi, makeNumber);
getEmployees(listLi);
