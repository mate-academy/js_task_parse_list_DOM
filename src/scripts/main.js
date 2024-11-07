'use strict';

const employees = document.querySelectorAll('li[data-position]');
const ul = document.querySelector('ul');

function sortList(list) {
  return Array.from(list).sort(
    (employee1, employee2) =>
      parseFloat(employee2.dataset.salary.replace(/[^0-9.-]+/g, '')) -
      parseFloat(employee1.dataset.salary.replace(/[^0-9.-]+/g, '')),
  );
}

function getEmployees(list) {
  return list
    .map(
      (employee) => `
    <li
      data-position="${employee.dataset.position}"
      data-salary="${employee.dataset.salary}"
      data-age="${employee.dataset.age}"
    >
      ${employee.textContent}
    </li>
  `,
    )
    .join('');
}

const salariesSorted = sortList(employees);
const res = getEmployees(salariesSorted);

ul.innerHTML = res;
