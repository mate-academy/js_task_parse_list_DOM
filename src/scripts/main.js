'use strict';
/* eslint-disable */

let list = document.querySelector('ul');
const items = Array.from(list.children);

const parseSalary = (salary) => Number(salary.replace(/[$,]/g, ''));

const sortList = (list) => {
  const sortedItems = items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.innerHTML = '';
  sortedItems.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
};

sortList(list);
getEmployees(list);
