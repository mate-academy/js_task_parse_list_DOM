'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(item) {
  const cleaned = item.dataset.salary.replace(/[$,]/g, '');

  return Number(cleaned);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => parseSalary(b) - parseSalary(a));

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item),
      age: Number(item.dataset.age),
    };
  });
}

sortList(employeesList);

getEmployees(employeesList);
