/* eslint-disable no-console */
/* eslint-disable no-shadow */
'use strict';

function convertSalaryToNumber(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
  list.innerHTML = '';
  listItems.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  const employees = [];

  Array.from(list.children).forEach(item => {
    employees.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return employees;
}

const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

console.log(employees);
