'use strict';

function parseSalary(salaryStr) {
  let salary = '';

  for (const ch of salaryStr) {
    if (ch === '$' || ch === ',') {
      continue;
    }
    salary += ch;
  }

  return Number(salary);
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  for (const item of items) {
    list.appendChild(item);
  }
}

function getEmployees(list) {
  const items = [...list.children];

  const employee = items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));

  return employee;
}

const ul = document.querySelector('ul');

sortList(ul);

getEmployees(ul);
