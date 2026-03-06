'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(item) {
  return Number(item.dataset.salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => parseSalary(b) - parseSalary(a));

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((employee) => {
    const nameEmp = employee.textContent.trim();
    const position = employee.dataset.position;
    const salary = Number(employee.dataset.salary.replace(/[^0-9.-]+/g, ''));

    return {
      name: nameEmp,
      position,
      salary,
      age: Number(employee.dataset.age),
    };
  });
}

sortList(employeesList);

getEmployees(employeesList);
