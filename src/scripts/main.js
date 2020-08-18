'use strict';

const list = [...document.querySelectorAll('[data-salary]')];

list.sort((a, b) => {
  const salaryB = +b.dataset.salary.slice(1).split(',').join('');
  const salaryA = +a.dataset.salary.slice(1).split(',').join('');

  return salaryB - salaryA;
});

document.querySelector('ul').append(...list);
