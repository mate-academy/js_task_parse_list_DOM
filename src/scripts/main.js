'use strict';

const listEmployees = document.querySelector('ul');

function parseSalary(value) {
  return Number(value.replace(/[$,]/g, ''));
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryB = parseSalary(b.dataset.salary);
    const salaryA = parseSalary(a.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

sortList(listEmployees);

function getEmployees(list) {
  if (!list) {
    return [];
  }

  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

getEmployees(listEmployees);
