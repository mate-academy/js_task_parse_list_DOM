/* eslint-disable no-shadow */
'use strict';

function parseSalary(salary) {
  return parseFloat(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list, property) {
  const itemsArray = Array.from(list);

  itemsArray.sort((a, b) => {
    const valueA = parseSalary(a.getAttribute(`data-${property}`));
    const valueB = parseSalary(b.getAttribute(`data-${property}`));

    return valueB - valueA;
  });

  const parent = list[0].parentElement;

  parent.innerHTML = '';
  itemsArray.forEach((item) => parent.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
}

const employeeList = document.querySelectorAll('ul li');

sortList(employeeList, 'salary');

const employees = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log('Employees:', employees);
