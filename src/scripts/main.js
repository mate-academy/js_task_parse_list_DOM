'use strict';

// write code here
const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace('$', '').replace(',', ''));
}

function sortList(listEl) {
  const items = Array.from(listEl.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listEl.innerHTML = '';
  items.forEach((item) => listEl.appendChild(item));
}

function getEmployees(listEl) {
  const items = Array.from(listEl.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
