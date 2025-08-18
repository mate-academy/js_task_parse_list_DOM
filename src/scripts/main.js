'use strict';

// write code here

const employeeList = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/\$/g, '').replace(/,/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
