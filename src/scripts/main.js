'use strict';

// write code here
const listElement = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/\$/g, '').replace(/,/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  const sorted = items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(listElement);
getEmployees(listElement);
