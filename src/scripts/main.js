'use strict';

const list = document.querySelector('ul');

function normalizeSalary(salary) {
  if (!salary) {
    return 0;
  }

  const cleaned = String(salary).replace(/[^0-9.-]/g, '');
  const number = Number(cleaned);

  return Number.isFinite(number) ? number : 0;
}

function sortList(listElement) {
  if (!listElement) {
    return;
  }

  const items = Array.from(listElement.children);

  items.sort(
    (a, b) =>
      normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary),
  );

  listElement.append(...items);
}

function getEmployees(listElement) {
  if (!listElement) {
    return [];
  }

  return Array.from(listElement.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    age: item.dataset.age,
    salary: normalizeSalary(item.dataset.salary),
  }));
}

sortList(list);
getEmployees(list);
