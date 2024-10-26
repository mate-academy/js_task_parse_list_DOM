'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  itemsArray.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.innerText.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeesArray = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log(employeesArray);
