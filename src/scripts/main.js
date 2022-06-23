'use strict';

// write code here

const ul = document.querySelector('ul');
const list = [...ul.children];

function sortList(parameter) {
  const sortedList = parameter.sort((a, b) =>
    +b.dataset.salary.split('$').join('').split(',').join('')
    - +a.dataset.salary.split('$').join('').split(',').join(''));

  ul.append(...sortedList);
}

function getEmployees(parameter) {
  return parameter.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(list);
getEmployees(list);
