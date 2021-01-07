'use strict';

// write code here

const container = document.querySelector('ul');

function parseSalary(domElement) {
  const salary = domElement.dataset.salary;

  return Number(salary.replace(/[,$]/g, ''));
}

function sortList(list) {
  const sorted = [...list.children]
    .sort((prev, next) => parseSalary(next) - parseSalary(prev));

  return sorted;
}

function getEmployees(list) {
  return container.append(...sortList(list));
}

sortList(container);
getEmployees(container);
