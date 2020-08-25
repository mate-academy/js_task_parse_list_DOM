'use strict';

const employees = [...document.querySelectorAll('[data-salary]')];

employees
  .sort((a, b) => b.dataset.salary
    .slice(1).split(',').join('') - a.dataset.salary
    .slice(1).split(',').join(''));

document.querySelector('ul').append(...employees);
