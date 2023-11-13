'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList() {
  [...employees]
    .sort((empA, empB) =>
      toNumber(empA.dataset.salary) - toNumber(empB.dataset.salary))
    .reverse()
    .map(emp => list.append(emp));
}

function getEmployees() {
  return [...employees].map(person => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList();
getEmployees();

function toNumber(str) {
  return parseFloat(str.slice(1).replaceAll(',', ''));
}
