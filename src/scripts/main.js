'use strict';

const employeeList = document.querySelector('ul');

function convertSalaryToNumber(salaryStr) {
  return parseFloat(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = [...list.children];

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return [...list.children].map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age
  }));
}

sortList(employeeList);
getEmployees(employeeList);
