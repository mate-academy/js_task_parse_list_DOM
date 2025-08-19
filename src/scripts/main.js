'use strict';

function parseSalary(raw) {
  return Number(raw.replace(/[^\d.]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  list.append(...items);
}

function getEmployees(list) {
  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (!list) {
    return;
  }

  sortList(list);

  const employees = getEmployees(list);

  // eslint-disable-next-line no-console
  console.log(employees);
});
