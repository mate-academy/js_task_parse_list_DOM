'use strict';

const listEl = document.getElementById('myList');

function convertToNumber(str) {
  return Number(str.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    position: item.dataset.position,
    salary: convertToNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(listEl);
getEmployees(listEl);
