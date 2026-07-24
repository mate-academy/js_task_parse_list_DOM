'use strict';

function getSalary(item) {
  return parseInt(item.dataset.salary.replace(/\D/g, ''), 10);
}

function getEmployees(list) {
  const items = Array.from(list.children);
  const employees = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    employees.push({
      name: item.dataset.name,
      position: item.dataset.position,
      salary: getSalary(item),
      age: parseInt(item.dataset.age, 10),
    });
  }

  return employees;
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = getSalary(a);
    const salaryB = getSalary(b);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
