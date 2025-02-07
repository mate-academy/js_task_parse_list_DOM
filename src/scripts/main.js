'use strict';

const emplList = document.querySelectorAll('li');

function getSalary(el) {
  return Number(el.dataset.salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const sortedItems = Array.from(list).sort(
    (a, b) => getSalary(b) - getSalary(a),
  );
  const parentEl = list[0].parentElement;

  sortedItems.forEach((item) => parentEl.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(emplList);
getEmployees(emplList);
