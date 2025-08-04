'use strict';

const lists = document.querySelector('ul');

function parseSalary(element) {
  return parseFloat(element.dataset.salary.replace(/[^0-9.]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => parseSalary(b) - parseSalary(a));

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    salary: parseSalary(item),
    age: parseInt(item.dataset.age),
    position: item.dataset.position,
  }));
}

sortList(lists);
getEmployees(lists);
