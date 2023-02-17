'use strict';

const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const arrNew = sortList(items);

for (const item of arrNew) {
  getEmployees(item);
}

function sortList(list) {
  return [...list].sort((
    { dataset: { salary: salA } },
    { dataset: { salary: salB } }
  ) => {
    return getValidNumber(salB) - getValidNumber(salA);
  });
}

function getEmployees(list) {
  ul.append(list);
}

function getValidNumber(str) {
  return +str.replaceAll(',', '').replace('$', '');
}
