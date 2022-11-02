'use strict';

function toNumber(salary) {
  return parseFloat(salary.substring(1).replaceAll(',', ''));
}

function sortList(list) {
  const lst = document.querySelector(list);

  [...lst.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(node => lst.appendChild(node));
}

function getEmployees(list) {
  const lst = document.querySelector('ul');
  const employees = [...lst.children].map(item => ({
    name: item.innerHTML.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employees;
}

getEmployees('ul');
sortList('ul');
