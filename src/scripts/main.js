'use strict';

const ul = document.querySelector('ul');

sortList(ul);

let employees = getEmployees(ul);

function parseSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[^0-9.]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  const sortedItems = items.sort((a, b) => {
    const salaryA = parseSalaryToNumber(a.dataset.salary);
    const salaryB = parseSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  employees = Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    salary: parseSalaryToNumber(item.dataset.salary),
    position: item.dataset.position,
    age: Number(item.dataset.age),
  }));

  return employees;
}
