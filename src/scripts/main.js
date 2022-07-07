'use strict';

const listLi = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

function sortList(arr) {
  const sortAction = val =>
    +val.dataset.salary.split(',').join('').split('$').join('');

  const arr2 = arr.sort((a, b) => sortAction(b) - sortAction(a));

  listUl.append(...arr2);
}

function getEmployees(list) {
  const arrOfObjects = [...list].map(x => {
    const obj = {};

    obj.name = x.innerText;
    obj.position = x.dataset.position;
    obj.salary = x.dataset.salary;
    obj.age = x.dataset.age;

    return obj;
  });

  return arrOfObjects;
}

sortList(listLi);
getEmployees(listLi);
