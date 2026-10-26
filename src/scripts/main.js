'use strict';

// write code here
const employeesList = document.querySelector('ul');

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => getSalary(b) - getSalary(a));

  for (const item of items) {
    list.append(item);
  }
}

function getSalary(item) {
  return Number(item.dataset.salary.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(employeesList);

getEmployees(employeesList);
