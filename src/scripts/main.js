'use strict';

const ul = document.querySelectorAll('ul');
const items = [...ul.querySelectorAll('li')];

const getSalary = (li) => {
  Number(li.dataset.salary.replace(/[$,]/g, ''));
};

items.sort((a, b) => getSalary(a) - getSalary(b));

ul.replaceChildren(...items);
