'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((li) => ({
    name: li.querySelector('.name')
      ? li.querySelector('.name').textContent
      : '',
    position: li.querySelector('.position')
      ? li.querySelector('.position').textContent
      : '',
    salary: parseSalary(li.dataset.salary),
    age: li.querySelector('.age')
      ? Number(li.querySelector('.age').textContent)
      : null,
  }));
}

function displayEmployees(employees) {}
document.addEventListener('DOMContentLoaded', () => {
  const ulElement = document.querySelector('ul');

  if (ulElement) {
    sortList(ulElement);

    const employees = getEmployees(ulElement);
    displayEmployees(employees);
  }
});
