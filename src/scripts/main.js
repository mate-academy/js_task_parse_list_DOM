'use strict';

// write code here

const employeeList = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age')),
    };
  });
}

sortList(employeeList);

getEmployees(employeeList);
