'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  const noDollar = salaryStr.split('$').join('');
  const noComma = noDollar.split(',').join('');

  return +noComma;
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
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));
}

sortList(list);

const employees = getEmployees(list);
