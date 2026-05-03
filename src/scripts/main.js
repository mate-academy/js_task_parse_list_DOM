'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];

function getSalary(item) {
  return Number(item.dataset.salary.replace(/\$|,/g, ''));
}

function sortList(list) {
  list.sort((a, b) => getSalary(b) - getSalary(a));

  const ul = document.querySelector('ul');

  list.forEach((elem) => ul.appendChild(elem));
}

sortList(employees);

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/\$|,/g, '')),
    age: Number(item.dataset.age),
  }));
}
getEmployees(employees);
