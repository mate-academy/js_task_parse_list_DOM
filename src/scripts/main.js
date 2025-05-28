/* eslint-disable prettier/prettier */
'use strict';

const employeesDOMList = document.querySelectorAll('ul > li');

function getEmployees() {
  const employeesList = [];

  employeesDOMList.forEach(emp => {
    const entries = Object.entries(emp.dataset);
    const employee = {};

    entries.push(['name', emp.textContent.trim()]);

    entries.forEach(entry => {
      const [key, value] = entry;

      employee[key] = value;
    });

    employeesList.push(employee);
  });

  return employeesList;
}

function salaryToNumber(salary) {
  return salary.slice(1, salary.length).split(',').join('');
}

function sortEmployeeBySalary(employeesList) {
  const copyEmployees = employeesList.map(emp => {
    return { ...emp };
  });

  copyEmployees.sort((a, b) => {
    const salaryA = salaryToNumber(a['salary']);
    const salaryB = salaryToNumber(b['salary']);

    return Number(salaryA) - Number(salaryB);
  });

  return copyEmployees;
}

const employees = getEmployees();

sortEmployeeBySalary(employees);
