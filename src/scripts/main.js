'use strict';

// write code here
function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: parseInt(item.dataset.age, 10),
  }));
}

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);
