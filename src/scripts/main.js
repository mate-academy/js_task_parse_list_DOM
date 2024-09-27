'use strict';

const container = document.querySelector('ul');
const listOfEmployees = [...container.children];

function convertSalary(salary) {
  const salaryAmount = salary.slice(1, salary.length + 1).replace(',', '');

  return Number(salaryAmount);
}

function sortList(list) {
  const people = list.sort(
    (a, b) =>
      convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary));

  container.append(...people);
}

sortList(listOfEmployees);

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

getEmployees(listOfEmployees);
