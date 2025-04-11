'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList() {
  const list = document.querySelector('ul');
  const items = Array.from(list.querySelectorAll('li'));

  const sortedItems = items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const items = document.querySelectorAll('li');
  const employees = [];

  items.forEach((item) => {
    employees.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    });
  });

  return employees;
}

sortList();

getEmployees();
