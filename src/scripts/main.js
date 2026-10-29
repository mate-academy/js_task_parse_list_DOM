'use strict';

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);

function sortList(employeeList) {
  const items = Array.from(employeeList.children);

  items
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((item) => employeeList.appendChild(item));
}

function getEmployees(employeeList) {
  return Array.from(employeeList.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalary(salary) {
  return Number(salary.replace(/[^\d.-]/g, ''));
}
