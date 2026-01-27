'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^\d]/g, ''));
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    salary: parseSalary(li.dataset.salary),
    position: li.dataset.position,
    age: li.dataset.age,
    element: li,
  }));
}

function sortList(list) {
  list.sort((a, b) => parseSalary(b) - parseSalary(a));

  const employees = getEmployees(list);
  const ul = document.querySelector('ul');

  employees.forEach((person) => {
    ul.append(person.element);
  });

  return employees;
}

const people = [...document.querySelectorAll('li[data-salary]')];

sortList(people);
