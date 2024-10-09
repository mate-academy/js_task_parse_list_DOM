'use strict';

const salaryList = [...document.querySelectorAll('li[data-salary]')];

salaryList.sort((a, b) => {
  const item1 = parseInt(a.getAttribute('data-salary').replace('$', '')) || 0;
  const item2 = parseInt(b.getAttribute('data-salary').replace('$', '')) || 0;

  return item2 - item1;
});

salaryList.forEach((item) => {
  document.querySelector('ul').appendChild(item);
});
