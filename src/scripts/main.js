'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(listEl) {
  const items = [...listEl.querySelectorAll('li')];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => listEl.appendChild(item));
}

function getEmployees(listEl) {
  const items = [...listEl.querySelectorAll('li')];

  return items.map((li) => ({
    name: li.querySelector('h3').textContent.trim(),
    position: li.querySelector('p.position').textContent.trim(),
    salary: parseSalary(li.querySelector('p.salary').textContent),
    age: Number(li.querySelector('p.age').textContent),
  }));
}

const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

employees.forEach(() => {});
