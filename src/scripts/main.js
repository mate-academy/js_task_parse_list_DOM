'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.split('$').join('').split(',').join(''));
}

const list = document.querySelector('ul');
const listItems = [...list.querySelectorAll('li')];

function sortList(items, listElement) {
  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(items) {
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

sortList(listItems, list);
getEmployees(listItems);
