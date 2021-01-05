'use strict';

const listUl = document.querySelector('ul');
const listCollection = document.querySelectorAll('li');

function sortList(list) {
  const listNew = [...list].sort((a, b) =>
    b.dataset.salary.split(',').join('').slice(1)
    - a.dataset.salary.split(',').join('').slice(1));

  listUl.append(...listNew);
}

function getResult(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result[i] = {};
    result[i].name = list[i].innerText;
    result[i].position = list[i].dataset.position;
    result[i].salary = list[i].dataset.salary;
    result[i].age = list[i].dataset.age;
  }

  return result;
}

sortList(listCollection);
getResult(listCollection);
