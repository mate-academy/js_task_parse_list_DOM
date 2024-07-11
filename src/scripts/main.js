'use strict';

const ul = document.querySelector('ul');

function sortList(a, b) {
  const salaryA = Number(a.dataset.salary.replace(/[^0-9]/g, ''));
  const salaryB = Number(b.dataset.salary.replace(/[^0-9]/g, ''));

  return salaryB - salaryA;
}

function getEmployees() {
  const elements = [...document.querySelectorAll('[data-salary]')];
  const sorted = elements.sort(sortList);

  sorted.forEach((e) => ul.appendChild(e));
}

getEmployees();
