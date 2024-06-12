'use strict';

const employeesList = document.querySelector('ul');

function convertSalary(salaryString) {
  return salaryString.slice(1).replace(',', '.') * 1000;
}

function sortList(list) {
  return [...list.children]
    .sort((a, b) =>
      convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary))
    .forEach(element => list.append(element));
}

function getEmployees(list) {
  return list.forEach(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
