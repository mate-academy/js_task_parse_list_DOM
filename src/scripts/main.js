'use strict';

// write code here

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(employeesList) {
  const items = Array.from(employeesList.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => employeesList.appendChild(item));
}

function getEmployees(employeesList) {
  const items = Array.from(employeesList.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);

getEmployees(list);
