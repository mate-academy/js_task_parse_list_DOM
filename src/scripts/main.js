'use strict';

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, '').trim());
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => {
    const { position, salary, age } = item.dataset;

    return {
      name: item.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

const listElement = document.querySelector('ul');

sortList(listElement);
getEmployees(listElement);
