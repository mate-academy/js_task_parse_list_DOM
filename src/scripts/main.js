'use strict';

// write code here
const employeesList = [...document.querySelectorAll('li')];

function sortList(list) {
  list
    .sort((a, b) => toNumber(b.dataset.salary)
      - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...list);
}

function getEmployee(list) {
  return [...list].map(employee => ({
    name: employee.textContent.trim(),
    ...employee.dataset,
  }));
}

function toNumber(str) {
  return +str.replace(/[^\d]/g, '');
}

getEmployee(employeesList);
sortList(employeesList);
