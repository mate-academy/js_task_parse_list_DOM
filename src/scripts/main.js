'use strict';

// write code here
function sortList(list) {
  const sortedEmployees = [...employees].sort((employee1, employee2) => {
    const a = numberFromString(employee1);
    const b = numberFromString(employee2);

    return b - a;
  });

  return sortedEmployees.map(employee => listEmployees.appendChild(employee));
}

function numberFromString(employee) {
  const employeeSalary = employee.dataset.salary;

  return Number(employeeSalary
    .replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

const employees = document.querySelectorAll('[data-salary]');
const listEmployees = document.querySelector('ul');

sortList(employees);
getEmployees(employees);
