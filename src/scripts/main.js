'use strict';

[...document.querySelectorAll('[data-salary]')]
  .sort((a, b) => {
    const salaryB = +b.dataset.salary.split('$').join('').split(',').join('');
    const salaryA = +a.dataset.salary.split('$').join('').split(',').join('');

    return salaryB - salaryA;
  }).forEach(li => document.querySelector('ul').append(li));
