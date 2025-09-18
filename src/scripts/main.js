'use strict';

// helper: convert salary string like "$162,700" → 162700
const parseSalary = (str) => Number(str.replace(/[$,]/g, ''));

// 1) sort list by salary (desc)
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

// 2) get array of employees
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// ==== Виклик функцій ====
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  sortList(list);
  getEmployees(list); // масив готовий
});
