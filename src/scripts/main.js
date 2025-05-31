'use strict';

// write code here
function salaryStringToNumber(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: salaryStringToNumber(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age'), 10),
    element: item,
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  employees.forEach((employee) => {
    list.appendChild(employee.element);
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
