'use strict';

function convertSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertSalaryToNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
