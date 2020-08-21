'use strict';

function sortList(list) {
  [...list.children]
    .sort((first, second) =>
      convert(second.dataset.salary) - convert(first.dataset.salary))
    .forEach(person => list.append(person));
}

const convert = salary => +salary.slice(1).split(',').join('');

function getEmployees(list) {
  return [...list.children].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

const employees = document.querySelector('ul');

sortList(employees);
getEmployees(employees);
