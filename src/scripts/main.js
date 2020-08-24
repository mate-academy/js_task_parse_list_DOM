'use strict';

const listEmployees = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(l) {
  l.sort((x, y) => salaryConverter(y) - salaryConverter(x));
  list.append(...l);
}

function salaryConverter(n) {
  return +n.dataset.salary
    .slice(1)
    .split(',')
    .join('');
}

function getEmployees(people) {
  return people.map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

sortList(listEmployees);
getEmployees(listEmployees);
