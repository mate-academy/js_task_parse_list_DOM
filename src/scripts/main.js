'use strict';

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^\d.]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  items.forEach((item) => list.appendChild(item));
}

window.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul[data-list]');

  if (!list) {
    return;
  }
  sortList(list);

  const employees = getEmployees(list);

  window.employees = employees;
});

// write code here
