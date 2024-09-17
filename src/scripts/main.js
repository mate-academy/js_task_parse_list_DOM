'use strict';

const employees = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

function convertSalary(salary) {
  const noCurrency = salary.slice(1);

  return +noCurrency.split(',').join('');
}

function sortList(list) {
  return [...list].sort((a, b) =>
    convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary));
}

listUl.append(...sortList(employees));

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

// convertSalary(employees);
sortList(employees);
getEmployees(employees);
