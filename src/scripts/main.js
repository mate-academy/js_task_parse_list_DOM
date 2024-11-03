'use strict';

// write code here

const employeeList = document.querySelector('ul');

// Convert the data-salary attribute from a string to a number

function parseSalary(salarySring) {
  if (!salarySring) {
    return 0;
  }

  return parseFloat(salarySring.replace(/[^0-9.-]+/g, ''));
}

// Take a list element and sorts it by the data-salary attribute

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

// Returns an array of employee objects with specified schema.

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.innerText,
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age')),
  }));
}

sortList(employeeList);

getEmployees(employeeList);
