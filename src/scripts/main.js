'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log('Список сотрудников:', employees);
});
