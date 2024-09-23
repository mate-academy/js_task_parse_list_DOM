'use strict';

const indexes = document.querySelectorAll('[data-salary]');
const indexesArray = Array.from(indexes);
const sorted = indexesArray.sort(
  (employee1, employee2) =>
    +employee2.dataset.salary.slice(1).split(',').join('') -
    +employee1.dataset.salary.slice(1).split(',').join(''),
);

sorted.forEach((e) => document.querySelector('#list').appendChild(e));
