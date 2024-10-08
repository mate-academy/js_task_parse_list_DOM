'use strict';

const lists = [...document.querySelectorAll('li')];

function getNumber(str) {
  const toNumber = str.replace(/[$ m,]/g, '');

  return Number(toNumber);
}

function sortList(list) {
  const value = document.querySelector('ul');

  list
    .sort((a, b) => getNumber(b.dataset.salary) - getNumber(a.dataset.salary))
    .forEach((el) => value.appendChild(el));
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.innerText,
      age: +item.dataset.age,
      position: item.dataset.position,
      salary: item.dataset.salary,
    };
  });
}

sortList(lists);
getEmployees(lists);
