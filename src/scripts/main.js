'use strict';

// write code here
const salaryElements = document.querySelectorAll('li[data-salary]');
const salaryArray = Array.from(salaryElements);

salaryArray.sort((a, b) => {
  const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

const ul = document.querySelector('ul');

ul.innerHTML = '';

salaryArray.forEach((element) => {
  ul.appendChild(element);
});
