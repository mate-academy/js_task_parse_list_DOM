'use strict';

// write code here

const ul = document.getElementsByTagName('ul');
const lis = ul[0].getElementsByTagName('li');

function sortHelper(entry) {
  return +entry.slice(1).split(',').join('');
}

function sortList(list) {
  return Array.from(list)
    .sort(function (a, b) {
      const x = sortHelper(a.dataset.salary);
      const y = sortHelper(b.dataset.salary);

      return x > y ? -1 : x < y ? 1 : 0;
    })
    .forEach((item) => item.parentNode.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((a) => Object.assign({}, a.dataset));
}

sortList(lis);
getEmployees(lis);
