'use strict';

// write code here

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.split('$').join('').split(',').join(''));
}

function sortList() {
  const items = [...list.children];

  items.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...items);
}

// eslint-disable-next-line no-unused-vars
function getEmployees() {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
