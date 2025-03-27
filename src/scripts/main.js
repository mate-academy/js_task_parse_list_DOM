'use strict';

const list = document.querySelector('ul');

function toNumber(salary) {
  return parseFloat(salary.substring(1).replaceAll(',', ''));
}

function sortList() {
  [...list.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(node => list.appendChild(node));
}

function getEmployees() {
  const employees = [...list.children].map(item => ({
    name: item.innerHTML.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employees;
}

getEmployees();
sortList();
