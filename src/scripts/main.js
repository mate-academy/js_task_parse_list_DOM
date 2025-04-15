'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const listElement = document.querySelector('ul');

sortList(listElement);

const employees = getEmployees(listElement);
const averageSalary =
  employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;

const resultDiv = document.createElement('div');

resultDiv.textContent = 'Середня зарплата: $' + averageSalary.toFixed(2);
document.body.appendChild(resultDiv);
