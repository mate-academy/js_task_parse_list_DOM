'use strict';

function parseSalary(salary) {
  return parseFloat(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const itemsList = [...document.querySelectorAll('li')];

  itemsList.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  itemsList.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const itemsList = [...document.querySelectorAll('li')];

  return itemsList.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees();
