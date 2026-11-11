'use strict';

// write code here

const list = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString);
}

function sortList(employeesList) {
  const employees = [...employeesList.querySelectorAll('li')];

  employees.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  employees.forEach(employee => {
    employeesList.appendChild(employee);
  });
}

function getEmployees(employeesList) {
  const li = employeesList.querySelectorAll('li');
  const employees = [];

  for (const l of li) {
    employees.push({
      name: l.dataset.name,
      position: l.dataset.position,
      salary: parseSalary(l.dataset.salary),
      age: Number(l.dataset.age),
    });
  }

  return employees;
}

sortList(list);
getEmployees(list);
