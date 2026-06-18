'use strict';

const list = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/\$|,/g, ''));
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  listElement.append(...items);
}

function getEmployees(listElement) {
  return [...listElement.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
