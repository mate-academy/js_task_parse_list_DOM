/* eslint-disable prettier/prettier */
'use strict';

const employeesDOMList = document.querySelectorAll('ul > li');

function getEmployees(domList) {
  const employeesList =[];

  domList.forEach(emp => {
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

function sortList(employeesList) {
  const ulList = document.querySelector('ul');
  const copyEmployees = employeesList.map(emp => {
    return { ...emp };
  });

  copyEmployees.sort((a, b) => {
    const salaryA = salaryToNumber(a['salary']);
    const salaryB = salaryToNumber(b['salary']);

    return Number(salaryB) - Number(salaryA);
  });

  ulList.innerHTML = '';

  copyEmployees.forEach(emp => {
    const li = document.createElement('li');

    Object.entries(emp).forEach(([key, value]) => {
      li.setAttribute(`data-${key}`, value);
    });

    li.textContent = emp.name;


    ulList.appendChild(li);
  });
}

const employees = getEmployees(employeesDOMList);

sortList(employees);
