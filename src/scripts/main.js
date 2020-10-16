'use strict';

const employees = document.querySelector('ul');

function toNumber(text) {
  return text.replace(/\D/g, '');
}

function sortList(list) {
  const sorted = [...list.children].sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employees.append(...sorted);
}

function getEmployees(list) {
  return [...list.children].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
