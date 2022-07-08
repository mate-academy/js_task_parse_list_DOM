'use strict';

const listFromUl = document.querySelector('ul');

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
  const result = [];
  const items = [...list.children];

  for (const item of items) {
    result.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return result;
}

sortList(listFromUl);
getEmployees(listFromUl);
