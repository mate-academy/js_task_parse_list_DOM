'use strict';

const itemsLi = document.querySelectorAll('li');
const itemUl = document.querySelector('ul');

function parseNumber(item) {
  const newItem = item.replace(/[,$]/g, '');

  return Number(newItem);
};

function sortList(list) {
  const sorted = [...list].sort((a, b) =>
    parseNumber(b.dataset.salary) - parseNumber(a.dataset.salary));

  itemUl.append(...sorted);
};

function getEmployees(list) {
  return [...list].map(value => ({
    name: value.innerText,
    position: value.dataset.position,
    salary: value.dataset.salary,
    age: value.dataset.age,
  }));
}

sortList(itemsLi);
getEmployees(itemsLi);
