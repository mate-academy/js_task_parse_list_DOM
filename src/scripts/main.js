'use strict';

// write code here

const ul = document.querySelector('ul');
const list = [...ul.children];

function sortList(x) {
  const sorted = x.sort((a, b) =>
    +b.dataset.salary.split('$').join('').split(',').join('')
    - +a.dataset.salary.split('$').join('').split(',').join(''));

  ul.append(...sorted);
}

function getEmployees(x) {
  return x.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(list);
getEmployees(list);
