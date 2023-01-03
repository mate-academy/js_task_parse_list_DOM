'use strict';

const employeesList = [...document.querySelectorAll('li')];

function toNumber(str) {
  return +str.replace(/[^\d]/g, '');
}

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

getEmployee(employeesList);
sortList(employeesList);
