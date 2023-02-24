'use strict';
// write code here

const arrayEmployees = document.querySelectorAll('li');

function sortEmployees(a, b) {
  const salaryA = a.dataset.salary;
  const salaryNumberA = +salaryA.substring(
    1, salaryA.length).replaceAll(',', '');
  const salaryB = b.dataset.salary;
  const salaryNumberB = +salaryB.substring(
    1, salaryA.length).replaceAll(',', '');

  return salaryNumberA - salaryNumberB;
};

const result = [...arrayEmployees].sort(sortEmployees);

const list = document.querySelector('ul');

list.append(...result);
