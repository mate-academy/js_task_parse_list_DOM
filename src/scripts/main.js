'use strict';

const elements = document.querySelector('ul');

function salaryToNumber(str) {
  return Number(str.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort(
    (a, b) =>
      salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary),
  );

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const itemsArray = [...list.querySelectorAll('li')];

  return itemsArray.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: salaryToNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(elements);
getEmployees(elements);
