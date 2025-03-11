'use strict';

const list = document.querySelector('ul');

function stringToNumber(element) {
  return Number(element.dataset.salary.split('$').join('').split(',').join(''));
}

function sortList() {
  const items = [...list.children];

  items.sort((a, b) => stringToNumber(b) - stringToNumber(a));

  list.append(...items);
}

function getEmploes() {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmploes();
