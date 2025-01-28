'use strict';

function parseSalary(salary) {
  return parseInt(salary.replace(/[^0-9.-]+/g, ''), 10);
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

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (list !== null) {
    sortList(list);
  }

  getEmployees(list);
});
