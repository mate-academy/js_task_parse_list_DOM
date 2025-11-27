'use strict';

const list = document.querySelector('ul');

function parseSalary(str) {
  const digits = str.replace(/[^\d]/g, '');

  return Number(digits);
}

function sortList(emList) {
  if (!emList) {
    return;
  }

  const items = Array.from(emList.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => emList.appendChild(item));
}

function getEmployees(emList) {
  if (!emList) {
    return [];
  }

  const employees = [];

  for (const item of emList.children) {
    const nameEl = item.querySelector('.name');
    const name = nameEl ? nameEl.textContent.trim() : '';
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
    const age = Number(item.dataset.age);

    employees.push({
      name,
      position,
      salary,
      age,
    });
  }

  return employees;
}

sortList(list);
getEmployees(list);
