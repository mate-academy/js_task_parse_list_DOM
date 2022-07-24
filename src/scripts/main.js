'use strict';

const listItem = document.querySelector('ul');
const item = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort((a, b) =>
    b.dataset.salary.replace(/\D/g, '') - a.dataset.salary.replace(/\D/g, ''));
}

function getEmployees(list) {
  [...list].forEach((element, i) => listItem.children[i].before(element));
}

getEmployees(sortList(item));
