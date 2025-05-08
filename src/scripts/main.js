'use strict';

const list = document.querySelector('ul');
const items = [...document.querySelectorAll('ul > li')];

const parseSalary = (salary) => parseFloat(salary.replace(/[$,]/g, ''));

items.sort(
  (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
);

list.innerHTML = '';
items.forEach((item) => list.appendChild(item));
