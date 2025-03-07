'use strict';

const employeeList = document.querySelectorAll('ul li');
const employeesArray = Array.from(employeeList);

function getSalary(employee) {
  return parseFloat(employee.getAttribute('data-salary').replace(/[$,]/g, ''));
}

function sortList() {
  employeesArray.sort((a, b) => getSalary(b) - getSalary(a));

  const ul = document.querySelector('ul');

  employeesArray.forEach((employee) => ul.appendChild(employee));
}

function getEmployees() {
  return employeesArray.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.getAttribute('data-position'),
    salary: getSalary(employee),
    age: parseInt(employee.getAttribute('data-age'), 10),
  }));
}

sortList();
getEmployees();
