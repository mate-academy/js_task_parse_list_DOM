'use strict';

const employees = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

function toNum(str) {
  const num = str.slice(1).split(',').join('');

  return +num;
}

function getEmployees(workersArr) {
  return [...workersArr].sort(
    (a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary),
  );
}

const sortedEmployees = getEmployees(employees);

sortedEmployees.forEach((employee) => listOfEmployees.append(employee));
