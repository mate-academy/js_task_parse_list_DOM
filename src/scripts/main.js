'use strict';

function convertSalaryToNumber(salaryString) {
  return parseInt(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const employees = Array.from(list.children).map(li => ({
    element: li,
    salary: convertSalaryToNumber(li.getAttribute('data-salary')),
  }));

  employees.sort((a, b) => b.salary - a.salary);

  employees.forEach(employee => list.appendChild(employee.element));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map(li => ({
    name: li.textContent,
    position: li.getAttribute('data-position'),
    salary: li.getAttribute('data-salary'),
    age: parseInt(li.getAttribute('data-age')),
  }));

  return employees;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
