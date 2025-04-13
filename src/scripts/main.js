'use strict';

// write code here
const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.]/g, ''));
}

function sortList() {
  const items = Array.from(list.children);
  const sortedItems = items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position || '',
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age) || null,
  }));
}

sortList();
getEmployees();
