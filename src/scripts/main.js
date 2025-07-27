'use strict';

const listEl = document.querySelector('ul');
const items = Array.from(listEl.querySelectorAll('li'));

function getSalary(el) {
  const rawSalary = el.dataset.salary || '';
  const cleaned = rawSalary.replace(/[$,]/g, '');
  const salary = Number(cleaned);

  if (isNaN(salary)) {
    return 0;
  }

  return salary;
}

function sortList(list) {
  const sorted = list.sort((a, b) => getSalary(b) - getSalary(a));

  sorted.forEach((item) => listEl.appendChild(item));
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.textContent.trim(),
    salary: getSalary(el),
  }));
}

sortList(items);

const employees = getEmployees(items);

// eslint-disable-next-line no-console
console.log(employees);
