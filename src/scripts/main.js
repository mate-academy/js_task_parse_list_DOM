'use strict';

const listEmployees = document.querySelector('ul');

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));

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
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
}

getEmployees(listEmployees);
