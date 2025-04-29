'use strict';

// write code here
const list = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.children);

  return items.map((item) => ({
    name: item.querySelector('.name')?.textContent.trim() || '',
    position: item.querySelector('.position')?.textContent.trim() || '',
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age) || 0,
  }));
}

sortList(list);
getEmployees(list);
