'use strict';

function sortList(list) {
  const listElement = document.querySelector('ul');
  const newListElement = document.createElement('ul');
  const employees = [...list];

  employees.sort(
    (employee1, employee2) =>
      parseSalary(employee2.dataset.salary) -
      parseSalary(employee1.dataset.salary),
  );

  for (const employee of employees) {
    newListElement.append(employee);
  }

  listElement.replaceWith(newListElement);
}

function parseSalary(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

function getEmployees(list) {
  const employees = [];

  for (const employee of list) {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  }

  return employees;
}

const employeeElementsList = document.querySelectorAll('li');

sortList(employeeElementsList);
getEmployees(employeeElementsList);
