'use strict';

const salaryArray = [...document.querySelectorAll('li[data-salary]')];

salaryArray.sort((a, b) => {
  const el1 = parseInt(a.getAttribute('data-salary').replace('$', ''));
  const el2 = parseInt(b.getAttribute('data-salary').replace('$', ''));

  return el2 - el1;
});

salaryArray.forEach((element) => {
  document.querySelector('ul').appendChild(element);
});
