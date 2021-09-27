'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

listItems.sort((a, b) => {
  const aSalary = a.dataset.salary;
  const bSalary = b.dataset.salary;

  return bSalary.localeCompare(aSalary, 'en', { numeric: true });
});

listItems.map(item => list.appendChild(item));
