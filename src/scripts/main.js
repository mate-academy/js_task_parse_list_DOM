'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ulElement = document.querySelector('ul');
  const employees = [...document.querySelectorAll('li')];

  const sortedEmployees = employees.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  const fragment = document.createDocumentFragment();

  sortedEmployees.forEach((employee) => fragment.appendChild(employee));

  ulElement.appendChild(fragment);
});

function parseSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}
