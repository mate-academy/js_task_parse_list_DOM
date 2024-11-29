'use strict';

const parentElement = document.querySelector('ul');
const employees = Array.from(document.querySelectorAll('li'));

function getSalary(employee) {
  const salaryString = employee.getAttribute('data-salary');
  const cleanSalary = salaryString.replace(/[^0-9.-]+/g, '');

  return parseInt(cleanSalary, 10);
}

function sortList() {
  employees.sort((a, b) => getSalary(b) - getSalary(a));

  parentElement.innerHTML = '';
  employees.forEach((employee) => parentElement.appendChild(employee));
}

function getEmployees() {
  return employees.map((employee) => ({
    name: employee.textContent.trim(),
    salary: getSalary(employee),
  }));
}

sortList();

const employeeObjects = getEmployees();

console.log(employeeObjects);
