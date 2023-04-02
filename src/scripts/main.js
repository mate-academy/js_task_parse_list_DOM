'use strict';

const list = [...document.querySelectorAll('li')];

sortList(list);

getEmployees(list);

function toNumber(str) {
  return str.split('').filter(item => '0123456789'.includes(item)).join('');
}

function sortList(items) {
  items.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...items);
}

function getEmployees(items) {
  return items.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}
