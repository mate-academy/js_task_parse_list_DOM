'use strict';

const employeeList = document.querySelector('ul');

function getSalary(salary) {
  return parseInt(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort(
    (a, b) => getSalary(b.dataset.salary) - getSalary(a.dataset.salary),
  );
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: getSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
