'use strict';

function getEmployees() {
  const employees = [];

  for (const employee of [...document.querySelectorAll('li')]) {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.getAttribute('data-position'),
      salary: getsalaryNumber(employee),
      age: parseInt(employee.getAttribute('data-age')),
    });
  }

  return employees;
}

function sortEmployeesbysalary(list) {
  const listItems = [...list.children];

  listItems.sort((a, b) => getsalaryNumber(b) - getsalaryNumber(a));

  list.innerHTML = '';
  listItems.forEach((item) => list.appendChild(item));
}

function getsalaryNumber(element) {
  const stringSalary = element.getAttribute('data-salary');

  return parseInt(stringSalary.replace(/[$,]/g, ''));
}

getEmployees();
sortEmployeesbysalary(document.querySelector('ul'));
