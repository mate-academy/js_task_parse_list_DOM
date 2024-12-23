'use strict';

// write code here
const list = document.querySelectorAll('li');
const listArray = Array.from(list);

const sortedList = listArray.sort((a, b) => {
  const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
  const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

  return salaryB - salaryA;
});

const par = document.querySelector('ul');

par.innerHTML = '';

sortedList.forEach((item) => {
  par.appendChild(item);
});
