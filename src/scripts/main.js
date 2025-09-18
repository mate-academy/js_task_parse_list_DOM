'use strict';

function parseSalary(str) {
  return Number(String(str || '').replace(/[$,]/g, '')) || 0;
}

function sortList(list) {
  if (!list) return;

  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  if (!list) return [];

  return Array.from(list.children).map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position || '',
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age) || 0,
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');
  if (!list) return;

  sortList(list);
  const employees = getEmployees(list);

  window.sortList = sortList;
  window.getEmployees = getEmployees;
  window.employees = employees;
});
