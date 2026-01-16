'use strict';

function convertString(str) {
  return Number(str.replace('$', ''));
}

const list = document.querySelector('ul');

function sortList(listElement) {
  const employees = [...listElement.children];

  employees.sort(
    (a, b) => convertString(b.dataset.salary) - convertString(a.dataset.salary),
  );

  employees.forEach((employee) => listElement.append(employee));
}

function getEmployees(listElement) {
  return [...listElement.children].map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: convertString(employee.dataset.salary),
    age: employee.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
