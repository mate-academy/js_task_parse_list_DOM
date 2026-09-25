'use strict';

const listElement = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const employees = Array.from(list.querySelectorAll('li'));

  employees.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  list.append(...employees);
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li'), (employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: parseSalary(employee.dataset.salary),
    age: Number(employee.dataset.age),
  }));
}

sortList(listElement);
getEmployees(listElement);
