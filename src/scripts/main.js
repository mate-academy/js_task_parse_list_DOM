'use strict';

// write code here

const listOfEmployees = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((item) => list.append(item));
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
