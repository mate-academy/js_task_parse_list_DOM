'use strict';

function parseSalary(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
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
