'use strict';

function parseSalary(str) {
  return Number(str.replace(/[$,]/g, ''));
}

function getEmployees(listEl) {
  const workers = [];

  for (const li of listEl.children) {
    workers.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: parseSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    });
  }

  return workers;
}

function sortList(listEl) {
  const items = Array.from(listEl.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((li) => listEl.appendChild(li));
}

const list = document.querySelector('ul');

if (list) {
  const employees = getEmployees(list);

  sortList(list);

  window.getEmployees = getEmployees;
  window.sortList = sortList;
  window.employees = employees;
}
