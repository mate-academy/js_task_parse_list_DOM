'use strict';

function getSalary(element) {
  const rawSalary = element.dataset.salary || '';

  const normalized = rawSalary.trim().replace(/[$,\s]/g, '');
  const salary = Number(normalized);

  return Number.isFinite(salary) ? salary : 0;
}

function sortList(workerList) {
  const items = Array.from(workerList.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));

  workerList.append(...items);

  return items;
}

function getEmployees(workerList) {
  const items = Array.from(workerList.children);

  return items.map((item) => ({
    name: (item.dataset.name || '').trim(),
    position: (item.dataset.position || '').trim(),
    salary: getSalary(item) || 0,
    age: Number(item.dataset.age) || 0,
  }));
}

const list = document.querySelector('ul');

if (list) {
  sortList(list);

  getEmployees(list);
}
