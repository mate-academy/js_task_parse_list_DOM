'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(ulElement) {
  const items = Array.from(ulElement.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => ulElement.appendChild(item));
}

function getEmployees(ulElement) {
  return Array.from(ulElement.querySelectorAll('li')).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function renderResult(employees) {
  const pre = document.createElement('pre');

  pre.textContent = JSON.stringify(employees, null, 2);
  document.body.appendChild(pre);
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeeArray = getEmployees(employeeList);

renderResult(employeeArray);
