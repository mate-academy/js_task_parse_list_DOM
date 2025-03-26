'use strict';

const lister = document.querySelector('ul');

function parseSalary(value) {
  return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
}

function sortList(list) {
  const employees = [...list.children];

  employees.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  employees.forEach((emp) => list.appendChild(emp));
}

function getEmployees(list) {
  return [...list.children].map((emp) => ({
    name: emp.dataset.name,
    position: emp.dataset.position,
    salary: parseSalary(emp.dataset.salary),
    age: parseInt(emp.dataset.age, 10),
  }));
}

sortList(lister);

getEmployees(lister);
