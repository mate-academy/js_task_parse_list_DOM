'use strict';

function normalizeSalary(str) {
  return Number(str.replace(/[^\d]/g, ''));
}

const list = document.querySelector('ul');
const employees = Array.from(list.children);

function sortList(arr) {
  const sorted = arr.sort(
    (a, b) =>
      normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary),
  );

  list.innerHTML = '';

  return sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(arr) {
  return arr.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: normalizeSalary(item.dataset.salary),
    age: +item.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
