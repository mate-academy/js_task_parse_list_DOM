'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

const formatSalary = (str) => +str.replaceAll('$', '').replaceAll(',', '');

const sortList = (elements) => {
  const list = document.querySelector('ul');
  const sortedItems = [...elements].sort(
    (a, b) => formatSalary(b.dataset.salary) - formatSalary(a.dataset.salary),
  );

  list.innerHTML = '';
  sortedItems.forEach((li) => list.appendChild(li));

  return sortedItems;
};

const getEmployees = (items) =>
  [...items].map((item) => {
    const { position, salary, age } = item.dataset;
    const itemName = item.innerHTML.trim();

    return {
      name: itemName,
      position,
      salary: formatSalary(salary),
      age: +age,
    };
  });

const listElements = document.querySelectorAll('li');

const sortedElements = sortList(listElements);

const employees = getEmployees(sortedElements);

console.log(employees);
