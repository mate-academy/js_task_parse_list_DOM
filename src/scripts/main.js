'use strict';

// write code here
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const sA = parseSalary(a.dataset.salary);
    const sB = parseSalary(b.dataset.salary);

    return sB - sA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
