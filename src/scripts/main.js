'use strict';

function sortEmployees(list) {
  const listElement = document.querySelector('ul');
  const newListElement = document.createElement('ul');
  const employees = [...list];

  employees.sort(
    (employee1, employee2) =>
      Number(employee2.dataset.salary.replaceAll('$', '').replaceAll(',', '')) -
      Number(employee1.dataset.salary.replaceAll('$', '').replaceAll(',', '')),
  );

  for (const employee of employees) {
    newListElement.append(employee);
  }

  listElement.replaceWith(newListElement);
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

sortEmployees(employeeElementsList);
getEmployees(employeeElementsList);
