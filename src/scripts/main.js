'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(employeeList) {
  const items = [...employeeList.children];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => employeeList.append(item));
}

function getEmployees(employeeList) {
  return [...employeeList.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);

window.employees = getEmployees(list);
