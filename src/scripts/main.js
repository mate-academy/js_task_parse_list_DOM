'use strict';

const list = document.querySelectorAll('li');
const employees = Array.from(list);

const sortedEmployees = employees.sort((a, b) => {
  const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedEmployees.forEach((employee) => ul.appendChild(employee));
