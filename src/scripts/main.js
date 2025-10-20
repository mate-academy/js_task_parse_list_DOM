'use strict';

const list = document.querySelector('ul');

if (!list) {
  return console.error('list is not found!');
}

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  for (const item of items) {
    list.appendChild(item);
  }
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age)
  }));
}

sortList(list);

console.log(getEmployees(list));
