'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(l) {
  const arr = [...l];

  for (const item of arr) {
    item.validSalary = item.dataset.salary.replace(/\D/g, '');
  }

  arr.sort((a, b) => {
    return b.validSalary - a.validSalary;
  });

  list.append(...arr);
}

function getEmployees(l) {
  return [...l];
}

sortList(items);
getEmployees(items);
