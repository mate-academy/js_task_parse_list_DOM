'use strict';

const list = document.querySelector('ul');

function toNumber(string) {
  return parseInt(string.replace(/[$,]/g, ''));
}

function sortList() {
  [...list.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(item => list.appendChild(item));
}

[...list.children]
  .map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: toNumber(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));

sortList(list);
