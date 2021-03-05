'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list) {
  const sortedEmployees = [...list].sort(
    (s1, s2) =>
      toNumber(s2.dataset.salary) - toNumber(s1.dataset.salary));

  employeesList.append(...sortedEmployees);
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: toNumber(person.dataset.salary),
    age: person.dataset.age,
  }));
}

function toNumber(string) {
  return +string.replace(/[^0-9]/g, '');
}

sortList(employees);
getEmployees(employees);
