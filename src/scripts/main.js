'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  return [...list.children]
    .sort((a, b) => convert(b.dataset.salary) - convert(a.dataset.salary));
}

function convert(elem) {
  return +elem.replace('$', '').replace(',', '.');
}

function getEmployees(list) {
  return list.map(elem => ({
    name: elem.innerText,
    ...elem.dataset,
  }));
}

sortList(ul).map(elem => ul.append(elem));
getEmployees(sortList(ul));
