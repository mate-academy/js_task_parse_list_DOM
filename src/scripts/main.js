'use strict';

[...document.querySelectorAll('[data-salary]')]
  .sort((a, b) => {
    return +b.dataset.salary.split('$').join('').split(',').join('')
    > +a.dataset.salary.split('$').join('').split(',').join('')
      ? 1 : -1;
  }).forEach(li => document.querySelector('ul').append(li));
