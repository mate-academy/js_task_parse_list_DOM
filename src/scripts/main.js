'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^\d]/g, ''));
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim().split('\n')[0].trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: li.dataset.age,
  }));
}

function sortList(list) {
  const ul = document.querySelector('ul');

  list
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((li) => ul.append(li));
}

const people = [...document.querySelectorAll('li[data-salary]')];

sortList(people);

getEmployees(people);
