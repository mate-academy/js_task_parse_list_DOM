'use strict';

const pageList = document.querySelector('ul');

function parseSalary(salaryStr) {
  return +salaryStr.split('$').join('').split(',').join('');
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
  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: +li.dataset.age,
  }));
}

sortList(pageList);

const employees = getEmployees(pageList);

// eslint-disable-next-line no-console
console.log(employees);
