'use strict';

const employees = document.querySelector('ul');

function toNumber(string) {
  return +string.replace(',', '').slice(1);
}

function sortList(list) {
  return [ ...list.children ]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(person => list.append(person));
}

function getEmployees(list) {
  return [ ...list.children ].map(
    person => ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: +person.dataset.age,
    })
  );
}

sortList(employees);
getEmployees(employees);
