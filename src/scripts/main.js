'use strict';

const list = document.querySelector('ul');

function parseSalary(value) {
  const clean = value.replace(/[$,]/g, '');
  const num = Number(clean);

  return Number.isFinite(num) ? num : -Infinity;
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary || '');
    const salaryB = parseSalary(b.dataset.salary || '');

    return salaryB - salaryA;
  });

  listElement.append(...items);
}

function getEmployees(listElement) {
  return Array.from(listElement.children).map((item) => {
    const salary = parseSalary(item.dataset.salary || '');
    const age = Number(item.dataset.age);

    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number.isFinite(salary) ? salary : null,
      age: Number.isFinite(age) ? age : null,
    };
  });
}

if (list) {
  sortList(list);
  getEmployees(list);
}
