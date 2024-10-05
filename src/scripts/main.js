'use strict';

function convertSalaryToNumber(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute('data-salary'));
    const salaryB = convertSalaryToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent,
    position: item.getAttribute('data-position'),
    salary: convertSalaryToNumber(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
