'use strict';

const list = document.querySelector('ul');

function getSalaryAsNumber(element) {
  const salaryStr = element.dataset.salary;

  return Number(salaryStr.slice(1).replaceAll(',', ''));
}

function sortList(employeeList) {
  const items = [...employeeList.children];

  items.sort((a, b) => {
    return getSalaryAsNumber(b) - getSalaryAsNumber(a);
  });

  for (const item of items) {
    employeeList.append(item);
  }
}

function getEmployees(employeeList) {
  const employees = [];

  for (const element of employeeList.children) {
    const employeeName = element.textContent.trim();
    const position = element.dataset.position;
    const salary = getSalaryAsNumber(element);
    const age = Number(element.dataset.age);

    employees.push({
      name: employeeName,
      position,
      salary,
      age,
    });
  }

  return employees;
}

sortList(list);
getEmployees(list);
