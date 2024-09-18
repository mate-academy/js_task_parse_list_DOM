'use strict';

function getSalaryFromData(item) {
  let salary = item.getAttribute('data-salary');

  salary = salary.replace(/[$,]/g, '');

  return parseInt(salary, 10);
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  const sortedItems = items.sort((a, b) => {
    return getSalaryFromData(b) - getSalaryFromData(a);
  });

  list.innerHTML = '';
  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => ({
    position: item.getAttribute('data-position'),
    salary: getSalaryFromData(item),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
}

const employeeList = document.querySelector('ul');

// виклик функцій
sortList(employeeList);
getEmployees(employeeList);
