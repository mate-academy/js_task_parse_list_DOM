'use strict';

const element = document.querySelector('ul');
const child = [...element.children];

const money = (salary) =>
  +salary.slice(1).split(',').join('');

function sortList(list) {
  const sorted = list.sort((small, big) =>
    money(big.dataset.salary) - money(small.dataset.salary));

  child.append(sorted);
}

function getEmployees(list) {
  return list.map(person => ({
    ...person.dataset,
    name: person.textContent,
  }));
}

sortList();
getEmployees();
