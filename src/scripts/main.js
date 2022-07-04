'use strict';

const listUl = document.querySelector('ul');

function toNumber(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(list) {
  const sortedlist = [...list.children].sort((a, b) => {
    return toNumber(b.dataset.salary)
  - toNumber(a.dataset.salary);
  });

  list.append(...sortedlist);
}

function getEmployees(list) {
  const items = [...list.children];
  const result = [];

  for (const element of items) {
    result.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  }

  return result;
}

sortList(listUl);
getEmployees(listUl);
