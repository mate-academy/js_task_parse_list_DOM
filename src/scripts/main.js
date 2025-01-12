'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(salary) {
  return parseInt(salary.replace(/[^0-9]/g, ''), 10);
}

function sortList(list) {
  const employees = Array.from(list.children);

  employees.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  employees.forEach((employee) => list.appendChild(employee));
}

function getEmployees(list) {
  return Array.from(list.children).map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: parseSalary(employee.dataset.salary),
    age: parseInt(employee.dataset.age, 10),
  }));
}

sortList(employeesList);

getEmployees(employeesList);
