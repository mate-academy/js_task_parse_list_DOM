'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace('$', '').replaceAll(',', ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);

export { parseSalary, sortList, getEmployees };
