'use strict';

function parseSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = [];

  list.querySelectorAll('li').forEach((item) => {
    employees.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    });
  });

  return employees;
}

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  sortList(employeeList);

  const employeesArray = getEmployees(employeeList);

  return employeesArray;
});
