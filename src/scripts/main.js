'use strict';

// write code here
const itemsLi = document.querySelectorAll('li');
const itemUl = document.querySelector('ul');

function converted(str) {
  return Number(str.substr(1).split(',').join(''));
};

function sortList(list) {
  const sorted = [...list].sort((a, b) =>
    converted(b.dataset.salary) - converted(a.dataset.salary));

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
