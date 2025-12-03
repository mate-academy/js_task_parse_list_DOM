'use strict';

const employees = Array.from(document.getElementsByTagName('li'));

employees.sort((a, b) => {
  const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));
  const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

  return salaryB - salaryA;
});

const list = document.querySelector('ul');

list.innerHTML = '';
employees.forEach((el) => list.appendChild(el));
