'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.split('$').join('').split(',').join(''));
}

function sortList(parentElement) {
  const items = [...parentElement.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => parentElement.appendChild(item));
}

function getEmployees(parentElement) {
  const items = [...parentElement.querySelectorAll('li')];

  return items.map((item) => {
    const salary = parseSalary(item.getAttribute('data-salary'));

    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary,
      age: Number(item.getAttribute('data-age')),
    };
  });
}

// 🔹 Виклики
const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

// eslint-disable-next-line no-console
console.log(employees);
