'use strict';

// write code here
const ul = document.querySelector('ul');

function salaryNumber(salary) {
  return parseInt(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('[data-salary]'));

  items.sort(
    (a, b) =>
      salaryNumber(b.getAttribute('data-salary')) -
      salaryNumber(a.getAttribute('data-salary')),
  );

  list.innerHTML = '';

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('[data-salary]'));

  const employees = items.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: salaryNumber(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age')),
  }));

  return employees;
}

sortList(ul);
getEmployees(ul);
