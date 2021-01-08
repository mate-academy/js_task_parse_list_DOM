'use strict';

const list = document.querySelector('ul');
const people = document.querySelectorAll('li');

function callback(a, b) {
  const first = a.dataset.salary.split('$').join('').split(',').join('');
  const second = b.dataset.salary.split('$').join('').split(',').join('');

  return second - first;
}

function sortlist(listToSort) {
  const sortedL1ist = [...listToSort].sort(callback);

  list.append(...sortedL1ist);
}

function getEmployees(listOfEmployees) {
  return [...listOfEmployees].map(human => ({
    name: human.textContent.trim(),
    ...human.dataset,
  }));
}

sortlist(people);
getEmployees(people);
