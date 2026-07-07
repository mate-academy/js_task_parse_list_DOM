'use strict';

function getEmployees(list) {
  const items = list.children;
  const employees = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    employees.push({
      name: item.dataset.name,
      position: item.dataset.position,
      salary: parseInt(item.dataset.salary, 10),
      age: parseInt(item.dataset.age, 10),
    });
  }

  return employees;
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary, 10);
    const salaryB = parseInt(b.dataset.salary, 10);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
