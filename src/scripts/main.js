'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

const formatSalary = (str) => +str.replaceAll('$', '').replaceAll(',', '');

const sortList = (items) =>
  items.sort(
    (a, b) => formatSalary(b.dataset.salary) - formatSalary(a.dataset.salary),
  );

const getEmployees = (items) =>
  items.map((item) => {
    const { position, salary, age } = item.dataset;
    const itemName = item.innerHTML.trim();

    return {
      name: itemName,
      position,
      salary,
      age,
    };
  });

const list = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

sortList(listItems);

list.innerHTML = '';
listItems.forEach((li) => list.appendChild(li));

getEmployees(listItems);
