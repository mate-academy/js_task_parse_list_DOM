'use strict';

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[^0-9.]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => {
    const { position, salary, age } = item.dataset;
    const employeeName = item.textContent.trim();

    return {
      name: employeeName,
      position,
      salary: parseSalary(salary),
      age: Number(age),
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  sortList(list);
  getEmployees(list);
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parseSalary,
    sortList,
    getEmployees,
  };
}
