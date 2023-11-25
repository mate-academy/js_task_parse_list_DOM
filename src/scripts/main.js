'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

const employeesArray = [];

function getEmployees() {
  for (const employee of employees) {
    const employeeFullName = employee.textContent;
    const employeePositiion = employee.dataset.position;
    const employeeSalary = employee.dataset.salary;
    const employeeAge = employee.dataset.age;

    employeesArray.push({
      name: employeeFullName,
      position: employeePositiion,
      salary: employeeSalary,
      age: employeeAge,
    });
  }
}

function getSalary(employeeSalary) {
  return +employeeSalary.slice(1).split(',').join('');
}

function sortEmployees() {
  [...employees].sort((first, second) =>
    getSalary(second.dataset.salary) - getSalary(first.dataset.salary))
    .forEach(employee => listOfEmployees.append(employee));
};

getEmployees();
sortEmployees();
