'use strict';

// write code here
const listElement = document.querySelector('ul');
const itemsElement = [...listElement.children];

function parseSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

function sortList(items) {
  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(items) {
  return items.map((item) => {
    return {
      name: item.textContent,
      age: item.getAttribute('data-age'),
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
    };
  });
}

sortList(itemsElement);
getEmployees(itemsElement);
