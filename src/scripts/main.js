'use strict';

function parseSalary(s) {
  return Number(s.replace(/[$,\s]/g, ''));
}

export function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items
    .map((li) => ({
      node: li,
      salary: parseSalary(li.dataset.salary),
    }))
    .sort((a, b) => b.salary - a.salary)
    .forEach((item) => {
      ul.appendChild(item.node);
    });
}

export function getEmployees(ul) {
  return Array.from(ul.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

if (list) {
  sortList(list);
  getEmployees(list);
}
