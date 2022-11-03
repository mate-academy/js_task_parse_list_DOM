'use strict';

function toNumber(salary) {
  return parseFloat(salary.substring(1).replaceAll(',', ''));
}

function sortList(list) {
  const newList = document.querySelector(list);

  [...newList.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(node => newList.appendChild(node));
}

function getEmployees(list) {
  const newList = document.querySelector(list);
  const employees = [...newList.children].map(item => ({
    name: item.innerHTML.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employees;
}

getEmployees('ul');
sortList('ul');
