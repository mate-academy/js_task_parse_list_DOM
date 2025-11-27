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

  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(emList) {
  if (!emList) {
    return [];
  }

  const employees = [];

  for (const item of list.children) {
    const nameTextEl = item.querySelector('.name');
    const nameText = nameTextEl ? nameTextEl.textContent.trim() : '';
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
    const age = Number(item.dataset.age);

    employees.push({
      nameText,
      position,
      salary,
      age,
    });
  }

  return employees;
}

sortList(list);
getEmployees(list);
