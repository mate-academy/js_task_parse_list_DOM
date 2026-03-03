'use strict';

const list = document.querySelector('.employees-list');

function parseSalary(salary) {
  return Number(salary);
}

function sortList(employeeList) {
  const items = Array.from(employeeList.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => {
    employeeList.appendChild(item);
  });
}

function getEmployees(employeeList) {
  const items = Array.from(employeeList.children);

  return items.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
