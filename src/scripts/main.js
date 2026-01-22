'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

  list.innerHTML = '';

  itemsArray.forEach((item) => list.append(item));
}

function getEmployees(listElement) {
  const itemsArray = Array.from(list.children);

  return itemsArray.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList();
getEmployees();
