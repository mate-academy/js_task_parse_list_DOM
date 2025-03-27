'use strict';

// write code here
const li = [...document.querySelectorAll('li')];
const sortedElements = li.sort((a, b) => {
  const salaryA = Number(a.dataset.salary.replace('$', '').replace(',', '.'));
  const salaryB = Number(b.dataset.salary.replace('$', '').replace(',', '.'));

  return salaryA - salaryB;
});

sortedElements.forEach((el) => document.querySelector('ul').appendChild(el));
