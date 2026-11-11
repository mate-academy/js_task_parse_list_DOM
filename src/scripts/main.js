'use strict';

// write code here

const list = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString);
}

function sortList(employeesList) {
  const employees = Array.from(employeesList.querySelectorAll('li'));

  employees.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  employeesList.replaceChildren(...employees);
}

function getEmployees(employeesList) {
  const li = employeesList.querySelectorAll('li');
  const employees = [];

  for (const l of li) {
    const employee = {
      name: l.dataset.name,
      position: l.dataset.position,
      salary: parseSalary(l.dataset.salary),
      age: Number(l.dataset.age),
    };

    employees.push(employee);
  }

  return employees;
}

sortList(list);
getEmployees(list);
